import React from 'react'
import { useNavigate } from 'react-router-dom';


import Hero from '../components/Hero.jsx'


import data from '../utils/teamData.js'

import DivisonCards from '../components/DivisonCards.jsx';



const Landing = () => {
    const navigate = useNavigate();

    let testTeam = data.season0.leagues[0].teams[1]
    return (
        <>

            {/* <button
                onClick={() => navigate('/about')}
                className='btn'
            >
                Go to about
            </button>
            <button
                onClick={() => navigate('/phoenix')}
                className='btn'
            >
                Go to phoenix
            </button> */}


            <Hero />
            {/* <GoogleForm /> */}
            <DivisonCards />
            {/* <About /> */}
            {/* <Phoenix /> */}
            {/* <Schedule /> */}
            {/* <Team team={testTeam} /> */}
            {/* <Teams /> */}

     
        </>
    )
}

export default Landing