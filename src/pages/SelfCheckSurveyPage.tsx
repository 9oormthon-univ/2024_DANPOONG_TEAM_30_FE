import Question from '@/components/SelfCheckSurvey/Question.tsx';
import Theme from '@/components/SelfCheckSurvey/Theme.tsx';
import Gauge from '@/components/SelfCheckSurvey/Gauge.tsx';
import SimpleHeader from '@/components/common/Header/SimpleHeader.tsx';
import Container from '@/components/common/Layout/Container.tsx';
import { useEffect, useState } from 'react';
import {
  GetSelfCheckQuestionsApi,
  PostSelfCheckQuestionsApi,
} from '@/api/selfCheckApi.ts';
import { QuestionType } from '@/types/selfCheck.ts';
import { useNavigate } from 'react-router-dom';

const array = [
  '건강',
  '건강',
  '취업',
  '취업',
  '주거',
  '주거',
  '금융',
  '금융',
  '교육',
  '교육',
];

const SelfCheckSurveyPage = () => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(1);
  const [registerData, setRegisterData] = useState<(boolean | null)[]>([]);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [answers, setAnswers] = useState<(boolean | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleAnswer = (index: number, value: boolean) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const isAllAnswered = answers.every((answer) => answer !== null);

  const GetSelfCheckQuestionsApiFunc = async (page: number) => {
    const response = await GetSelfCheckQuestionsApi(String(page));
    setQuestions(response);
  };

  useEffect(() => {
    GetSelfCheckQuestionsApiFunc(1);
  }, []);

  if (!(questions.length > 0)) return null;

  return (
    <>
      <SimpleHeader title={'자립준비도 자가진단'} />
      <Container>
        <Gauge progress={currentCategory * 10} />
        <Theme
          title={`${array[currentCategory - 1]}에 관한 문제 입니다.(${currentCategory % 2 ? 1 : 2}/2)`}
          explain={'해당 질문에 맞는 항목에 체크해주세요.'}
        />
        {questions.map((item, index) => (
          <Question
            content={item.question}
            key={index}
            answer={answers[index]}
            onAnswer={(value) => handleAnswer(index, value)}
          />
        ))}
        <div className={'my-[20px] flex gap-[16px]'}>
          <button className={`${button} bg-gray2 text-gray50`}>이전</button>
          <button
            disabled={!isAllAnswered}
            onClick={async () => {
              setRegisterData((prev) => [...prev, ...answers]);

              if (currentCategory !== 10) {
                setCurrentCategory((prev) => prev + 1);
                GetSelfCheckQuestionsApiFunc(currentCategory + 1);
                setAnswers([null, null, null, null, null]);
              } else {
                const data = Object.fromEntries(
                  registerData.map((value, index) => [index + 1, value])
                );
                const response = await PostSelfCheckQuestionsApi(
                  JSON.stringify({ questionResult: data })
                );
                if (response) {
                  navigate('/self-check-result');
                }
              }
            }}
            className={`${button} ${isAllAnswered ? 'bg-main text-white' : 'bg-gray2 text-gray50'}`}
          >
            {currentCategory !== 10 ? '다음' : '완료'}
          </button>
        </div>
      </Container>
    </>
  );
};

export default SelfCheckSurveyPage;

const button = 'w-[50%] h-[50px] rounded-[10px]';
