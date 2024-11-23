import React, { useEffect, useState } from "react";
import SimpleHeader from "@/components/common/Header/SimpleHeader";
import Container from "@/components/common/Layout/Container";
import OIcon from "@/assets/icons/O.svg?react";
import XIcon from "@/assets/icons/X.svg?react";

type Question = {
  questionId: number;
  content: string;
  category: string;
};

const QuestionPage = () => {
  const [nickname, setNickname] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]); // 질문 배열 타입 설정
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    // localStorage에서 데이터 가져오기
    const storedNickname = localStorage.getItem("nickname");
    const storedBirthDate = localStorage.getItem("birthDate");

    if (storedNickname) setNickname(storedNickname);
    if (storedBirthDate) setBirthDate(storedBirthDate);

    // 질문 데이터 가져오기
    const fetchQuestions = async () => {
      const payload = {
        nickname: storedNickname || "",
        birthday: storedBirthDate || "",
        categories: "['건강', '주거']",
      };

      try {
        const response = await fetch("/api/v1/auth/signup", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDgiLCJBdXRob3JpemF0aW9uIjoiUk9MRV9NRU1CRVIiLCJleHAiOjE3MzIzOTY5MDYsImlhdCI6MTczMjM3ODkwNn0.i4QgorB7dg__ZZDabtsoY01T_ObpSdGk1hT0fOflRf-oqBKO5xPSO001Vb0Piwizn9Z354XZReMKa4UROnfMmw",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const data = await response.json();
          setQuestions(data.onboardingQuestionResponse || []); // 데이터 설정
        } else {
          console.error("질문 로드 실패:", await response.json());
        }
      } catch (error) {
        console.error("네트워크 오류:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (isYes: boolean) => {
    const questionId = questions[currentQuestionIndex]?.questionId;

    if (questionId !== undefined) {
      setAnswers((prev) => ({ ...prev, [questionId]: isYes }));
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleSubmit = async () => {
    const payload = {
      questionResult: JSON.stringify(answers),
    };

    try {
      const response = await fetch("/api/v1/diagnosis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDgiLCJBdXRob3JpemF0aW9uIjoiUk9MRV9NRU1CRVIiLCJleHAiOjE3MzIzOTY5MDYsImlhdCI6MTczMjM3ODkwNn0.i4QgorB7dg__ZZDabtsoY01T_ObpSdGk1hT0fOflRf-oqBKO5xPSO001Vb0Piwizn9Z354XZReMKa4UROnfMmw",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("질문 응답이 성공적으로 제출되었습니다!");
        // 필요한 추가 로직 수행
      } else {
        console.error("응답 제출 실패:", await response.json());
        alert("응답 제출에 실패했습니다.");
      }
    } catch (error) {
      console.error("네트워크 오류:", error);
      alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <SimpleHeader title={""} />
      <Container>
        <div className="mt-[10px] font-bold text-2xl">
          {currentQuestion?.content || "질문을 불러오는 중..."}
        </div>
        <div className="font-semibold text-lg">
          {currentQuestion?.category || ""}
        </div>
        <div className="flex flex-row justify-center items-center mt-[170px] gap-8">
          <button
            className="w-[126px] h-[126px] bg-emerald-50 rounded-lg text-emerald-400 text-md p-10 border-2 border-white hover:border-emerald-400"
            onClick={() => handleAnswer(true)}
          >
            <OIcon className="mb-[4px]" />
            그렇다
          </button>
          <button
            className="w-[126px] h-[126px] bg-red2 rounded-lg text-red text-md p-10 text-center border-2 border-white hover:border-rose-400"
            onClick={() => handleAnswer(false)}
          >
            <XIcon className="mb-[1px] w-[34px] ml-[5px]" />
            아니다
          </button>
        </div>
        {isCompleted ? (
          <button
            className="w-full h-[55px] rounded-xl p-[16px] mt-[185px] bg-main text-white hover:bg-main-dark"
            onClick={handleSubmit}
          >
            완료
          </button>
        ) : (
          <button
            className="w-full h-[55px] rounded-xl p-[16px] mt-[185px] bg-zinc-300 text-zinc-500"
            disabled
          >
            다음
          </button>
        )}
      </Container>
    </div>
  );
};

export default QuestionPage;
