import React, { useState, useEffect } from 'react';
import filterGroupFromMatches from '../../utils/filterGroupFromMatches.js'

const FixtureSectionCard = ({ group }) => {

    const [data, setData] = useState()

    //helper function to add values to map
    const addToMap = (map, key, wins, games) => {
        let winSum = wins
        let gameSum = games
        if (map.has(key)) {
            let values = map.get(key)
            winSum += values[0]
            gameSum += values[1]
        }
        map.set(key, [winSum, gameSum])
    }

    // Function calculates scores and returns new data structure
    // return value group: [
    //     {teamName: "", seriesPlayed:"",Points:"",Win:""},
    //     ...
    // ]
    const calculateScores = (data) => {

        // Map of teams such that:
        // key=teamName
        // value=[games,wins]
        console.log("data: ",data)
        let teamMap = new Map()
        data.forEach(match => {
            // if scores exist calc them otherwise set as 0
            const t1 = match.Score ? parseInt(match.Score[0]) : 0
            const t2 = match.Score ? parseInt(match.Score[2]) : 0
            const total = t1 + t2

            //if the match has been scored 
            if (total != 0) {
                //+= value to map
                addToMap(teamMap, match["Team 1"], t1, total)
                addToMap(teamMap, match["Team 2"], t2, total)
            }
        });

        //At this point our map will contain all scores
        let result = []
        for (const [key, value] of teamMap) {
            const row = {
                teamName: key,
                seriesPlayed: value[1],
                Points: value[0],
                Win: (value[0] / value[1] * 100) //is a % will add symbol later
            }
            result.push(row)
        }
        // Sort decending based on win%
        result.sort((a, b) => {
            return b.Win - a.Win
        })
        return result
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Note we are using a util func hear to do the google sheet read logic
                // based out a specified group this is because we also want that data to
                // be reused in section (cant put it in parent because it doesn knwo what group)
                const filteredData = await filterGroupFromMatches(group)
                const calcScores = calculateScores(filteredData)
                console.log("##### calcScores: ", calcScores)
                setData(calcScores)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    return (
        <>
            <div className='flex w-full h-full bg-black border-4 rounded-lg border-blue-900 '>
                <div className='flex flex-col w-full sm:min-w-1/2 justify-center items-center py-5 '>
                    {/* TABLE */}
                    <h1 className="text-2xl font-bold mb-4">Section</h1>
                    <div className="overflow-x-auto w-full">

                        <table className="table-sm w-full table-auto">
                            <thead>
                                <tr className='py-2 px-4 border-b'>
                                    <th >Team</th>
                                    <th>Series Played</th>
                                    <th>Points</th>
                                    <th>Win %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((team, i) => (
                                    <tr key={i}>
                                        <td >{team.teamName}</td>
                                        <td className='text-center'>{team.seriesPlayed}</td>
                                        <td className='text-center'>{team.Points}</td>
                                        <td className='text-center'>{team.Win}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FixtureSectionCard