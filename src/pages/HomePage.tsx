import ImageIcon from "@/assets/icons/Image.svg?react";
import VectorIcon from "@/assets/icons/Vector.svg?react";
import BannerIcon from "@/assets/icons/Banner.svg?react";
import ProgramItem from "@/components/common/ProgramItem/ProgramItem";

const HomePage: React.FC = () => {
  const a = [0, 0, 0];
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="h-full overflow-y-auto no-scrollbar">
        <div className="">
          {/* <Header /> */}
          <div className="h-[183px] bg-zinc-300 rounded-xl relative">
            <BannerIcon className="object-cover rounded-xl w-full" />
            <button className="absolute bottom-5 right-4 bg-orange-400 text-black px-4 py-2 rounded-lg shadow-lg hover:bg-orange-500">
              뱃지 확인하기
            </button>
          </div>
          <div className="text-font2xLarge mt-[34px] ml-[4px] text-xl font-semibold">
            아임레디님을 위한 추천 프로그램
          </div>
          {a.map((item, i) => (
            <ProgramItem key={i} />
          ))}
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
            <button className="w-full mx-auto h-[50px] bg-orange-400 mt-[20px] rounded-xl">
              더 알아보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
