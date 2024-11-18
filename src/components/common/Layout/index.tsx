import { Outlet } from 'react-router-dom';
import Footer from '@/components/common/Footer';

const Layout = () => {
  return (
    <div className='m-auto max-w-[450px] h-screen flex flex-col justify-center'>
      <div className='flex flex-col h-full overflow-auto px-[24px]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
