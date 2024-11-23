import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import OnboardingLogoIcon from "@/assets/icons/OnboardingLogo.svg?react";
import { useLocation } from "react-router-dom";

const LoginLoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // URL에서 'code' 파라미터를 추출합니다.
  const code = new URLSearchParams(location.search).get("code");

  useEffect(() => {
    if (code) {
      // 토큰 발급 요청
      fetch("/api/v1/auth/reissue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessToken: localStorage.getItem("refresh_token"), // 기존에 저장된 refresh_token 사용
          refreshToken: localStorage.getItem("access_token"), // 기존에 저장된 access_token 사용
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.accessToken && data.refreshToken) {
            // 토큰 발급 성공시 로컬스토리지에 저장
            localStorage.setItem("access_token", data.accessToken);
            localStorage.setItem("refresh_token", data.refreshToken);
            setLoading(false);
            navigate("/"); // 로그인 성공 후 홈으로 이동
          } else {
            throw new Error("토큰 발급 실패");
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage("로그인 실패. 다시 시도해 주세요.");
          setLoading(false);
        });
    }
  }, [code, navigate]);

  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <OnboardingLogoIcon />
      <div className="mt-[35px]">로그인 중...</div>

      {/* 로딩 중 상태 */}
      {loading && !errorMessage ? (
        <div>로딩 중...</div> // 로딩 상태 표시
      ) : (
        <div>{errorMessage ? errorMessage : "로그인 성공!"}</div>
      )}
    </div>
  );
};

export default LoginLoadingPage;
