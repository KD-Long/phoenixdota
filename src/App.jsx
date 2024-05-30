import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';



import './App.css'


import Teams from './components/Teams.jsx'
import Team from './components/Team.jsx'
import Navbar from './components/Navbar.jsx'

import Hero from './components/Hero.jsx'
import Schedule from './components/Schedule.jsx'
import About from './components/About.jsx'
import Phoenix from './routes/Phoenix.jsx'
import GoogleForm from './components/GoogleForm.jsx'
import Landing from './routes/Landing.jsx';

function App() {
  const [count, setCount] = useState(0)

  



  return (
    <>


      {/* Container for side padding */}
      {/* <div className='mx-1/10'> */}
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/phoenix" element={<Phoenix />} />
        </Routes>

        {/* footer TODO */}
      {/* </div> */}



    </>
  )
}

export default App
