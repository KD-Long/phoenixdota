import React from 'react'

const DivisonCards = () => {
    return (
        <>
            {/* DIVISIONS */}
            {/* Container */}
            <div className='flex justify-center py-10 md:mx-1/10  '>
                {/* <div className='flex w-full justify-center space-x-8 '> */}
                <div className="grid grid-cols-1 px-4 max-w-max gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3 font-hammersmith-one">

                    <div className="card flex w-full max-w-96 items-center bg-base-200 shadow-xl rounded-lg">

                        <img
                            className='w-3/4 mt-5'
                            src="/other/mainDivPhoenix.png"
                            alt="Main"
                        />
                        <div className="card-body items-center">

                            <h2 className="card-title text-4xl">
                                Main Division
                                {/* <div className="badge badge-secondary">NEW</div> */}
                            </h2>
                            <div className='min-h-1/2'>
                                <p className='text-gray-400'>Training wheels required.</p>
                                <p className='text-gray-400'>Freshly hatched chicks</p>
                                <p className='text-gray-400'>Average team mmr <span className='inline:block text-white font-bold'>{"<"}3000</span></p>
                            </div>
                            <div className="card-actions justify-end py-5">
                                <div className="badge badge-outline rounded-lg text-herald">Herald</div>
                                <div className="badge badge-outline rounded-lg text-guardian">Guardian</div>
                                <div className="badge badge-outline rounded-lg text-crusader">Crusader</div>
                                <div className="badge badge-outline rounded-lg text-archon">Archon</div>
                            </div>
                        </div>
                    </div>

                    <div className="card flex w-full max-w-96 items-center bg-base-200 shadow-xl rounded-lg">
                        <img
                            className='w-3/4 mt-5'
                            src="/other/inermediateDivPhoenix.png"
                            alt="Herald"
                        />
                        <div className="card-body items-center">

                            <h2 className="card-title  text-4xl">
                                Inter Division
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

                    <div className="card flex w-full max-w-96 items-center bg-base-200 shadow-xl rounded-lg">
                        <img
                            className='w-3/4 mt-5'
                            src="/other/upperDivPhoenix.png"
                            alt="Herald"
                        />
                        <div className="card-body items-center">
                            <h2 className="card-title text-4xl">
                                Upper Division
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
            </div>
        </>
    )
}

export default DivisonCards