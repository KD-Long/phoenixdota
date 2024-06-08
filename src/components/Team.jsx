import React, { useEffect, useState } from 'react'
import data from '../utils/teamData.js'
import { useParams } from 'react-router-dom';


//team sould be the json value and have properties name region players

// Player:  Name icon steamID DotaBuff
const Team = () => {
    // this takes the name from url e.g
    // .../team/goonsquad  ---> name = goonsquad
    const { id } = useParams();

    const [team, setTeam] = useState()

    useEffect(() => {

        let allTeams = data.season0.leagues[0].teams

        for (let i = 0; i < allTeams.length; i++) {
            console.log(allTeams[i].name)
            if (allTeams[i].id == id) {
                setTeam(allTeams[i])
                console.log('set triggered')
            }
        }
        console.log(team)


    }, [])

    return (
        <>
            {team && <>
                <div className='flex py-20 mx-10'>
                    {/* Players */}
                    <div className='border border-red-500 p-10 w-1/2'>
                        <h1>{team.name}</h1>
                        <div className="overflow-x-auto">
                            <table className="table">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Icon</th>
                                        <th>Name</th>
                                        <th>Steam ID</th>
                                        <th>DotaBuff</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {team.players.map((player, i) => (
                                        <tr key={i}>
                                            <th>{i + 1}</th>
                                            <td ><img src={`/vite.svg`} /></td>
                                            <td>{player.name}</td>
                                            <td>{player.steamID}</td>
                                            <td>
                                                <a href={`https://www.dotabuff.com/search?q=${player.steamID}&commit=Search`}>
                                                    <img src="/dotabuff_favicon.ico" />
                                                </a>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* STATS */}
                    <div className='border border-red-500 p-10 w-1/2'>
                        <p>Stats</p>
                    </div>

                </div>
                {/* Match history */}
                <div className='border border-red-500 mx-10 p-10 w-full'>
                    <p>Match history</p>
                </div>
            </>}
        </>
    )
}

export default Team