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

function App() {
  const [count, setCount] = useState(0)

  let testTeam = data.season0.leagues[0].teams[1]

  return (
    <>
      {/* Container for side padding */}
      <div className='mx-32'>
        <Navbar />

        <Hero />
        <Team team={testTeam} />
        <Teams />
      </div>



    </>
  )
}

export default App
