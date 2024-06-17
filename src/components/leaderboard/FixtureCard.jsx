import React, { useState, useEffect } from 'react';
import filterGroupFromMatches from '../../utils/filterGroupFromMatches.js'


const FixtureCard = ({ group }) => {
    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Note we are using a util func hear to do the google sheet read logic
                // based out a specified group this is because we also want that data to
                // be reused in section (cant put it in parent because it doesn knwo what group)
                const filteredData = await filterGroupFromMatches(group)
                setData(filteredData)

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
                    <h1 className="text-2xl font-bold mb-4">Fixture</h1>
                    <div className="overflow-x-auto w-full">
                        <table className="table-sm w-full table-auto">
                            <thead>
                                <tr>
                                    {/* This gets the keys of the objects that we use for header */}
                                    {data && data[0] && Object.keys(data[0]).map((header, index) => (
                                        <th key={index} className={index <= 1 ? "text-start py-2 border-b" : "py-2 border-b"}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {/* For each row of the data then extract the values  */}
                                {data && data.map((row, rowIndex) => (
                                    <tr key={rowIndex} className="">
                                        {Object.values(row).map((cell, cellIndex) => (
                                            <td
                                                key={cellIndex}
                                                className={cellIndex > 1 ? "text-center" : ""} // makes score and week text center
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                {/* When data is loading display Loader */}
                                {!data && <>
                                    <tr>
                                        <td colSpan="4">
                                            <div className='w-full h-full flex justify-center items-center'>
                                                {/* Loader */}
                                                <div className="loading w-48 h-48 loading-ring loading-lg"></div>
                                            </div>
                                        </td>
                                    </tr>
                                </>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FixtureCard