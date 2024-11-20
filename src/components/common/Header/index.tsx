import LogoIcon from '@/assets/icons/Logo.svg?react';
import MessageBot from '@/assets/icons/MessageBot.svg?react';
import MenuIcon from '@/assets/icons/Menu.svg?react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between mx-[24px] my-[18px]'>
      <LogoIcon />
      <div className='flex'>
        <button
          onClick={() => {
            navigate('/chat-bot');
          }}
        >
          <MessageBot />
        </button>
        <button>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
