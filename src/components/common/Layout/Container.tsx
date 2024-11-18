import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col h-full overflow-auto px-[24px]'>
      {children}
    </div>
  );
};

export default Container;
