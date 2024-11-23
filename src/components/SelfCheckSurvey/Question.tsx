import XButton from '@/assets/icons/selfCheck/X-button-icon.svg?react';
import OButton from '@/assets/icons/selfCheck/O-button-icon.svg?react';

const Question = ({
  content,
  answer,
  onAnswer,
}: {
  content: string;
  answer: boolean | null;
  onAnswer: (value: boolean) => void;
}) => {
  //const [answer, setAnswer] = useState<Boolean | null>(null);

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
      className={`flex gap-[20px] items-center justify-between px-[22px] py-[16px] mb-[15px] rounded-[10px] text-fontSemiMicro border ${getColorClass()}`}
    >
      {content}
      <div className={'flex gap-[20px]'}>
        <OButton
          onClick={() => onAnswer(true)}
          className={`${getOButtonClass()}`}
        />
        <XButton
          onClick={() => onAnswer(false)}
          className={`${getXButtonClass()}`}
        />
      </div>
    </div>
  );
};

export default Question;
