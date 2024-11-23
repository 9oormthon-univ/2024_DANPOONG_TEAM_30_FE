import { useState } from "react";
import KnowItem from "@/components/common/ProgramItem/KnowItem";

const AllProgramPage: React.FC = () => {
  const categories = ["건강", "금융", "교육", "주거"];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-row mb-[28px]">
        <div className="font-semibold text-xl">꼭 필요한 자립 지식</div>
        <div className="w-[76px] h-[22px] bg-orange-200 rounded-sm text-xs text-center p-1 ml-auto">
          스크랩 보기
        </div>
      </div>
      <div className="flex flex-row w-full gap-3 mb-[43px]">
        {categories.map((category) => (
          <div
            key={category}
            className={`w-[70px] h-[40px] border rounded-3xl font-semibold text-md p-2 text-center cursor-pointer ${
              selectedCategory === category
                ? "bg-orange-200 text-black border-orange-500"
                : "text-zinc-400 border-zinc-300"
            }`}
            onClick={() =>
              setSelectedCategory((prev) =>
                prev === category ? null : category
              )
            }
          >
            {category}
          </div>
        ))}
      </div>
      <div className="mb-auto flex flex-col gap-[16px]">
        {[0, 0, 0].map((item, i) => (
          <KnowItem key={i} />
        ))}
      </div>
    </>
  );
};

export default AllProgramPage;
