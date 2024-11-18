import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import HomePage from '@/pages/HomePage.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
