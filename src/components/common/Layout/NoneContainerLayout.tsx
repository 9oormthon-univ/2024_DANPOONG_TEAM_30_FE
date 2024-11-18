import { Outlet } from 'react-router-dom';

const NoneContainerLayout = () => {
  return (
    <div className='m-auto max-w-[450px] h-screen flex flex-col justify-center'>
      <Outlet />
    </div>
  );
};

export default NoneContainerLayout;
