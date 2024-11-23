import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { accessToken } from '@/api/chatbotApi.ts';

const InfoPage = () => {
  const [nickname, setNickname] = useState(''); // 닉네임 상태
  const [birthDate, setBirthDate] = useState(''); // 생년월일 상태
  const [nicknameError, setNicknameError] = useState(false); // 닉네임 에러 상태
  const [nicknameFocus, setNicknameFocus] = useState(false); // 닉네임 필드 focus 상태
  const [birthDateFocus, setBirthDateFocus] = useState(false); // 생년월일 필드 focus 상태

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const accessToken = queryParams.get('accessToken');
  const refreshToken = queryParams.get('refreshToken');

  console.log(refreshToken);

  // 닉네임 변경 처리
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 5) {
      setNicknameError(true);
    } else {
      setNicknameError(false);
    }
    setNickname(value);
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
      alert('숫자만 입력 가능합니다.');
      return;
    }

    // 자동으로 / 기호가 입력되도록 처리
    if (value.length === 4 && birthDate.length < value.length) {
      value = value + '/'; // 자동으로 / 추가
    } else if (value.length === 7 && birthDate.length < value.length) {
      value = value + '/'; // 자동으로 / 추가
    }

    setBirthDate(value);
  };

  // 완료 버튼 활성화 여부 확인
  const isButtonEnabled =
    nickname.length > 0 && birthDate.length === 10 && !nicknameError;

  const handleSubmit = () => {
    // 입력값을 localStorage에 저장
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("birthDate", birthDate);

    // 질문 페이지로 리다이렉트
    navigate("/question");
  const handleSubmit = async () => {
    const payload = {
      nickname: nickname,
      birthday: birthDate, // 생년월일
      categories: categories, // 카테고리
    };

    try {
      const response = await fetch('/api/v1/auth/signup', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        const { accessToken, refreshToken } = data.tokenResponse;

        // 새로운 토큰 저장
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);

        // 추가 질문을 화면에 표시할 수 있음
        const questions = data.onboardingQuestionResponse;
        console.log('Onboarding questions:', questions);
        // 예를 들어, 여기서 사용자의 질문을 표시하는 화면으로 이동
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert(errorData.message || '정보 입력에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <div className='ml-[24px] mr-[24px]'>
      <div className='font-bold text-2xl'>정보를 입력해주세요</div>

      {/* 닉네임 입력 */}
      <div className='font-medium text-md mt-[52px] mb-[9px]'>닉네임</div>
      <div className='relative'>
        <input
          type='text'
          value={nickname}
          onChange={handleNicknameChange}
          placeholder='(한글) 5글자 내로 입력해주세요.'
          onFocus={() => setNicknameFocus(true)}
          onBlur={() => setNicknameFocus(false)}
          className={`w-full h-[50px] ${
            nicknameFocus
              ? 'border border-orange-500 rounded-lg'
              : 'border-b border-black'
          } font-medium text-lg ${
            nicknameFocus || nickname.length === 0
              ? 'text-zinc-400 pl-[8px]' // 포커스 상태 또는 입력값 없음 → 여백 유지
              : 'text-black pl-[0px]' // 포커스 해제 및 입력값 있음 → 여백 제거
          } pr-[50px]`}
        />
        {/* 글자 수 카운터 */}
        <div
          className={`absolute top-1/2 right-[20px] transform -translate-y-1/2 text-md ${
            nicknameError
              ? 'text-rose-500'
              : nickname
                ? 'text-black'
                : 'text-zinc-400'
          }`}
        >
          {nickname.length}/5
        </div>
      </div>
      {nicknameError && (
        <div className='text-rose-500 text-sm mt-[8px]'>
          닉네임은 5글자 이하여야 합니다.
        </div>
      )}

      {/* 설명 */}
      <div className='font-medium text-sm text-zinc-600 mt-[55px] mb-[12px]'>
        연령별 참여 가능 정책을 위해 사용 돼요
      </div>

      {/* 생년월일 입력 */}
      <div className='font-medium text-md mb-[15px]'>생년월일</div>
      <div className='relative'>
        <input
          type='text'
          value={birthDate}
          onChange={handleBirthDateChange}
          placeholder='YYYY / MM / DD'
          onFocus={() => setBirthDateFocus(true)}
          onBlur={() => setBirthDateFocus(false)}
          className={`w-full h-[50px] ${
            birthDateFocus
              ? 'border border-orange-500 rounded-lg'
              : 'border-b border-black'
          } font-medium text-lg ${
            birthDateFocus || birthDate.length === 0
              ? 'text-zinc-400 pl-[8px]' // 포커스 상태 또는 입력값 없음 → 여백 유지
              : 'text-black pl-[0px]' // 포커스 해제 및 입력값 있음 → 여백 제거
          }`}
        />
      </div>

      {/* 완료 버튼 */}
      <button
        disabled={!isButtonEnabled}
        onClick={handleSubmit} // 클릭 시 제출 처리
        className={`w-full h-[55px] rounded-xl p-[16px] mt-[210px] ${
          isButtonEnabled ? 'bg-main text-white ' : 'bg-zinc-300 text-zinc-500'
        }`}
      >
        완료
      </button>
    </div>
  );
};

export default InfoPage;
