import React from 'react'

const DivisonCards = () => {
    return (
        <>
            {/* DIVISIONS */}
            {/* Container */}
            <div className='flex justify-center py-10 md:mx-1/10  '>
                {/* <div className='flex w-full justify-center space-x-8 '> */}
                <div className='flex flex-col items-center'>
                    {/* Each child will be their own col stacked vertically (one for grid, one for desc) */}
                    <div className="grid grid-cols-1 px-4 max-w-max gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3 font-hammersmith-one">
                        <div className="card flex w-full max-w-96 items-center bg-base-200 shadow-xl rounded-lg border-4 border border-legend">

                            <img
                                className='w-3/4 mt-5'
                                src="/other/mainDivphoenixlarge.png"
                                alt="Main"
                            />
                            <div className="card-body items-center text-center">

                                <h2 className="card-title text-4xl ">
                                    MAIN DIVISION
                                    {/* <div className="badge badge-secondary">NEW</div> */}
                                </h2>
                                <div className='min-h-1/2'>
                                    <p className='text-gray-400 '>
                                        Experience co-ordination that is Avant-Garde & warding more endangered than the Siberian tiger.<br />
                                    </p>
                                    <br />
                                    <p className='text-gray-400 '>These little hatchling's only care about the memories & mayhem; making stories worth telling.</p>
                                    {/* <p className='text-gray-400'>Average team mmr <span className='inline:block text-white font-bold'>{"<"}3000</span></p> */}
                                </div>

                                {/* <div className="card-actions justify-end py-5">
                                <div className="badge badge-outline rounded-lg text-red-700">Avg 3k</div>
                            </div> */}
                                {/* old badges :( */}
                                {/* <div className="card-actions justify-end py-5">
                                <div className="badge badge-outline rounded-lg text-herald">Herald</div>
                                <div className="badge badge-outline rounded-lg text-guardian">Guardian</div>
                                <div className="badge badge-outline rounded-lg text-crusader">Crusader</div>
                                <div className="badge badge-outline rounded-lg text-archon">Archon</div>
                            </div> */}

                            </div>
                        </div>

                        <div className="card flex w-full max-w-96 items-center bg-base-200 shadow-xl rounded-lg border-4 border border-pdorange">
                            <img
                                className='w-3/4 mt-5'
                                src="/other/interDivphoenixlarge.png"
                                alt="Herald"
                            />
                            <div className="card-body items-center text-center">

                                <h2 className="card-title  text-4xl">
                                    INTER DIVISION
                                </h2>
                                <div className='min-h-1/2'>
                                    <p className='text-gray-400 '>Talented but unpolished.</p>
                                    <p className='text-gray-400'>Fiedglings unite</p>
                                    <p className='text-gray-400'>Average team mmr <span className='inline:block text-white font-bold'>{">"}3000</span></p>
                                </div>
                                <div className="card-actions justify-end py-5">
                                    <div className="badge badge-outline rounded-lg text-legend">Legend</div>
                                    <div className="badge badge-outline rounded-lg text-ancient">Ancient</div>
                                    <div className="badge badge-outline rounded-lg text-divine">Divine</div>
                                </div>
                            </div>
                        </div>

                        <div className="card flex w-full max-w-96 items-center bg-base-200 shadow-xl rounded-lg border-4 border border-ancient">
                            <img
                                className='w-3/4 mt-5'
                                src="/other/upperdivphoenixlarge.png"
                                alt="Herald"
                            />
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-4xl">
                                    UPPER DIVISION
                                </h2>
                                <div className='min-h-1/2'>
                                    <p className='text-gray-400'>Talented but unpolished.</p>
                                    <p className='text-gray-400'>Fiedglings unite</p>
                                    <p className='text-gray-400'>Average team mmr <span className='inline:block text-white font-bold'>{">"}5400</span></p>
                                </div>
                                <div className="card-actions justify-end py-5">
                                    <div className="badge badge-outline rounded-lg text-divine">Divine</div>
                                    <div className="badge badge-outline rounded-lg text-immortal">Immortal</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* TEXT FOOTER DESC */}
                    {/* Note dirty hard cap on with is to keep it aligned with card div above */}
                    <div className='max-w-[1188px] mx-4 my-4 px-4 py-5 bg-base-200 rounded-xl text-gray-400 text-center'>
                    Phoenix Dota Leagues are open to teams of any skill level. Teams will be placed in appropriate divisions based on their skill as a team. It is advised that if there are large skill gaps between teammates (Inc. subs) the team may be placed in an unfavourable division.
                    </div>
                </div>

            </div>
        </>
    )
}

export default DivisonCards