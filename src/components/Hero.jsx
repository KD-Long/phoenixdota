import React from 'react'


const Hero = () => {
    return (
        <>
            {/* <div className='h-[600px] border border-red-500'>
        <div className='flex w-full h-full justify-center items-center border border-blue-500'>
            <h1>Hero div</h1>
        </div>
    </div> */}
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/phoenix_hero.png)' }}>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">AUS/SEA Dota League</h1>
                        <p className="mb-5">Phoenix Dota is a place for YOU to find a team (or BYO team) and participate in a <b className='text-white'>chill, no-drama Dota 2 League</b> for nothing but the fleeting thrill of competition. </p>

                        <div className='flex justify-center'>
                            <a href='https://discord.gg/MwK8fJd5cT'>
                                <button className="btn bg-discord text-white mx-2">
                                    Join our discord<span><img src='/discord-mark-white.png' className='w-6 h-6' /></span>
                                </button>
                            </a>
                            <button className="btn bg-white text-black mx-2"><a href='https://docs.google.com/forms/d/e/1FAIpQLSfkWDEXMjKpZeltM7p-fbW1Zq1PmnIivDdpd3jlqF7-CLA0Fw/viewform'>Sign up to a league</a></button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Hero