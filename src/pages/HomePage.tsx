import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@/assets/icons/Image.svg?react';
import VectorIcon from '@/assets/icons/Vector.svg?react';
import ProgramItem from '@/components/common/ProgramItem/ProgramItem';
import CharacterIcon from '@/assets/icons/Character.svg?react';
import CharacterIcon2 from '@/assets/icons/Character2.svg?react';
import { accessToken } from '@/api/chatbotApi.ts';

interface Program {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  status: string;
  applicationUrl: string;
  scraped: boolean;
  categoryTitle: string;
}

interface Knowledge {
  id: number;
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [knowledge, setKnowledge] = useState<Knowledge[]>([]);
  const [selfDiagnosis, setSelfDiagnosis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isBadgeChecked, setIsBadgeChecked] = useState(false);

  const navigate = useNavigate();

  // API 호출 함수
  const fetchMainData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/v1/main', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('데이터를 가져오는 데 실패했습니다.');
      }

      const data = await response.json();
      setPrograms(data.programs || []);
      setKnowledge(data.knowledge || []);
      setSelfDiagnosis(data.selfDiagnosis || null);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMainData();
  }, []);

  console.log(programs);

  // 뱃지 확인 버튼 클릭 시
  const handleBadgeClick = () => {
    setIsBadgeChecked((prev) => !prev);
    navigate('/self-check');
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='h-full overflow-y-auto no-scrollbar'>
        <div>
          <div
            className='w-full h-[183px] bg-cover bg-center rounded-xl relative'
            style={{
              backgroundImage: "url('https://ifh.cc/g/zkGrK4.png')",
            }}
          >
            {isBadgeChecked ? (
              <CharacterIcon2 className='absolute bottom-4 left-5' />
            ) : (
              <CharacterIcon className='absolute bottom-4 left-5' />
            )}
            <button
              className='absolute bottom-5 right-6 bg-main text-black px-4 py-2 rounded-lg shadow-lg'
              onClick={handleBadgeClick}
            >
              뱃지 확인하기
            </button>
          </div>
          <div className='text-font2xLarge mt-[34px] ml-[4px] text-xl font-semibold'>
            아임레디님을 위한 추천 프로그램
          </div>
          <div className='flex flex-col gap-[16px] mt-[16px]'>
            {programs.length > 0 ? (
              programs.map((program) => (
                <ProgramItem
                  key={program.id}
                  title={program.title}
                  endDate={program.endDate}
                  scraped={program.scraped}
                  categoryTitle={program.status}
                />
              ))
            ) : (
              <div>추천 프로그램이 없습니다.</div>
            )}
          </div>
          <img
            src='https://ifh.cc/g/dYrWaA.png'
            alt='Example'
            className='custom-img mt-[35px]'
          />
          <div className='text-xl mt-[34px] mb-[34px] ml-[4px] font-semibold'>
            꼭 필요한 자립 지식
          </div>
          <div className='bg-zinc-100 h-[305px] rounded-xl mb-[10px] py-[6px] px-[20px] flex flex-col'>
            {knowledge.length > 0 ? (
              knowledge.map((item) => (
                <div
                  key={item.id}
                  className='mt-[20px] flex flex-row justify-between items-center'
                >
                  <div className='flex'>
                    <ImageIcon />
                    <div className='flex flex-col ml-[20px] font-medium'>
                      <div className='mt-[6px] text-sm'>{item.title}</div>
                      <div className='text-sm'>{item.content}</div>
                    </div>
                  </div>
                  <VectorIcon className='ml-[60px]' />
                </div>
              ))
            ) : (
              <div>자립 지식이 없습니다.</div>
            )}
            <button
              className='w-full mx-auto h-[50px] bg-orange-400 mt-[20px] rounded-xl'
              onClick={() => {
                navigate('/know');
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
