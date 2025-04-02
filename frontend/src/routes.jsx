import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/page/Home'));
const Contact = lazy(() => import('./components/page/Contact'))
const About = lazy(() => import('./components/page/About'));
const NotFound = lazy(() => import('./components/page/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="text-center mt-8">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Ruta comodín para manejar páginas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;