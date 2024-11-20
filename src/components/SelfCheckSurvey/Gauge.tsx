import MainIcon from '@/assets/icons/main.svg?react';

const Gauge = ({ progress }: { progress: number }) => {
  return (
    <div className='my-[25px] min-h-[12px] relative flex w-full '>
      <div className='bg-main' style={{ width: `${progress}%` }}></div>
      <MainIcon
        className='absolute bottom-[-16px]'
        style={{ left: `calc(${progress - 6}%)` }}
      />
      <div className='bg-gray30' style={{ width: `${100 - progress}%` }}></div>
    </div>
  );
};

export default Gauge;
