import Theme from '@/components/SelfCheckSurvey/Theme.tsx';
import Gauge from '@/components/SelfCheckResult/Gauge.tsx';
import Container from '@/components/common/Layout/Container.tsx';
import ProgramItem from '@/components/common/ProgramItem/ProgramItem.tsx';

const SelfCheckResultPage = () => {
  return (
    <Container>
      <div className={'mt-[20px]'}>
        <Theme title={'쿨쿨이'} explain={'아직 자립 준비가 부족해'} />
      </div>
      <img src={'/one.jpg'} alt={'ch'} className='w-[190px] mx-auto' />
      <div className='mx-auto w-[80%] flex flex-col gap-[15px]'>
        <Gauge title={'주거'} count={1} />
        <Gauge title={'주거'} count={2} />
        <Gauge title={'주거'} count={3} />
        <Gauge title={'주거'} count={4} />
        <Gauge title={'주거'} count={5} />
      </div>
      <div>
        <p className={'font-weightSemiBold'}>쿨쿨낙엽님을 위한 추천 프로그램</p>
        <div className={'flex gap-[8px] overflow-x-auto mt-[16px]'}>
          <div className={'border-2 border-main rounded-xl'}>
            <ProgramItem />
          </div>
          <div className={'border-2 border-main rounded-xl'}>
            <ProgramItem />
          </div>
          <div className={'border-2 border-main rounded-xl'}>
            <ProgramItem />
          </div>
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
