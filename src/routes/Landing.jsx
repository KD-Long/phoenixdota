import React from 'react'
import { useNavigate } from 'react-router-dom';


import Hero from '../components/Hero.jsx'


import data from '../utils/teamData.js'

import DivisonCards from '../components/DivisonCards.jsx';
import SteamPlayer from '../components/SteamPlayer.jsx';



const Landing = () => {
    
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

            <SteamPlayer steamId={"76561198065323370"}/>

     
        </>
    )
}

export default Landing