import NavItem from "./NavItem.tsx";

import HomeIcon from "@/assets/icons/footer/home-icon.svg?react";
import ProgramIcon from "@/assets/icons/footer/program-icon.svg?react";
import SelfCheckIcon from "@/assets/icons/footer/self-check-icon.svg?react";
import MapIcon from "@/assets/icons/footer/map-icon.svg?react";

const Footer = () => {
  return (
    <footer className="h-[85px] flex py-[10px]">
      <nav className="w-full flex justify-around items-center">
        <NavItem path={"/"} contentName={"홈"}>
          <HomeIcon />
        </NavItem>
        <NavItem path={"/allprogram"} contentName={"프로그램"}>
          <ProgramIcon />
        </NavItem>
        <NavItem path={"/self-check"} contentName={"자가진단"}>
          <SelfCheckIcon />
        </NavItem>
        <NavItem path={"/map"} contentName={"지도"}>
          <MapIcon />
        </NavItem>
      </nav>
    </footer>
  );
};

export default Footer;
