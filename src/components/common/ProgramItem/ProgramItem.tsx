import { useNavigate } from "react-router-dom";
import ClockIcon from "@/assets/icons/Clock.svg?react";
import BookmarkIcon from "@/assets/icons/Bookmark.svg?react";

const ProgramItem = ({
  categoryTitle,
  endDate,
  title,
  scraped,
}: {
  categoryTitle: string;
  endDate: string;
  title: string;
  scraped: boolean;
}) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/program/${id}`);
  };
  return (
    <div
      className="bg-gray1 h-[115px] rounded-xl flex flex-row cursor-pointer items-center justify-between p-[26px]"
      onClick={() => handleClick("1")} // 예: 프로그램 ID 1
    >
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="text-fontSemiMicro text-orange-400">
            {categoryTitle}
          </div>
          <div className="text-fontSemiMicro text-rose-400 font-semibold rounded-lg ml-[8px] w-[34px] h-[16px] bg-rose-200 text-center">
            D-1
          </div>
        </div>
        <div className="text-md w-[220px]">{title}</div>
        <div className="text-xs text-zinc-500 mt-[4px] flex flex-row">
          <ClockIcon className="mr-[4px]" />
          {endDate}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <BookmarkIcon className="mb-[36px] cursor-pointer" />
        <button className="w-[52px] h-[27px] bg-orange-200 text-xs text-zinc-600 font-semibold rounded-2xl border border-orange-500">
          모집중
        </button>
      </div>
    </div>
  );
};

export default ProgramItem;
