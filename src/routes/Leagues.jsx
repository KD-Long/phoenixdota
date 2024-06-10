import React, { useState, useRef } from 'react'
import Division from '../components/Division';



const Leagues = () => {

    const [selectedSeason, setSelectedSeason] = useState('Season 1');

    const tabs = [
        "Main",
        "Intermediate",
        "Upper",
    ]

    const [selectedTabName, setSelectedTabName] = useState(tabs[0])



    const handleSeason = (season) => {
        setSelectedSeason(season)
        //removing 'open' closes the drop down
        document.getElementById('dropdown-details').removeAttribute('open');
    }
    return (
        <>
            {/* Padding for screen size */}
            <div className='md:px-1/10'>

                {/* season selector */}
                <div className='flex'>
                    <details id="dropdown-details" className="dropdown closed">
                        {/* &nbsp; == space */}
                        {/* &#9660 == arrow */}
                        <summary className="m-1 btn open">{selectedSeason} &nbsp; &#9660;</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a onClick={() => { handleSeason("Season 1") }}>Season 1 <b>current*</b></a></li>
                            <li><a onClick={() => { handleSeason("Season 0") }}>Season 0</a></li>
                        </ul>
                    </details>
                </div>

                {/* Tabs */}
                <div className='flex min-h-[75vh] justify-center '>
                    <div role="tablist" className="tabs tabs-bordered overflow-x-auto w-full">
                        {tabs.map((item, i) => (
                            // This is a normal frag <></> but im overiddting so i can assign a Key to prevent warning
                            <React.Fragment key={item + i}>
                                <div role="tab"
                                    onClick={() => setSelectedTabName(item)}
                                    className={selectedTabName === item ? "tab tab-active" : "tab"}
                                >
                                    {item}
                                </div>
                                <div role="tabpanel" className="tab-content py-10">
                                    <Division div={item.toLocaleLowerCase()} />
                                </div>
                            </React.Fragment>
                        ))}


                    </div>

                </div>

            </div>
        </>
    )
}

export default Leagues