import React from 'react'

const FixtureSectionCard = ({ group }) => {


    
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
                                {group.map((team, i) => (
                                    <tr key={i}>
                                        <td>{team.name}</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>100%</td>
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