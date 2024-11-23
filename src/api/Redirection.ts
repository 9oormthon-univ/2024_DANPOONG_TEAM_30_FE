import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 'code' 파라미터 추출
    const code = new URL(document.location.toString()).searchParams.get("code");

    // fetch를 사용하여 백엔드로 인가 코드 전달하고 토큰 받기
    fetch("/api/v1/auth/reissue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }), // 인가 코드를 JSON 형태로 전달
    })
      .then((response) => response.json()) // 응답을 JSON으로 처리
      .then((data) => {
        const { access_token, refresh_token } = data;
        // 받은 토큰을 로컬스토리지에 저장
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);

        // 로그인 성공 후 리디렉션
        navigate("/loginSuccess");
      })
      .catch((error) => {
        console.error("로그인 실패:", error);
        navigate("/loginFailure");
      });
  }, [navigate]);

  return;
};

export default Redirection;
