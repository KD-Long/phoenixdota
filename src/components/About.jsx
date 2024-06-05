import React from 'react'

const About = () => {
    return (
        <>
            <div className="flex w-full min-h-[75vh] items-center justify-center">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Welcome to Phoenix <span className='text-orange-500'>Dota</span></h1>

                        <h2 className="mb-5 text-3xl font-bold text-white">Season 1</h2>
                        <p className="mb-5">Signups open 17th May 2024</p>
                        <p className="mb-5">Signups close 9th June 2024</p>
                        <p className="mb-5">Season begins 24th June 2024</p>

                        <div className='flex justify-center'>
                            <a href='https://discord.gg/MwK8fJd5cT'>
                                <button className="btn bg-discord text-white mx-2 rounded-lg">
                                    Join our discord<span><img src='/discord-mark-white.png' className='w-6 h-6' /></span>
                                </button>
                            </a>
                            <button className="btn bg-white text-black mx-2 rounded-lg"><a href='https://docs.google.com/forms/d/e/1FAIpQLSfkWDEXMjKpZeltM7p-fbW1Zq1PmnIivDdpd3jlqF7-CLA0Fw/viewform'>Sign up to a league</a></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* DIVISIONS */}
            {/* Container */}
            <div className='flex w-full justify-center space-x-8'>
                <div className="card w-96 bg-base-200 shadow-xl rounded-lg">
                    <figure><img src="/ranks/herald.webp" alt="Herald" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Main Division
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline rounded-lg text-herald">Herlad</div>
                            <div className="badge badge-outline rounded-lg text-guardian">Guardian</div>
                            <div className="badge badge-outline rounded-lg text-crusader">Crusader</div>
                            <div className="badge badge-outline rounded-lg text-archon">Archon</div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-200 shadow-xl rounded-lg">
                    <figure><img src="/ranks/legend.webp" alt="Legend" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Intermediate Division

                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline rounded-lg text-legend">Legend</div>
                            <div className="badge badge-outline rounded-lg text-ancient">Ancient</div>
                            <div className="badge badge-outline rounded-lg text-divine">Divine</div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-200 shadow-xl rounded-lg">
                    <figure><img src="/ranks/immortal.webp" alt="Immortal" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Upper Division
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline rounded-lg text-divine">Divine</div>
                            <div className="badge badge-outline rounded-lg text-immortal">Immortal</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* league Format */}
            <div>
                {/* TEMP FILLER */}
                <div className='h-[600px] border border-red-500'>
                    <div className='flex w-full h-full justify-center items-center border border-blue-500'>
                        <h1>Format</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About