import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/common/Layout";
import HomePage from "@/pages/HomePage.tsx";
import SelfCheckPage from "@/pages/SelfCheckPage.tsx";
import NoneContainerLayout from "@/components/common/Layout/NoneContainerLayout.tsx";
import SelfCheckResultPage from "@/pages/SelfCheckResultPage.tsx";
import ProgramDetailPage from "@/pages/ProgramDetail/ProgramDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout을 포함한 공통 구조 */}
        <Route element={<Layout />}>
          {/* HomePage 경로 */}
          <Route path="/" element={<HomePage />} />
          {/* ProgramDetailPage 경로 */}
        </Route>
        <Route element={<NoneContainerLayout />}>
          <Route path="/self-check" element={<SelfCheckPage />} />
          <Route path="/self-check-result" element={<SelfCheckResultPage />} />
          <Route path="/program/:id" element={<ProgramDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
