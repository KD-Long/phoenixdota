import React from 'react'

const DivisonCards = () => {
    return (
        <>
            {/* DIVISIONS */}
            {/* Container */}
            <div className='flex justify-center py-10 md:mx-1/10  '>
                {/* <div className='flex w-full justify-center space-x-8 '> */}
                <div className="grid grid-cols-1 px-4 max-w-max gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3 ">
                    
                    <div className="card flex w-full max-w-96 items-center bg-base-200 shadow-xl rounded-lg">
                        <figure><img src="/ranks/herald.webp" alt="Herald" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Main Division
                                {/* <div className="badge badge-secondary">NEW</div> */}
                            </h2>
                            <p className='text-gray-400'>For the low mmr legends.</p>
                            <p className='text-gray-400'>Average team mmr <span className='inline:block text-white font-bold'>{"<"}3000</span></p>
                            <div className="card-actions justify-end py-5">
                                <div className="badge badge-outline rounded-lg text-herald">Herlad</div>
                                <div className="badge badge-outline rounded-lg text-guardian">Guardian</div>
                                <div className="badge badge-outline rounded-lg text-crusader">Crusader</div>
                                <div className="badge badge-outline rounded-lg text-archon">Archon</div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full max-w-96 bg-base-200 shadow-xl rounded-lg">
                        <figure><img src="/ranks/legend.webp" alt="Legend" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Intermediate Division
                            </h2>
                            <p className='text-gray-400'>For the wana be good bois.</p>
                            <p className='text-gray-400'>Average team mmr <span className='inline:block text-white font-bold'>{">"}3000</span></p>
                            <div className="card-actions justify-end py-5">
                                <div className="badge badge-outline rounded-lg text-legend">Legend</div>
                                <div className="badge badge-outline rounded-lg text-ancient">Ancient</div>
                                <div className="badge badge-outline rounded-lg text-divine">Divine</div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full max-w-96 bg-base-200 shadow-xl rounded-lg">
                        <figure><img src="/ranks/immortal.webp" alt="Immortal" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Upper Division
                            </h2>
                            <p className='text-gray-400'>For the try hard scrubs.</p>
                            <p className='text-gray-400'>Average team mmr <span className='inline:block text-white font-bold'>{">"}5400</span></p>
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