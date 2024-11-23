import Theme from '@/components/SelfCheckSurvey/Theme.tsx';
import Gauge from '@/components/SelfCheckResult/Gauge.tsx';
import { useState } from 'react';
import CompleteBadge from '@/assets/icons/selfCheck/Complete-badge-icon.svg?react';
import UnCompleteBadge from '@/assets/icons/selfCheck/unComplete-badge-icon.svg?react';
import { useNavigate } from 'react-router-dom';

const SelfCheckPage = () => {
  const [showBadge, setShowBadge] = useState<boolean>(true);
  const navigate = useNavigate();

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
        <Theme title={'쿨쿨이'} explain={'아직 자립 준비가 부족해'} />
        <img src={'/ONE.svg'} alt={'ch'} className='w-[190px] mx-auto' />
        {showBadge ? (
          <div className='flex flex-col gap-[15px] h-[200px]'>
            <div className='grid grid-cols-3 gap-[15px] justify-items-center	'>
              <Badge isComplete={true} text={'주거'} />
              <Badge isComplete={true} text={'주거'} />
              <Badge isComplete={false} text={'주거'} />
            </div>
            <div className='flex justify-center gap-[15px]'>
              <Badge isComplete={true} text={'주거'} />
              <Badge isComplete={true} text={'주거'} />
            </div>
          </div>
        ) : (
          <div className='mx-auto w-[80%] h-[200px] flex flex-col justify-center gap-[15px]'>
            <Gauge title={'주거'} count={1} />
            <Gauge title={'주거'} count={2} />
            <Gauge title={'주거'} count={3} />
            <Gauge title={'주거'} count={4} />
            <Gauge title={'주거'} count={5} />
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
