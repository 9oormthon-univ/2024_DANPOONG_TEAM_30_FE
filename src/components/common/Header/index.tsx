import LogoIcon from "@/assets/icons/Logo.svg?react";
import MessageBot from "@/assets/icons/MessageBot.svg?react";
import MenuIcon from "@/assets/icons/Menu.svg?react";

const Header = () => {
  return (
    <div className="url flex flex-row mt-[20px]">
      <LogoIcon className="w-[28px] h-[25px] mt-[10px]" />
      <MessageBot className="w-[48px] h-[43px] ml-[240px]" />
      <button>
        <MenuIcon className="w-[45px] h-[40px] ml-auto mr-[14px] mt-[4px]" />
      </button>
    </div>
  );
};

export default Header;
