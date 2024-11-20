import Theme from '@/components/SelfCheckSurvey/Theme.tsx';
import Gauge from '@/components/SelfCheckResult/Gauge.tsx';

const SelfCheckPage = () => {
  return (
    <>
      <div
        className={
          'w-fit mx-auto text-fontSmall bg-sub1 px-[8px] py-[5px] rounded-full'
        }
      >
        <button className={'w-1/2 bg-sub3 px-[24px] py-[5px] rounded-full'}>
          뱃지
        </button>
        <button
          className={'w-1/2 text-nowrap  px-[24px] py-[5px] rounded-full'}
        >
          그래프
        </button>
      </div>
      <div className={'my-[30px] p-[22px] bg-[#FFF6EF] rounded-[15px]'}>
        <Theme title={'쿨쿨이'} explain={'아직 자립 준비가 부족해'} />
        <img src={'/one.jpg'} alt={'ch'} className='w-[190px] mx-auto' />
        <div className='mx-auto w-[80%] flex flex-col gap-[15px]'>
          <Gauge title={'주거'} count={1} />
          <Gauge title={'주거'} count={2} />
          <Gauge title={'주거'} count={3} />
          <Gauge title={'주거'} count={4} />
          <Gauge title={'주거'} count={5} />
        </div>
      </div>
      <button
        className={
          'min-w-[290px] min-h-[50px] mx-auto mb-[20px] bg-main text-white rounded-[10px]'
        }
      >
        자가진단 시작하기
      </button>
    </>
  );
};

export default SelfCheckPage;
