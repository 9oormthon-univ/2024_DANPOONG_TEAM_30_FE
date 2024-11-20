import SimpleHeader from '@/components/common/Header/SimpleHeader.tsx';
import Container from '@/components/common/Layout/Container.tsx';

import Logo from '@/assets/icons/Logo.svg?react';

const ChatBotPage = () => {
  return (
    <>
      <SimpleHeader title={'레디봇'} />
      <Container>
        <div className={'font-weightSemiBold text-fontMedium mb-[20px]'}>
          <p>아임레디님</p>
          <p>반가워요. 레디봇이에요!</p>
        </div>
        <div className={'h-full flex flex-col gap-[16px]'}>
          <ReadyBotChat
            content={
              '아임레디님 자립을 준비하며 어려웠거나 궁금했던 것들 있었나요?'
            }
            categoryList={[
              '건강 관련',
              '금융 관련',
              '취업 관련',
              '주거 관련',
              '교육 프로그램',
            ]}
          />
          <Choice content={'청년 자립 지원급 문의하기'} />
          <ReadyBotChat
            content={
              '아임레디님 자립을 준비하며 어려웠거나 궁금했던 것들 있었나요?'
            }
            categoryList={[
              '건강 관련',
              '금융 관련',
              '취업 관련',
              '주거 관련',
              '교육 프로그램',
            ]}
          />
        </div>
      </Container>
    </>
  );
};
export default ChatBotPage;

const ReadyBotChat = ({
  content,
  categoryList,
}: {
  content: string;
  categoryList: string[];
}) => {
  return (
    <div className={'w-[90%] text-fontSmall '}>
      <div className={'flex items-center'}>
        <div className={'w-fit p-[8px] bg-[#FFE8D7] rounded-[6px] mr-[10px]'}>
          <Logo className={'w-[22px] h-[22px]'} />
        </div>
        레디봇
      </div>
      <div className={'ml-[38px] px-[20px] py-[10px] rounded-[15px] bg-sub1'}>
        {content}
      </div>
      <div className={'flex flex-wrap gap-2 ml-[38px] mt-[10px]'}>
        {categoryList.map((item, index) => (
          <button
            key={index}
            className={'px-[14px] py-[8px] border-2 border-gray2 rounded-full'}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

const Choice = ({ content }: { content: string }) => {
  return (
    <div
      className={
        'w-fit px-[15px] py-[10px] rounded-[15px] ml-auto bg-main text-fontSmall font-weightMedium text-white'
      }
    >
      {content}
    </div>
  );
};
