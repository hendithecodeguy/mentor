import { useState } from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import './App.css'
import MainSection from './sections/MainSection'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  const [count, setCount] = useState(0)
 useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>

  )
}

export default App
