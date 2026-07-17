import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HeaderSection from './sections/HeaderSection'
import MainSection from './sections/MainSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <HeaderSection></HeaderSection>
    <MainSection></MainSection>
    </>

  )
}

export default App
