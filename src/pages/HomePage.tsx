import { useNavigate } from "react-router-dom";
import Header from "@/components/common/Header";
import ClockIcon from "@/assets/icons/Clock.svg?react";
import BookmarkIcon from "@/assets/icons/Bookmark.svg?react";
import ImageIcon from "@/assets/icons/Image.svg?react";
import VectorIcon from "@/assets/icons/Vector.svg?react";
import BannerIcon from "@/assets/icons/Banner.svg?react";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // 특정 프로그램 상세 페이지로 이동하는 함수
  const handleClick = (id: string) => {
    navigate(`/program/${id}`);
  };
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="h-full overflow-y-auto no-scrollbar">
        <div className="ml-[34px]">
          <Header />
          <div className="w-[345px] h-[183px] bg-zinc-300 mt-[23px] rounded-xl relative">
            <BannerIcon className="w-full h-full object-cover rounded-xl" />
            <button className="absolute bottom-5 right-4 bg-orange-400 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-orange-500">
              뱃지 확인하기
            </button>
          </div>
          <div className="text-font2xLarge mt-[34px] ml-[4px] text-xl font-semibold">
            아임레디님을 위한 추천 프로그램
          </div>
          {/* 클릭 시 상세 페이지로 이동 */}
          <div
            className="bg-zinc-100 w-[345px] h-[115px] rounded-xl mt-[16px] flex flex-row cursor-pointer"
            onClick={() => handleClick("1")} // 예: 프로그램 ID 1
          >
            <div className="mt-[18px] ml-[26px] flex flex-row">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="text-fontSemiMicro text-orange-400">건강</div>
                  <div className="text-fontSemiMicro text-rose-400 font-semibold rounded-lg ml-[8px] w-[34px] h-[16px] bg-rose-200 text-center">
                    D-1
                  </div>
                </div>
                <div className="text-md w-[220px]">
                  보호연장아동 1:1 "기질, 성격검사 및 해석 상담"
                </div>
                <div className="text-xs text-zinc-500 mt-[4px] flex flex-row">
                  <ClockIcon className="mr-[4px]" />
                  2024.10.01-11.17
                </div>
              </div>
              <div className="flex flex-col items-end ml-[28px]">
                <BookmarkIcon className="mb-[36px] cursor-pointer" />
                <button className="w-[52px] h-[27px] bg-orange-200 text-xs text-zinc-600 font-semibold rounded-2xl border border-orange-500">
                  모집중
                </button>
              </div>
            </div>
          </div>
          {/* 컴포넌트 */}
          <div className="bg-zinc-100 w-[345px] h-[115px] rounded-xl mt-[16px] flex flex-row">
            <div className="mt-[18px] ml-[26px] flex flex-row">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="text-fontSemiMicro text-orange-400">건강</div>
                  <div className="text-fontSemiMicro text-rose-400 font-semibold rounded-lg ml-[8px] w-[34px] h-[16px] bg-rose-200 text-center">
                    D-1
                  </div>
                </div>
                <div className="text-md w-[220px]">
                  보호연장아동 1:1 "기질, 성격검사 및 해석 상담"
                </div>
                <div className="text-xs text-zinc-500 mt-[4px] flex flex-row">
                  <ClockIcon className="mr-[4px]" />
                  2024.10.01-11.17
                </div>
              </div>
              <div className="flex flex-col items-end ml-[28px]">
                <BookmarkIcon className="mb-[36px] cursor-pointer" />
                <button className="w-[52px] h-[27px] bg-orange-200 text-xs text-zinc-600 font-semibold rounded-2xl border border-orange-500">
                  모집중
                </button>
              </div>
            </div>
          </div>
          {/* 컴포넌트 */}
          <div className="bg-zinc-100 w-[345px] h-[115px] rounded-xl mt-[16px] flex flex-row">
            <div className="mt-[18px] ml-[26px] flex flex-row">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="text-fontSemiMicro text-orange-400">건강</div>
                  <div className="text-fontSemiMicro text-rose-400 font-semibold rounded-lg ml-[8px] w-[34px] h-[16px] bg-rose-200 text-center">
                    D-1
                  </div>
                </div>
                <div className="text-md w-[220px]">
                  보호연장아동 1:1 "기질, 성격검사 및 해석 상담"
                </div>
                <div className="text-xs text-zinc-500 mt-[4px] flex flex-row">
                  <ClockIcon className="mr-[4px]" />
                  2024.10.01-11.17
                </div>
              </div>
              <div className="flex flex-col items-end ml-[28px]">
                <BookmarkIcon className="mb-[36px] cursor-pointer" />
                <button className="w-[52px] h-[27px] bg-orange-200 text-xs text-zinc-600 font-semibold rounded-2xl border border-orange-500">
                  모집중
                </button>
              </div>
            </div>
          </div>
          <img
            src="https://ifh.cc/g/dYrWaA.png"
            alt="Example"
            className="custom-img mt-[35px] w-[345px]"
          />
          <div className="text-xl mt-[34px] mb-[34px] ml-[4px] font-semibold">
            꼭 필요한 자립 지식
          </div>
          <div className="bg-zinc-100 w-[345px] h-[305px] rounded-xl mb-[10px]">
            <div className="flex flex-row ml-[20px]">
              <div className="mt-[20px] flex flex-row">
                <ImageIcon />
                <div className="flex flex-col ml-[20px] font-medium">
                  <div className="mt-[6px] text-sm">
                    10월부터 달라지는 정부 지원 제도
                  </div>
                  <div className="text-sm">알아보기</div>
                </div>
                <VectorIcon className="ml-[28px] mt-[16px]" />
              </div>
            </div>
            <div className="flex flex-row ml-[20px]">
              <div className="mt-[20px] flex flex-row">
                <ImageIcon />
                <div className="flex flex-col ml-[20px] font-medium">
                  <div className="mt-[6px] text-sm">
                    10월부터 달라지는 정부 지원 제도
                  </div>
                  <div className="text-sm">알아보기</div>
                </div>
                <VectorIcon className="ml-[28px] mt-[16px]" />
              </div>
            </div>
            <div className="flex flex-row ml-[20px]">
              <div className="mt-[20px] flex flex-row">
                <ImageIcon />
                <div className="flex flex-col ml-[20px] font-medium">
                  <div className="mt-[6px] text-sm">
                    10월부터 달라지는 정부 지원 제도
                  </div>
                  <div className="text-sm">알아보기</div>
                </div>
                <VectorIcon className="ml-[28px] mt-[16px]" />
              </div>
            </div>
            <button className="w-[305px] h-[50px] bg-orange-400 ml-[20px] mt-[20px] rounded-xl">
              더 알아보기
            </button>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
