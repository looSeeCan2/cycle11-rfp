import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/home';
import AboutYou from './pages/AboutYou/aboutYou';
import AnotherPage from './pages/AnotherPage/anotherPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='' element={<Home />} />
        <Route path='aboutYou' element={<AboutYou />} />
        <Route path='anotherPage' element={<AnotherPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
