import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import DogImage from '../pages/DogImage';


const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dog" element={<DogImage/>} />
        </Routes>
    );
};

export default Router;