import React from 'react';
import './index.css';
import Login from '@/pages/login/login';
import LandingPage from '@/pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App: React.FC = () => {
  React.useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
