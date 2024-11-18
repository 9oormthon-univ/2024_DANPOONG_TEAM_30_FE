import XButton from '@/assets/icons/X-button-icon.svg?react';
import OButton from '@/assets/icons/O-button-icon.svg?react';
import { useState } from 'react';

const Question = () => {
  const [answer, setAnswer] = useState<Boolean | null>(null);

  const getColorClass = () => {
    if (answer === null) return 'border-gray-300';
    return answer ? 'border-green bg-green2' : 'border-red bg-red2';
  };

  const getXButtonClass = () => {
    return answer === false ? 'stroke-red' : 'stroke-gray30';
  };

  const getOButtonClass = () => {
    return answer === true ? 'stroke-green' : 'stroke-gray30';
  };

  return (
    <div
      className={`flex gap-[20px] items-center justify-between px-[22px] py-[16px] mb-[15px] rounded-[10px] bg-white text-fontSemiMicro border ${getColorClass()}`}
    >
      나는 자립을 위한 구체적이고 현실적인 목표나 계획이 있다.      나는 자립을 위한 구체적이고 현실적인 목표나 계획이 있다.

      <div className={'flex gap-[20px]'}>
        <OButton
          onClick={() => setAnswer(true)}
          className={getOButtonClass()}
        />
        <XButton
          onClick={() => setAnswer(false)}
          className={getXButtonClass()}
        />
      </div>
    </div>
  );
};

export default Question;