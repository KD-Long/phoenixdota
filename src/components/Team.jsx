import React from 'react'
import data from '../utils/teamData.js'

//team sould be the json value and have properties name region players

// Player:  Name icon steamID DotaBuff
const Team = ({ team }) => {
    console.log(team)
    return (
        <>

            <div className='border border-red-500'>
                <h1>{team.name}</h1>
                {/* Player Table */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
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
                                    <td ><img src={`./vite.svg`} /></td>
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
        </>
    )
}

export default Team