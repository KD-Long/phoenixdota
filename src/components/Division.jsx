import React, { useState } from 'react'
import Teams from './Teams'
import Schedule from './Schedule'
import GoogleSheetsTest from './leaderboard/GoogleSheetsTest.jsx'
import LeaderBoard from './leaderboard/LeaderBoard.jsx'

const Division = ({ div }) => {
    console.log("Division: ", div)

    const tabs = [
        "LEADERBOARD",
        "TEAMS",
    ]
    const [selectedTabName, setSelectedTabName] = useState(tabs[0])

    return (
        <>
            {/* Tabs */}
            <div className='flex min-h-[50vh] justify-center py-5 '>
                <div role="tablist" className="tabs tabs-bordered overflow-x-auto w-full ">
                    {tabs.map((item, i) => (

                        // This is a normal frag <></> but im overiddting so i can assign a Key to prevent warning
                        <React.Fragment key={item + i}>
                            <div role="tab"
                                onClick={() => setSelectedTabName(item)}
                                className={selectedTabName === item ? "tab tab-active font-bold text-2xl text-white drop-shadow-custom-tight-dark" : "tab text-xl"}
                            >
                                {item}
                            </div>
                            <div role="tabpanel" className="tab-content py-10">
                                
                                {item === 'LEADERBOARD' && <LeaderBoard div={div} />}
                                {item === 'TEAMS' && <Teams div={div} />}
                            </div>
                        </React.Fragment>
                    ))}

                </div>
            </div>




            {/* <div className=''>

                <LeaderBoard div={div} />
                <Teams div={div} />
                <Schedule />

            </div> */}



        </>
    )
}

export default Division