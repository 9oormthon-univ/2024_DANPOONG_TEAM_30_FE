import Theme from '@/components/SelfCheckSurvey/Theme.tsx';
import Gauge from '@/components/SelfCheckResult/Gauge.tsx';
import Container from '@/components/common/Layout/Container.tsx';
import ProgramItem from '@/components/common/ProgramItem/ProgramItem.tsx';
import { useEffect, useState } from 'react';
import { selfCheckResultApi } from '@/api/selfCheckApi.ts';
import { SelfCheckResult } from '@/types/selfCheck.ts';

export const character = {
  ONE: '쿨쿨이',
  TWO: '뚝딱뚝딱',
  THREE: '두근두근',
  FOUR: '척척박사',
  FIVE: '으쓱으쓱',
};

export const explain = {
  ONE: '아직 자립 준비가 부족해',
  TWO: '조금씩 움직이며 자립을 준비하는 중',
  THREE: '자립에 대한 기대감과 긴장감이 공존하는 상태',
  FOUR: '결심이 굳고 자립이 능력이 생겼다',
  FIVE: '이젠 혼자서도 잘하는 위풍당당',
};

const SelfCheckResultPage = () => {
  const [responseData, setResponseData] = useState<SelfCheckResult | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const response = await selfCheckResultApi();
      setResponseData(response);
    })();
  }, []);

  if (!responseData) return null;

  return (
    <Container>
      <div className={'mt-[20px]'}>
        <Theme
          title={character[responseData.characterType]}
          explain={explain[responseData.characterType]}
        />
      </div>
      <img
        src={`/${responseData.characterType}.svg`}
        alt={'ch'}
        className='w-[190px] mx-auto'
      />
      <div className='mx-auto w-[80%] flex flex-col gap-[15px]'>
        {responseData.results.length > 0 &&
          responseData.results.map((item) => (
            <Gauge
              key={item.categoryTitle}
              title={item.categoryTitle}
              count={item.score}
            />
          ))}
      </div>
      <div>
        <p className={'font-weightSemiBold'}>쿨쿨낙엽님을 위한 추천 프로그램</p>
        <div className={'flex gap-[8px] overflow-x-auto mt-[16px]'}>
          {responseData.programs.map((item) => (
            <div key={item.id} className={'border-2 border-main rounded-xl'}>
              <ProgramItem
                categoryTitle={item.categoryTitle}
                endDate={item.endDate}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={'w-4/5 h-[50px] mx-auto bg-main rounded-[10px] text-white '}
      >
        완료
      </button>
    </Container>
  );
};

export default SelfCheckResultPage;
