import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import HomePage from '@/pages/HomePage.tsx';
import SelfCheckPage from '@/pages/SelfCheckPage.tsx';
import NoneContainerLayout from '@/components/common/Layout/NoneContainerLayout.tsx';
import SelfCheckResultPage from '@/pages/SelfCheckResultPage.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route element={<NoneContainerLayout />}>
          <Route path='/self-check' element={<SelfCheckPage />} />
          <Route path='/self-check-result' element={<SelfCheckResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
