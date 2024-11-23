import { useNavigate } from "react-router-dom";
import ClockIcon from "@/assets/icons/Clock.svg?react";
import BookmarkIcon from "@/assets/icons/Bookmark.svg?react";
import BookmarkIcon2 from "@/assets/icons/Bookmark2.svg?react"; // 대체 아이콘

interface ProgramItemProps {
  program: {
    id: string;
    category: string;
    title: string;
    startDate: string;
    endDate: string;
    status: string;
    isBookmarked: boolean;
    isSelected: boolean;
  };
  onBookmarkToggle: (id: string) => void;
  onProgramSelect: (id: string) => void;
}

const ProgramItem: React.FC<ProgramItemProps> = ({
  program,
  onBookmarkToggle,
  onProgramSelect,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onProgramSelect(program.id); // 클릭 시 상태 토글
    navigate(`/program/${program.id}`);
  };

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모 클릭 이벤트 전파 방지
    onBookmarkToggle(program.id); // 북마크 상태 토글
  };

  return (
    <div
      className={`h-[115px] rounded-xl flex flex-row cursor-pointer items-center justify-between p-[26px] ${
        program.isSelected
          ? "bg-orange-100 border border-orange-400"
          : "bg-gray1"
      }`}
      onClick={handleClick}
    >
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="text-fontSemiMicro text-orange-400">
            {program.category}
          </div>
          <div className="text-fontSemiMicro text-rose-400 font-semibold rounded-lg ml-[8px] w-[34px] h-[16px] bg-rose-200 text-center">
            D-1
          </div>
        </div>
        <div className="text-md w-[220px]">{program.title}</div>
        <div className="text-xs text-zinc-500 mt-[4px] flex flex-row">
          <ClockIcon className="mr-[4px]" />
          {program.startDate} - {program.endDate}
        </div>
      </div>
      <div className="flex flex-col items-end">
        {/* 북마크 아이콘 (클릭 시 토글) */}
        <div onClick={toggleBookmark}>
          {program.isBookmarked ? (
            <BookmarkIcon2 className="mb-[37px] cursor-pointer" />
          ) : (
            <BookmarkIcon className="mb-[36px] cursor-pointer" />
          )}
        </div>
        <button
          className={`w-[52px] h-[27px] text-xs font-semibold rounded-2xl border ${
            program.isSelected
              ? "bg-orange-300 text-black border-orange-500"
              : "bg-orange-200 text-zinc-600 border-orange-500"
          }`}
        >
          {program.status}
        </button>
      </div>
    </div>
  );
};

export default ProgramItem;
