import { useNavigate } from "react-router-dom";
import ImageIcon from "@/assets/icons/Image.svg?react";
import VectorIcon from "@/assets/icons/Vector.svg?react";

const KnowItem = () => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/know/${id}`);
  };
  return (
    <div
      className="bg-gray1 h-[100px] rounded-xl flex flex-row cursor-pointer items-center justify-between p-[26px]"
      onClick={() => handleClick("1")} // 예: 프로그램 ID 1
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
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
      </div>
    </div>
  );
};

export default KnowItem;
