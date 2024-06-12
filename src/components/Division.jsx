import React, { useState } from 'react'
import Teams from './Teams'
import Schedule from './Schedule'
import Standings from './Standings'
import GoogleSheetsTest from './GoogleSheetsTest'

const Division = ({div}) => {
    console.log("Division: ",div)

    const tabs = [
        "Standings",
        "Schedule",
        "Teams",
    ]
    const [selectedTabName, setSelectedTabName] = useState(tabs[0])

    return (
        <>
            {/* Tabs */}
            {/* <div className='flex w-full min-h-[75vh] justify-center border border-blue-500'>
                <div role="tablist" className="tabs tabs-bordered  w-full border border-blue-500">
                    {tabs.map((item) => (
                        <>
                            <div role="tab" onClick={() => setSelectedTabName(item)} className={`${selectedTabName === item ? "tab tab-active" : "tab"} `}> {item} </div>
                            <div role="tabpanel" className="tab-content p-10  min-h-[75vh] border border-green-500">
                                {item}
                                
                                {item === 'Standings' && <Standings />}
                                {item === 'Schedule' && <Schedule />}
                                {item === 'Teams' && <Teams />}
                            </div>
                        </>
                    ))}
                </div>
            </div> */}

            <div className=''>
                <GoogleSheetsTest />
                <Standings div={div} />
                <Teams div={div}/>
                <Schedule />

            </div>



        </>
    )
}

export default Division