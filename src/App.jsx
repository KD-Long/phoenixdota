import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import TBdemo from './components/TBdemo.jsx'
import Teams from './components/Teams.jsx'
import Team from './components/Team.jsx'
import Navbar from './components/Navbar.jsx'
import data from './utils/teamData.js'
import Hero from './components/Hero.jsx'
import Schedule from './components/Schedule.jsx'
import About from './components/About.jsx'
import Phoenix from './components/Phoenix.jsx'

function App() {
  const [count, setCount] = useState(0)

  let testTeam = data.season0.leagues[0].teams[1]

  return (
    <>
      {/* Container for side padding */}
      <div className='mx-1/10'>
        <Navbar />

        <Hero />
        <Phoenix />
        <About />
        <Schedule />
        <Team team={testTeam} />
        <Teams />
      </div>



    </>
  )
}

export default App
