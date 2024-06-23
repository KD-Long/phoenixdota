import React, { useEffect } from 'react'

const FixtureRow = ({ row, group }) => {

    // Data cells: team1 team2 score week
    const rowValues = Object.values(row)
    const team1Name = rowValues[0]
    const team2Name = rowValues[1]
    const score = rowValues[2]
    const week = rowValues[3]

    // console.log("row: ",row)
    // console.log("group: ",group)

    // note this is susuptible to bad imput with extra spaces or missspellings
    // This should find the data linked to the two teams (should only be one)
    // square brackets just gets first ietem of array
    let [team1Data] = group.filter((value) => value.name == row["Team 1"].toUpperCase().trim())
    let [team2Data] = group.filter((value) => value.name == row["Team 2"].toUpperCase().trim())
    // console.log("team1Data: ",team1Data)
    // console.log("team2Data: ",team2Data)

    
    // Note if there is a mistake in the matchs and a two teams from different groups the url will be undefined
    // I will mark them as herald as a visual queue for me that something is incorrect
    const team1ImgURL = team1Data ? team1Data.team_log : '/ranks/herald.webp';
    const team2ImgURL = team2Data ? team2Data.team_log : '/ranks/herald.webp';
    // console.log("team1ImgURL: ",team1ImgURL)
    // console.log("team2ImgURL: ",team2ImgURL)



    return (
        <>
            <div className="grid grid-cols-6 items-center bg-base-200 p-2">
                <div className="col-span-2">
                    <div className="flex items-center justify-end pl-2">

                        <div>
                            <div>{team1Name}</div>
                        </div>
                        <img src={team1ImgURL} alt="Esports Logo" className="w-12 h-12 ml-2 p-1" />
                    </div>
                </div>
                <div className="col-span-1 text-center">
                    <div>{score == "" ? "TBD" : `${score[0]} - ${score[2]}`}</div>
                </div>
                <div className="col-span-2">
                    <div className="flex items-center justify-start pr-2">
                        <img src={team2ImgURL} alt="Esports Logo" className="w-12 h-12 mr-2 p-1" />
                        <div>
                            <div>{team2Name}</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 text-center">
                    <div>{week}</div>
                </div>
            </div>
        </>
    )
}

export default FixtureRow