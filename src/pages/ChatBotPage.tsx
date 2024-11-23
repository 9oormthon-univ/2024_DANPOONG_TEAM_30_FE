import SimpleHeader from '@/components/common/Header/SimpleHeader.tsx';
import Container from '@/components/common/Layout/Container.tsx';

import Logo from '@/assets/icons/Logo.svg?react';
import { useState } from 'react';
import { chatbotDepthApi, chatbotResultApi } from '@/api/chatbotApi.ts';
import {
  ChatBotFirstResponse,
  ChatBotSecondResponse,
} from '@/types/chatBot.ts';

const firstCategory = [
  '건강 관련',
  '금융 관련',
  '취업 관련',
  '주거 관련',
  '교육 프로그램',
];

const ChatBotPage = () => {
  const [firstChoice, setFirstChoice] = useState<number>(0);
  const [first, setFirst] = useState<ChatBotFirstResponse | null>(null);
  const [second, setSecond] = useState<ChatBotSecondResponse | null>(null);

  const firstClickHandler = async (depth: number) => {
    const response = await chatbotDepthApi(String(depth));
    setFirst(response);
    setFirstChoice(depth);
  };

  const secondClickHandler = async (depth: number) => {
    const response = await chatbotResultApi(String(firstChoice), String(depth));
    setSecond(response[0]);
  };

  console.log(second);

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
            categoryList={firstCategory}
            clickHandler={firstClickHandler}
          />
          {first && (
            <>
              <Choice content={`${firstCategory[firstChoice]}문의하기`} />
              <ReadyBotChat
                content={''}
                categoryList={first}
                clickHandler={secondClickHandler}
              />
            </>
          )}
          {second && (
            <div
              className={'ml-[38px] px-[20px] py-[10px] rounded-[15px] bg-sub1'}
            >
              <strong className={'font-weightSemiBold'}>
                {second.question}
              </strong>
              <br />
              {second.answer}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
export default ChatBotPage;

const ReadyBotChat = ({
  content,
  categoryList,
  clickHandler,
}: {
  content: string;
  categoryList: string[];
  clickHandler: (depth: number) => void;
}) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={'w-[90%] text-fontSmall '}>
      <div className={'flex items-center'}>
        <div className={'w-fit p-[8px] bg-[#FFE8D7] rounded-[6px] mr-[10px]'}>
          <Logo className={'w-[22px] h-[22px]'} />
        </div>
        레디봇
      </div>
      {content && (
        <div className={'ml-[38px] px-[20px] py-[10px] rounded-[15px] bg-sub1'}>
          {content}
        </div>
      )}
      <div className={'flex flex-wrap gap-2 ml-[38px] mt-[10px]'}>
        {categoryList.map((item, index) => (
          <button
            onClick={() => {
              setActive(index);
              clickHandler(index);
            }}
            key={index}
            disabled={active !== null}
            className={`px-[14px] py-[8px] border-2  rounded-full ${active === index ? 'bg-sub1 border-main' : 'border-gray2'}`}
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
