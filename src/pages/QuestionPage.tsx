import SimpleHeader from '@/components/common/Header/SimpleHeader';
import Container from '@/components/common/Layout/Container';
import OIcon from '@/assets/icons/O.svg?react';
import XIcon from '@/assets/icons/X.svg?react';

const QuestionPage = () => {
  return (
    <>
      <SimpleHeader title={''} />
      <Container>
        <div className='mt-[32px] font-bold text-2xl'>
          어쩌고저쩌고 질문입닏아아ㅏ
        </div>
        <div className='font-semibold text-lg'>
          관심 기반으로 정책을 소개해드려요
        </div>
        <div className='flex flex-row justify-center items-center my-auto gap-8'>
          <div className='w-[126px] h-[126px] flex flex-col justify-center items-center bg-emerald-50 rounded-lg text-emerald-400 text-md border-2 border-white hover:border-emerald-400'>
            <OIcon className='mb-[4px]' />
            그렇다
          </div>
          <div className='w-[126px] h-[126px] flex flex-col justify-center items-center bg-red2 rounded-lg text-red text-md border-2 border-white hover:border-rose-400'>
            <XIcon className='mb-[4px]' />
            아니다
          </div>
        </div>
        <button className='w-full h-[55px] rounded-xl p-[16px] mb-[40px] bg-zinc-300 text-zinc-500 hover:bg-main hover:text-black'>
          다음
        </button>
      </Container>
    </>
  );
};

export default QuestionPage;
