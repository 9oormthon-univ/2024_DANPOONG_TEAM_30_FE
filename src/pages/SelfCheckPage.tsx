import Theme from '@/components/SelfCheckSurvey/Theme.tsx';
import Gauge from '@/components/SelfCheckResult/Gauge.tsx';
import { useEffect, useState } from 'react';
import CompleteBadge from '@/assets/icons/selfCheck/Complete-badge-icon.svg?react';
import UnCompleteBadge from '@/assets/icons/selfCheck/unComplete-badge-icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { badge, SelfCheckMain } from '@/types/selfCheck.ts';
import { getSelfCheckMain } from '@/api/selfCheckApi.ts';
import { character, explain } from '@/pages/SelfCheckResultPage.tsx';

const bedgeName = {
  EMPLOYMENT: '주거',
  HEALTH: '건강',
  RESIDENCE: '취업',
  FINANCE: '금융',
  EDUCATION: '교육',
};

const badge1: badge[] = ['EMPLOYMENT', 'HEALTH', 'RESIDENCE'];
const badge2: badge[] = ['FINANCE', 'EDUCATION'];

const SelfCheckPage = () => {
  const [showBadge, setShowBadge] = useState<boolean>(true);
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState<SelfCheckMain | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getSelfCheckMain();
      setResponseData(response);
    })();
  }, []);

  if (!responseData) return null;

  return (
    <>
      <div
        className={
          'w-fit mx-auto text-fontSmall bg-sub1 px-[8px] py-[5px] rounded-full'
        }
      >
        <ThemeButton
          clickHandler={() => setShowBadge(!showBadge)}
          showBadge={showBadge}
          theme={'뱃지'}
        />
        <ThemeButton
          clickHandler={() => setShowBadge(!showBadge)}
          showBadge={!showBadge}
          theme={'그래프'}
        />
      </div>
      <div className={'my-[30px] p-[22px] bg-[#FFF6EF] rounded-[15px]'}>
        <Theme
          title={character[responseData.characterType]}
          explain={explain[responseData.characterType]}
        />
        <img
          src={`/${responseData.characterType}.svg`}
          alt={'ch'}
          className='w-[190px] mx-auto'
        />
        {showBadge ? (
          <div className='flex flex-col gap-[15px] h-[200px]'>
            <div className='grid grid-cols-3 gap-[15px] justify-items-center	'>
              {badge1.map((item) => (
                <Badge
                  isComplete={responseData.badges.includes(item)}
                  text={bedgeName[item]}
                />
              ))}
            </div>
            <div className='flex justify-center gap-[15px]'>
              {badge2.map((item) => (
                <Badge
                  isComplete={responseData.badges.includes(item)}
                  text={bedgeName[item]}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className='mx-auto w-[80%] h-[200px] flex flex-col justify-center gap-[15px]'>
            {responseData.results.map((item) => (
              <Gauge
                title={item.categoryTitle}
                count={item.score}
                key={item.categoryTitle}
              />
            ))}
          </div>
        )}
      </div>
      <button
        className={
          'min-w-[290px] min-h-[50px] mx-auto mb-[20px] bg-main text-white rounded-[10px]'
        }
        onClick={() => {
          navigate('survey');
        }}
      >
        자가진단 시작하기
      </button>
    </>
  );
};

export default SelfCheckPage;

const ThemeButton = ({
  showBadge,
  clickHandler,
  theme,
}: {
  showBadge: boolean;
  clickHandler: () => void;
  theme: string;
}) => {
  return (
    <button
      className={`w-1/2 px-[24px] py-[5px] text-nowrap rounded-full ${showBadge && 'bg-sub3'}`}
      onClick={clickHandler}
    >
      {theme}
    </button>
  );
};

const Badge = ({ isComplete, text }: { isComplete: boolean; text: string }) => {
  return (
    <div className={'flex flex-col items-center text-fontSmall'}>
      {isComplete ? <CompleteBadge /> : <UnCompleteBadge />}
      <span>{text}</span>
    </div>
  );
};
