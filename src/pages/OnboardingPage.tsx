import OnboardingLogoIcon from "@/assets/icons/OnboardingLogo.svg?react";
import MentIcon from "@/assets/icons/Ment.svg?react";
import KakaoLogoIcon from "@/assets/icons/KakaoLogo.svg?react";

const OnboardingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[184px]">
      <OnboardingLogoIcon />
      <MentIcon className="mt-[35px] mb-[184px]" />
      <button className="w-[335px] h-[58px] bg-yellow-300 rounded-xl p-[18px] justify-center flex flex-row">
        <KakaoLogoIcon className="mr-[8px]" />
        <div>카카오 로그인</div>
      </button>
    </div>
  );
};

export default OnboardingPage;
