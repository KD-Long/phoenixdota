import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';



import './App.css'



import Team from './components/Team.jsx'
import Navbar from './components/Navbar.jsx'

import About from './routes/About.jsx'

import Landing from './routes/Landing.jsx';
import Leagues from './routes/Leagues.jsx';

function App() {
  const [count, setCount] = useState(0)





  return (
    <>


      {/* background fade */}
      {/* <div class="_1keusz4ZyZirGepu6hHG0D" style="background: linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.733) 100%, rgb(0, 0, 0) 100%);"></div> */}
      {/* <div className='bg-gradient-to-b from-transparent via-transparent to-black'> */}
      {/* <div className='bg-white bg-gradient-to-b '> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/about" element={<About />} />
        <Route path="/team/:name" element={<Team />} />
      </Routes>


      {/* footer TODO */}
      {/* </div> */}



    </>
  )
}

export default App
