import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/home';
import AboutYou from './pages/AboutYou/aboutYou';
import Calendar from './pages/Calendar/calendar';
import Form from './pages/Form/form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='' element={<Home />} />
        <Route path='aboutYou' element={<AboutYou />} />
        <Route path='register' element={<Form />} />
        <Route path='calendar' element={<Calendar />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
