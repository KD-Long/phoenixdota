import React from 'react'

const SectionRow = ({ group, teamName, gamesPlayed, wins, win }) => {

    let [teamData] = group.filter((value) => value.name == teamName.toUpperCase().trim())
    // console.log("section logging:   $$$$$$$$$$$$$$$$")
    // console.log("teamName: ", teamName)
    // console.log("GROUP: ", group)
    // console.log("teamData: ",teamData)
    // console.log("section logging:   $$$$$$$$$$$$$$$$")
    
    // Note if there is a mistake in the matchs and a two teams from different groups the url will be undefined
    // I will mark them as herald as a visual queue for me that something is incorrect
    const teamImgURL = teamData ? teamData.team_log : '/ranks/herald.webp';

    return (
        <>
            <div className="grid grid-cols-6 items-center bg-base-200 p-6">
                <div className="col-span-2">
                    <div className="flex items-center justify-left pl-2">
                        <img src={teamImgURL} alt="Esports Logo" className="w-12 h-12 mr-2 p-1" />
                        <div>
                            <div>{teamName}</div>
                        </div>

                    </div>
                </div>
                <div className="col-span-1 text-center">
                    <div>{gamesPlayed}</div>
                </div>
                <div className="col-span-2">
                    <div className="flex items-center justify-center pr-2">
                        <div>
                            <div>{wins}</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 text-center">
                    <div className={win >= 50 ? "text-green-500" : "text-red-500"}>{win}%</div>
                </div>
            </div>
        </>
    )
}

export default SectionRow