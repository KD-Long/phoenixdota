import React from 'react'


const TeamCard = ({ teamData }) => {
    return (
        <>
            <div className='flex w-full h-full bg-black border-4 rounded-lg border-blue-900 '>
                <div className='flex flex-col w-full sm:min-w-1/2 justify-center items-center py-5 '>
                    <h1 className='text-lg'><b>{teamData.name}</b></h1>
                    <h2 className='min-h-5 text-sm text-gray-400 text-center'>{teamData.slogan ? `"${teamData.slogan}"` : ""}</h2>
                    {/* TABLE */}
                    <div className="overflow-x-auto w-full">
                        <table className="table-xs sm:table-xs w-full table-auto">
                            <thead>
                                <tr>
                                    <th className='text-start'>Name</th>
                                    <th className='text-start'>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamData.players.map((player, i) => (
                                    <tr key={i}>
                                        <td className="">{player.name}</td>
                                        <td>{player.position}</td>
                                        <td>
                                            <a href={`https://steamcommunity.com/profiles/${player.steam_id == "steam_id" ? "76561198065323370" : player.steam_id}`}>
                                                <img
                                                    className='min-h-7 max-h-7 max-w-7 min-w-7'
                                                    src="/steam-logo.png"
                                                />
                                            </a>
                                        </td>
                                        <td>
                                            <a href={`https://www.dotabuff.com/search?q=${player.steam_id == "steam_id" ? "76561198065323370" : player.steam_id}&commit=Search`}>
                                                <img
                                                    className='min-h-5 max-h-5 max-w-5 min-w-5'
                                                    src="/dotabuff_favicon.ico"
                                                />
                                            </a>
                                        </td>
                                        {/* <td><button className='btn rounded-lg' onClick={() => navigate(`/team/${team.id}`)}>Team details {">"}</button></td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="lg:hidden flex justify-center items-center ">
                        <img className="w-auto h-auto object-contain " src={teamData.team_log} />
                    </div>
                </div>
                <div className="hidden lg:flex justify-center items-centers w-1/2">
                    <img className="w-auto  h-auto object-contain " src={teamData.team_log} />
                </div>
            </div >


        </>
    )
}

export default TeamCard