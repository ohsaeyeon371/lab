import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Apple from '../pages/Apple';
import Mandarine from '../pages/Mandarine';
import Melon from '../pages/Melon';
import Peach from '../pages/Peach'; 
import Pear from '../pages/Pear';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Apple" element={<Apple />} />
      <Route path="/Mandarine" element={<Mandarine />} />
      <Route path="/Melon" element={<Melon />} />
      <Route path="/Peach" element={<Peach />} />
      <Route path="/pear" element={<Pear />} />
    </Routes>
  );
};

export default AppRoutes;
