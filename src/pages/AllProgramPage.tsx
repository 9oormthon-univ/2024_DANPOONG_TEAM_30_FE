import { useState, useEffect } from 'react';
import ProgramItem from '@/components/common/ProgramItem/ProgramItem';
import { accessToken } from '@/api/chatbotApi.ts';

interface Program {
  status: string;
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  // status: string;
  applicationUrl: string;
  scraped: boolean;
  categoryTitle: string;
}

interface ProgramsResponse {
  contents: Program[];
  categoryTitle: string;
  hasNextPage: boolean;
}

const AllProgramPage: React.FC = () => {
  const categories = ['건강', '금융', '교육', '주거'];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // API 호출 함수
  const fetchPrograms = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "/api/v1/programs?categoryTitle=주거&page=1",

        {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDgiLCJBdXRob3JpemF0aW9uIjoiUk9MRV9NRU1CRVIiLCJleHAiOjE3MzI0MTUwMzQsImlhdCI6MTczMjM5NzAzNH0.OaxVDvegsurXDQRu3lgS_QbVRoqNL_e1iPPy2gXXT8J8DVymbmKxykUgODQMhD0x0aocyuQQ-AcJzXRtdU2fEA`,

          },
        }
      );

      if (!response.ok) {
        throw new Error('데이터를 가져오지 못했습니다.');
      }

      const data: ProgramsResponse = await response.json();
      setPrograms(data.contents);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  // 선택된 카테고리 필터링
  const filteredPrograms = selectedCategory
    ? programs.filter((program) => program.status === selectedCategory)
    : programs;

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <>
      <div className='flex flex-row mb-[28px]'>
        <div className='font-semibold text-xl'>레디님 분야별 맞춤 정책</div>
        <div className='w-[76px] h-[22px] bg-orange-200 rounded-sm text-xs text-center p-1 ml-auto'>
          스크랩 보기
        </div>
      </div>
      <div className='flex flex-row w-full gap-3 mb-[43px]'>
        {categories.map((category) => (
          <div
            key={category}
            className={`w-[70px] h-[40px] border rounded-3xl font-semibold text-md p-2 text-center cursor-pointer ${
              selectedCategory === category
                ? 'bg-orange-200 text-black border-orange-500'
                : 'text-zinc-400 border-zinc-300'
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
      <div className='mb-auto flex flex-col gap-[16px]'>
        {filteredPrograms.map((program) => (
          <ProgramItem
            key={program.id}
            title={program.title}
            startDate={program.startDate}
            endDate={program.endDate}
            scraped={false}
            categoryTitle={program.categoryTitle}
          />
        ))}
      </div>
    </>
  );
};

export default AllProgramPage;
