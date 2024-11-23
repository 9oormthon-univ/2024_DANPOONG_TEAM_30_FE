import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageIcon from "@/assets/icons/Image.svg?react";
import VectorIcon from "@/assets/icons/Vector.svg?react";
import ProgramItem from "@/components/common/ProgramItem/ProgramItem";
import CharacterIcon from "@/assets/icons/Character.svg?react";
import CharacterIcon2 from "@/assets/icons/Character2.svg?react";

const HomePage: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 뱃지 확인하기 버튼 클릭 시 이동하는 함수
  const handleBadgeClick = () => {
    setIsBadgeChecked((prev) => !prev); // 상태 토글
    navigate("/self-check"); // '/self-check-result'로 이동
  };

  const a = [0, 0, 0];
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookmarkedPrograms, setBookmarkedPrograms] = useState<Set<string>>(
    new Set()
  );
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(
    null
  );
  const [isBadgeChecked, setIsBadgeChecked] = useState(false); // 버튼 클릭 상태 관리

  // 예시 값 (이 부분은 실제 API에서 받아온 데이터로 변경)
  const categoryId = 1;
  const size = 10;
  const lastProgramId = 0;

  // 프로그램 목록을 가져오는 함수
  const fetchPrograms = async () => {
    try {
      const response = await fetch(
        "https://ready-action.store/api/v1/programs?categoryId=${categoryId}&size=${size}&lastProgramId=${lastProgramId}",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjEiLCJBdXRob3JpemF0aW9uIjoiUk9MRV9NRU1CRVIiLCJleHAiOjE3MzIzNTk4MjksImlhdCI6MTczMjM1ODAyOX0.wEHzIcHS7tIsj2zBP9YSDbRNDWQGGit_vV_4kbXTmi3XosXEeH1Y6yTzx4iiuuNSHCWvV_SHixYFUI-XspeZnQ",
          },
        }
      );
      if (!response.ok) {
        throw new Error("API 요청 실패");
      }
      const data = await response.json();
      setPrograms(data.contents);
    } catch (error) {
      console.error("Error fetching programs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  // 북마크 상태 토글
  const toggleBookmark = (id: string) => {
    setBookmarkedPrograms((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  // 프로그램 선택 상태 관리
  const handleProgramSelect = (id: string) => {
    setSelectedProgramId((prevId) => (prevId === id ? null : id));
  };

  // 슬라이더 설정
  const settings = {
    infinite: true, // 무한 슬라이드
    speed: 500, // 전환 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 넘길 슬라이드 수
    autoplay: true, // 자동 재생
    autoplaySpeed: 2000, // 2초마다 전환
  };

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
          <div className="flex flex-col gap-[16px] mt-[16px]">
            {loading ? (
              <div>Loading...</div>
            ) : (
              programs.map((program) => (
                <ProgramItem
                  key={program.id}
                  program={{
                    id: program.id,
                    category: program.categoryTitle,
                    title: program.title,
                    startDate: program.startDate,
                    endDate: program.endDate,
                    status: program.status,
                    isBookmarked: bookmarkedPrograms.has(program.id),
                    isSelected: selectedProgramId === program.id,
                  }}
                  onBookmarkToggle={toggleBookmark}
                  onProgramSelect={handleProgramSelect}
                />
              ))
            )}
          </div>
          {/* <Slider {...settings} className="flex flex-row"> */}
          <img
            src="https://ifh.cc/g/dYrWaA.png"
            alt="Example 1"
            className="w-full h-[100px] object-cover"
          />

          {/* </Slider> */}
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
            <button className="w-full mx-auto h-[50px] bg-main mt-[20px] rounded-xl">
              더 알아보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
