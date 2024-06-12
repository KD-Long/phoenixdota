import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const GoogleSheetsTest = () => {

    const [data, setData] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            // published csv url
            const publicSheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRM9wY0hE8SBHevcgzpRRCIocyDMtH5qEkcQLjgmH-D5GThiT4LtjFXcBQrLTHUdXPfe2gczi7AowoQ/pub?gid=0&single=true&output=csv"
            try {
                const response = await fetch(publicSheetUrl);
                const csvText = await response.text();
                const parsedData = Papa.parse(csvText, { header: true });
                setData(parsedData.data);
                console.log(parsedData.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='flex w-full h-full bg-black border-4 rounded-lg border-blue-900 '>
                <div className='flex flex-col w-full sm:min-w-1/2 justify-center items-center py-5 '>
                    {/* TABLE */}
                        <h1 className="text-2xl font-bold mb-4">Match Data pulled from google sheets</h1>
                        <div className="overflow-x-auto w-full">
                            <table className="table-sm sm:table-sm w-full table-auto">
                                <thead>
                                    <tr>
                                        {data[0] && Object.keys(data[0]).map((header, index) => (
                                            <th key={index} className="py-2 px-4 border-b">{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, rowIndex) => (
                                        <tr key={rowIndex} className="">
                                            {Object.values(row).map((cell, cellIndex) => (
                                                <td key={cellIndex} className="">{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default GoogleSheetsTest