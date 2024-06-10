import React from 'react'
import { useNavigate } from 'react-router-dom';

import Teams from '../components/Teams.jsx'
import Team from '../components/Team.jsx'
import Hero from '../components/Hero.jsx'
import Schedule from '../components/Schedule.jsx'
import About from '../components/About.jsx'
import Phoenix from '../routes/Phoenix.jsx'
import GoogleForm from '../components/GoogleForm.jsx'

import data from '../utils/teamData.js'
import LeagueIntro from '../components/LeagueIntro.jsx';
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
            <Phoenix />
            {/* <Schedule /> */}
            <Team team={testTeam} />
            {/* <Teams /> */}
        </>
    )
}

export default Landing