import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/page/Home'));
const About = lazy(() => import('./components/page/About'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="text-center mt-8">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;