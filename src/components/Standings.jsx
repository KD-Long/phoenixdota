import React from 'react'
import Team from './Team'
import data from '../utils/teamData.js'

const Standings = () => {
    let testTeam = data.season0.leagues[0].teams[1]
    return (
        <>
            <div className='h-[600px] border border-red-500'>
                <div className='flex w-full h-full justify-center items-center border border-blue-500'>
                    <h1>Stats div</h1>
                    <Team team={testTeam}/>
                </div>
            </div>
        </>
    )
}

export default Standings