import OnboardingLogoIcon from "@/assets/icons/OnboardingLogo.svg?react";
import MentIcon from "@/assets/icons/Ment.svg?react";
import KakaoLogoIcon from "@/assets/icons/KakaoLogo.svg?react";

// const REST_API_KEY = import.meta.env.VITE_KAKAO_KEY;
// const REDIRECT_URI = import.meta.env.VITE_API_LOCAL_URL;

const OnboardingPage = () => {
  //   const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${
  //     REDIRECT_URI + "/login-loading"
  //   }&response_type=code`;

  //   const loginHandler = () => {
  //     window.location.href = link;
  //   };

  async function request() {
    const response = await fetch(
      "https://ready-action.store/oauth2/authorization/kakao",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjEiLCJBdXRob3JpemF0aW9uIjoiUk9MRV9NRU1CRVIiLCJleHAiOjE3MzIzNTk4MjksImlhdCI6MTczMjM1ODAyOX0.wEHzIcHS7tIsj2zBP9YSDbRNDWQGGit_vV_4kbXTmi3XosXEeH1Y6yTzx4iiuuNSHCWvV_SHixYFUI-XspeZnQ`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="flex flex-col justify-center items-center mt-[184px]">
      <OnboardingLogoIcon />
      <MentIcon className="mt-[35px] mb-[184px]" />
      <button
        onClick={() => {
          request();
        }}
        className="w-[335px] h-[58px] bg-yellow-300 rounded-xl p-[18px] justify-center flex flex-row"
      >
        <KakaoLogoIcon className="mr-[8px]" />
        <div>카카오 로그인</div>
      </button>
    </div>
  );
};

export default OnboardingPage;
