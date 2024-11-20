import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@/assets/icons/common/arrow-left-icon.svg?react';

const SimpleHeader = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  return (
    <header className='h-[22px] px-[20px] flex justify-between my-[20px]'>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowLeftIcon />
      </button>
      <h2 className={'grow text-center mr-[12px]'}>{title}</h2>
    </header>
  );
};

export default SimpleHeader;
