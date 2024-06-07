import React from 'react'
import data from '../utils/teamData.js'

// id Name DBUFF Details

const Teams = () => {
    
    return (
        <>
            <h1>Team list</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
 
                            <th>Name</th>
                            <th>Icon</th>
                            <th>DotaBuff</th>
                            <th>Players</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.season0.leagues[0].teams.map((team, i) => (
                            <tr key={i}>
                                <td>{team.name}</td>
                                <td><img src="./vite.svg" /></td>
                                <td>
                                    <a href='https://www.dotabuff.com/search?q=76561198065323370&commit=Search'>
                                        <img src="/dotabuff_favicon.ico" />
                                    </a>
                                </td>
                                <td>Details ...TODO</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Teams