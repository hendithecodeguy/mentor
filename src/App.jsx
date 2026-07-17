import { useState } from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from './assets/hero.png'
import './App.css'
import HeaderSection from './sections/HeaderSection'
import MainSection from './sections/MainSection'

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
    <>
        <HeaderSection></HeaderSection>
    <MainSection></MainSection>
    </>

  )
}

export default App
