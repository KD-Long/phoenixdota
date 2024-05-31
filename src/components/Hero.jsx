import React from 'react'


const Hero = () => {
    return (
        <>
            <div className="flex w-full min-h-[75vh] items-center justify-center">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">AUS/SEA Dota League</h1>
                        <p className="mb-5">Phoenix Dota is a place for YOU to find a team (or BYO team) and participate in a <b className='text-white'>chill, no-drama Dota 2 League</b> for nothing but the fleeting thrill of competition. </p>

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


        </>
    )
}


export default Hero