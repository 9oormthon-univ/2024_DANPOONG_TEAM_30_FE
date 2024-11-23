import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageIcon from "@/assets/icons/Image.svg?react";
import VectorIcon from "@/assets/icons/Vector.svg?react";
import ProgramItem from "@/components/common/ProgramItem/ProgramItem";
import CharacterIcon from "@/assets/icons/Character.svg?react";
import CharacterIcon2 from "@/assets/icons/Character2.svg?react";

const HomePage: React.FC = () => {
  const a = [0, 0, 0];
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 뱃지 확인하기 버튼 클릭 시 이동하는 함수
  const handleBadgeClick = () => {
    setIsBadgeChecked((prev) => !prev); // 상태 토글
    navigate("/self-check"); // '/self-check-result'로 이동
  };

  const [isBadgeChecked, setIsBadgeChecked] = useState(false); // 버튼 클릭 상태 관리

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="h-full overflow-y-auto no-scrollbar">
        <div>
          <div
            className="w-full h-[183px] bg-cover bg-center rounded-xl relative"
            style={{
              backgroundImage: "url('https://ifh.cc/g/zkGrK4.png')",
            }}
          >
            {isBadgeChecked ? (
              <CharacterIcon2 className="absolute bottom-4 left-5" />
            ) : (
              <CharacterIcon className="absolute bottom-4 left-5" />
            )}
            <button
              className="absolute bottom-5 right-6 bg-main text-black px-4 py-2 rounded-lg shadow-lg "
              onClick={handleBadgeClick} // 버튼 클릭 핸들러 연결
            >
              뱃지 확인하기
            </button>
          </div>
          <div className="text-font2xLarge mt-[34px] ml-[4px] text-xl font-semibold">
            아임레디님을 위한 추천 프로그램
          </div>
          <div className={"flex flex-col gap-[16px] mt-[16px]"}>
            {a.map((_, i) => (
              <ProgramItem key={i} />
            ))}
          </div>
          <img
            src="https://ifh.cc/g/dYrWaA.png"
            alt="Example"
            className="custom-img mt-[35px]"
          />
          <div className="text-xl mt-[34px] mb-[34px] ml-[4px] font-semibold">
            꼭 필요한 자립 지식
          </div>
          <div className="bg-zinc-100 h-[305px] rounded-xl mb-[10px] py-[6px] px-[20px] flex flex-col">
            <div className="mt-[20px] flex flex-row justify-between items-center">
              <div className="flex">
                <ImageIcon />
                <div className="flex flex-col ml-[20px] font-medium">
                  <div className="mt-[6px] text-sm">
                    10월부터 달라지는 정부 지원 제도
                  </div>
                  <div className="text-sm">알아보기</div>
                </div>
              </div>
              <VectorIcon className="ml-[60px]" />
            </div>
            <div className="mt-[20px] flex flex-row justify-between items-center">
              <div className="flex">
                <ImageIcon />
                <div className="flex flex-col ml-[20px] font-medium">
                  <div className="mt-[6px] text-sm">
                    10월부터 달라지는 정부 지원 제도
                  </div>
                  <div className="text-sm">알아보기</div>
                </div>
              </div>
              <VectorIcon className="ml-[60px]" />
            </div>
            <div className="mt-[20px] flex flex-row justify-between items-center">
              <div className="flex">
                <ImageIcon />
                <div className="flex flex-col ml-[20px] font-medium">
                  <div className="mt-[6px] text-sm">
                    10월부터 달라지는 정부 지원 제도
                  </div>
                  <div className="text-sm">알아보기</div>
                </div>
              </div>
              <VectorIcon className="ml-[60px]" />
            </div>
            <button
              className="w-full mx-auto h-[50px] bg-orange-400 mt-[20px] rounded-xl"
              onClick={() => {
                navigate("/know"); // 버튼 클릭 시 /know 경로로 이동
              }}
            >
              더 알아보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
