import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import TBdemo from './components/TBdemo.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TBdemo />
      
    </>
  )
}

export default App
