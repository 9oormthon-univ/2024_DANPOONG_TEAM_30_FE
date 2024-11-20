import { Outlet } from "react-router-dom";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Layout/Container.tsx";
import Header from "@/components/common/Header/index.tsx";

const Layout = () => {
  return (
    <div className="m-auto max-w-[450px] h-screen flex flex-col justify-center">
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
