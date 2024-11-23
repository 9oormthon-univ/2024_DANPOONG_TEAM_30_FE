import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/common/Layout";
import HomePage from "@/pages/HomePage.tsx";
import SelfCheckPage from "@/pages/SelfCheckPage.tsx";
import NoneContainerLayout from "@/components/common/Layout/NoneContainerLayout.tsx";
import SelfCheckResultPage from "@/pages/SelfCheckResultPage.tsx";
import ProgramDetailPage from "@/pages/ProgramDetailPage";
import OnboardingPage from "./pages/OnboardingPage";
import InfoPage from "./pages/InfoPage";
import InterestPage from "./pages/InterestPage";
import QuestionPage from "./pages/QuestionPage";
import AllProgramPage from "./pages/AllProgramPage";
import SelfCheckSurveyPage from "@/pages/SelfCheckSurveyPage.tsx";
import ChatBotPage from "@/pages/ChatBotPage.tsx";
import MapPage from "@/pages/MapPage.tsx";
import SearchPage from "@/pages/SearchPage.tsx";
import MapResultListPage from "@/pages/MapResultListPage.tsx";
import KnowPage from "@/pages/KnowPage.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout을 포함한 공통 구조 */}
        <Route element={<Layout />}>
          {/* HomePage 경로 */}
          <Route path="/" element={<HomePage />} />
          {/* ProgramDetailPage 경로 */}
          <Route path="/self-check" element={<SelfCheckPage />} />
          <Route path="/allprogram" element={<AllProgramPage />} />
          <Route path="/know" element={<KnowPage />} />
        </Route>
        <Route element={<NoneContainerLayout />}>
          <Route path="/self-check" element={<SelfCheckPage />} />
          <Route path="/self-check-result" element={<SelfCheckResultPage />} />
          <Route path="/program/:id" element={<ProgramDetailPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/interest" element={<InterestPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/self-check/survey" element={<SelfCheckSurveyPage />} />
          <Route path="/self-check-result" element={<SelfCheckResultPage />} />
          <Route path="/chat-bot" element={<ChatBotPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/map-result-list" element={<MapResultListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
