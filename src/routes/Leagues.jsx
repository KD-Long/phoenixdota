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
            <div className='px-10'>
                {/* <div className=' relative w-full  border border-red-500'> */}
                <div className='flex border border-red-500'>
                    <details id="dropdown-details" className="dropdown border border-red-500 closed">
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
                <div className='flex min-h-[75vh] justify-center border border-green-500'>
                    <div role="tablist" className="tabs tabs-bordered w-full border border-blue-500">
                        {tabs.map((item) => (
                            <>
                                <div role="tab" onClick={() => setSelectedTabName(item)} className={selectedTabName === item ? "tab tab-active" : "tab"}> {item} </div>
                                <div role="tabpanel" className="tab-content p-10">
                                    {item +" Division"}
                                    <Division />
                                </div>
                            </>
                        ))}

                    
                    </div>

                </div>
            </div>

        </>
    )
}

export default Leagues