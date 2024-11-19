import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Vector2 from "@/assets/icons/Vector2.svg?react";
import ClockIcon from "@/assets/icons/Clock.svg?react";
import BookmarkIcon from "@/assets/icons/Bookmark.svg?react";
import BookmarkIcon2 from "@/assets/icons/Bookmark2.svg?react";

const ProgramDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // useNavigate 훅 선언
  const [isScraped, setIsScraped] = useState(false);

  return (
    <div className="ml-[26px]">
      {/* <h1>Program Detail Page</h1>
      <p>프로그램 ID: {id}</p> */}
      <div className="flex flex-row mt-[23px] mb-[26px]">
        <Vector2 className="cursor-pointer" onClick={() => navigate("/")} />
        <div className="ml-[133px]">프로그램</div>
      </div>
      <div className="w-[345px] h-[300px] bg-zinc-100 rounded-lg p-6">
        <div className="mt-[18px] w-[220px]">
          보호연장아동 1:1 "기질, 성격검사 및 해석 상담"
        </div>
        <div className="flex flex-row mt-[16px]">
          <div className="w-[52px] mr-[16px] h-[26px] border bg-emerald-200 border-emerald-500 text-xs p-1.5 text-center rounded-2xl">
            건강
          </div>
          <div className="w-[52px] mr-[16px] h-[26px] border bg-rose-200 border-rose-500 text-rose-500 text-xs p-1.5 text-center rounded-2xl">
            D-1
          </div>
        </div>
        <div className="flex flex-row mt-[41px]">
          <div className="text-zinc-600 text-sm">신청기간</div>
          <div className="flex flex-row text-sm text-zinc-600 ml-auto">
            <ClockIcon className="mr-[4px] w-[16px] h-[16px] mt-[1px]" />
            2024.10.01-11.17
          </div>
        </div>
        <div className="flex flex-row mt-[37px]">
          <button
            className={`w-[126px] h-[42px] font-md flex items-center justify-center ml-[10px] border ${
              isScraped
                ? "border-orange-400 bg-white border-2"
                : "border-zinc-400 bg-white"
            } hover:border-orange-400 hover:border-2`}
            onClick={() => setIsScraped(!isScraped)}
          >
            스크랩
            {isScraped ? (
              <BookmarkIcon2 className="ml-[8px]" />
            ) : (
              <BookmarkIcon className="ml-[8px]" />
            )}
          </button>
          <button className="w-[126px] h-[42px] hover:border-orange-400 hover:border-2 font-md bg-white border border-zinc-400 ml-auto flex items-center justify-center mr-[10px]">
            바로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailPage;
