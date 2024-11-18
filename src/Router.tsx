import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import HomePage from '@/pages/HomePage.tsx';
import SelfCheckPage from "@/pages/SelfCheckPage.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/self-check' element={<SelfCheckPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
