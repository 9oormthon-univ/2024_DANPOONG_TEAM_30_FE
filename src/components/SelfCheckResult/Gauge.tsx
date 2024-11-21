const Gauge = ({ title, count }: { title: string; count: number }) => {
  return (
    <div className='flex gap-4'>
      <span className={'text-fontSmall font-weightSemiBold whitespace-nowrap'}>
        {title}
      </span>
      <div className={'flex bg-sub3 min-h-[20px] w-full'}>
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={'bg-main w-[20%] border-r-2 border-sub1'}
            />
          ))}
      </div>
    </div>
  );
};

export default Gauge;
