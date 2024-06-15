import React, { useState, useEffect } from 'react';
import Season_1 from '../../utils/Season_1.js'
import FixtureSectionCard from './FixtureSectionCard.jsx'
import FixtureCard from './FixtureCard.jsx'


const LeaderBoard = ({ div }) => {
    const data_div = Season_1[div]

    

    return (
        <>
            {/* <div className='h-[600px] border border-red-500'>
                <div className='flex w-full h-full justify-center items-center border border-blue-500'>
                    <h1>Stats div</h1>
                    <Team team={testTeam}/>
                </div>
            </div> */}
            <h1 className='text-xl font-bold my-10'>LEADERBOARD</h1>

            <div className=''>
                {Object.keys(data_div.groups).map(teamKey => {
                    // console.log(`Key: ${teamKey}, Value: ${data_div.groups[teamKey]}`);
                    let group = data_div.groups[teamKey]
                    // console.log("Group xxxxx:", group)
                    return (
                        <div key={teamKey} className=' bg-primary'>
                            <h1 className='text-2xl text-black bg-softOrange text-center font-bold py-5'>
                                {(`${div} Division ${teamKey}`).toLocaleUpperCase()}
                            </h1>
                            {/* Note to self gona have to chnage this for 1 for small screens */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-4 ">

                                <FixtureSectionCard group={group} />
                                <FixtureCard group={group} />



                            </div>
                        </div>)
                })}

                {/* SEA section + fixture */}

                {/* Playoffs??? */}
            </div>
        </>
    )
}

export default LeaderBoard