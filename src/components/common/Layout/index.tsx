import { Outlet } from "react-router-dom";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const Layout = () => {
  return (
    <div className="m-auto max-w-[450px] h-screen flex flex-col justify-center">
      <div className="flex flex-col h-full overflow-auto px-[24px]">
        {/* <Header /> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
