import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Facts from '../pages/Facts';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/facts" element={<Facts />} />
    </Routes>
  );
};

export default Router;
