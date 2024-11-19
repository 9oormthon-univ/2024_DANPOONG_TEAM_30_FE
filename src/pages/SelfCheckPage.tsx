import Question from '@/components/SelfCheck/Question.tsx';
import Theme from '@/components/SelfCheck/Theme.tsx';
import Gauge from '@/components/SelfCheck/Gauge.tsx';
import SimpleHeader from '@/components/common/Header/SimpleHeader.tsx';
import Container from '@/components/common/Layout/Container.tsx';

const SelfCheckPage = () => {
  return (
    <>
      <SimpleHeader title={'자립준비도 자가진단'} />
      <Container>
        <Gauge progress={10} />
        <Theme
          title={'건강에 관한 문제 입니다.'}
          explain={'해당 질문에 맞는 항목에 체크해주세요.'}
        />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <div className={'my-[20px] flex gap-[16px]'}>
          <button className={`${button} bg-gray2 text-gray50`}>이전</button>
          <button className={`${button} bg-gray2 text-gray50`}>다음</button>
        </div>
      </Container>
    </>
  );
};

export default SelfCheckPage;

const button = 'w-[50%] h-[50px] rounded-[10px]';
