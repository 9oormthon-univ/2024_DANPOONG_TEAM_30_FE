import React, { useState } from "react";

const InfoPage = () => {
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const [birthDate, setBirthDate] = useState(""); // 생년월일 상태
  const [nicknameError, setNicknameError] = useState(""); // 닉네임 에러 상태
  const [nicknameFocus, setNicknameFocus] = useState(false); // 닉네임 필드 focus 상태
  const [birthDateFocus, setBirthDateFocus] = useState(false); // 생년월일 필드 focus 상태
  const [isButtonClicked, setIsButtonClicked] = useState(false); // 완료 버튼 클릭 상태

  // 닉네임 변경 처리
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 한글(완성형 및 초성/중성/종성 포함)만 허용
    const koreanRegex = /^[\u3131-\u3163\uac00-\ud7a3]*$/;

    if (value.length === 0) {
      setNicknameError(""); // 입력값이 없을 때는 에러가 아님
    } else if (!koreanRegex.test(value)) {
      setNicknameError("올바르지 않은 형식입니다."); // 한글 외의 문자가 포함된 경우
    } else if (value.length > 5) {
      setNicknameError("닉네임은 5글자 이하여야 합니다."); // 5글자 초과 시
    } else {
      setNicknameError(""); // 에러 없음
    }

    // 글자 수가 5자 이하면 상태 업데이트
    if (value.length <= 5) {
      setNickname(value);
    }
  };

  // 생년월일 입력값 처리
  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // 백스페이스 동작 처리
    if (birthDate.length > value.length) {
      setBirthDate(value); // 삭제 동작 그대로 반영
      return;
    }

    // 숫자와 / 기호만 허용
    const regex = /^[0-9/]*$/;
    if (!regex.test(value)) {
      alert("숫자만 입력 가능합니다.");
      return;
    }

    // 자동으로 / 기호가 입력되도록 처리
    if (value.length === 4 && birthDate.length < value.length) {
      value = value + "/"; // 자동으로 / 추가
    } else if (value.length === 7 && birthDate.length < value.length) {
      value = value + "/"; // 자동으로 / 추가
    }

    // 유효성 검사
    if (value.length === 10) {
      const [year, month, day] = value.split("/").map((v) => parseInt(v, 10));

      if (year > 2024) {
        alert("연도는 2024년까지만 입력 가능합니다.");
        return;
      }

      if (month < 1 || month > 12) {
        alert("월은 1월에서 12월까지만 입력 가능합니다.");
        return;
      }

      if (day < 1 || day > 31) {
        alert("일은 1일에서 31일까지만 입력 가능합니다.");
        return;
      }
    }

    setBirthDate(value);
  };

  // 완료 버튼 활성화 여부 확인
  const isButtonEnabled =
    nickname.length > 0 && birthDate.length === 10 && !nicknameError;

  // 완료 버튼 클릭 처리
  const handleButtonClick = () => {
    if (isButtonEnabled) {
      setIsButtonClicked(true);
    }
  };

  return (
    <div className="ml-[24px] mr-[24px]">
      <div className="font-bold text-2xl">정보를 입력해주세요</div>

      {/* 닉네임 입력 */}
      <div className="font-medium text-md mt-[52px] mb-[9px]">닉네임</div>
      <div className="relative">
        <input
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
          placeholder="(한글) 5글자 내로 입력해주세요."
          onFocus={() => setNicknameFocus(true)}
          onBlur={() => setNicknameFocus(false)}
          className={`w-full h-[50px] ${
            nicknameFocus
              ? "border border-orange-500 rounded-lg"
              : "border-b border-black"
          } font-medium text-lg ${
            nicknameFocus || nickname.length === 0
              ? "text-zinc-400 pl-[8px]" // 포커스 상태 또는 입력값 없음 → 여백 유지
              : "text-black pl-[0px]" // 포커스 해제 및 입력값 있음 → 여백 제거
          } pr-[50px]`}
        />
        {/* 글자 수 카운터 */}
        <div
          className={`absolute top-1/2 right-[20px] transform -translate-y-1/2 text-md ${
            nicknameError
              ? "text-rose-500"
              : nickname
              ? "text-black"
              : "text-zinc-400"
          }`}
        >
          {nickname.length}/5
        </div>
      </div>
      {nicknameError && (
        <div className="text-rose-500 text-sm mt-[8px]">{nicknameError}</div>
      )}

      {/* 설명 */}
      <div className="font-medium text-sm text-zinc-600 mt-[55px] mb-[12px]">
        연령별 참여 가능 정책을 위해 사용 돼요
      </div>

      {/* 생년월일 입력 */}
      <div className="font-medium text-md mb-[15px]">생년월일</div>
      <div className="relative">
        <input
          type="text"
          value={birthDate}
          onChange={handleBirthDateChange}
          placeholder="YYYY / MM / DD"
          onFocus={() => setBirthDateFocus(true)}
          onBlur={() => setBirthDateFocus(false)}
          className={`w-full h-[50px] ${
            birthDateFocus
              ? "border border-orange-500 rounded-lg"
              : "border-b border-black"
          } font-medium text-lg ${
            birthDateFocus || birthDate.length === 0
              ? "text-zinc-400 pl-[8px]" // 포커스 상태 또는 입력값 없음 → 여백 유지
              : "text-black pl-[0px]" // 포커스 해제 및 입력값 있음 → 여백 제거
          }`}
        />
      </div>

      {/* 완료 버튼 */}
      <button
        onClick={handleButtonClick}
        disabled={!isButtonEnabled}
        className={`w-full h-[55px] rounded-xl p-[16px] mt-[210px] ${
          isButtonClicked
            ? "bg-main text-white"
            : isButtonEnabled
            ? "bg-main text-white"
            : "bg-zinc-300 text-zinc-500"
        }`}
      >
        완료
      </button>
    </div>
  );
};

export default InfoPage;
