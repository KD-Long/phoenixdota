import React from 'react'
import data from '../utils/teamData.js'
import Season_1 from '../utils/Season_1.js'
import { useNavigate } from 'react-router-dom';
import TeamCard from './TeamCard.jsx';

// id Name DBUFF Details

// div is the selected divison as a string e.g "main"
const Teams = ({ div }) => {
    const navigate = useNavigate();
    const data_div = Season_1[div]
    // console.log("data_div: ",data_div)
    // console.log("div: ",div)
    return (
        <>
            {Object.keys(data_div.groups).map(teamKey => {
                // console.log(`Key: ${teamKey}, Value: ${data_div.groups[teamKey]}`);
                let group = data_div.groups[teamKey]
                // console.log("Group xxxxx:", group)
                return (
                    <div key={teamKey } className=' bg-primary'>
                        <h1 className='text-2xl text-black bg-softOrange text-center font-bold py-5'>
                            {(`${div} Division ${teamKey}`).toLocaleUpperCase()}
                        </h1>
                        {/* Note to self gona have to chnage this for 1 for small screens */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-4 ">
                            {
                                group.map((teamData, i) => (
                                    <TeamCard key={i} teamData={teamData} />
                                ))

                            }
                        </div>
                    </div>)
            })}
        </>
    )
}

export default Teams