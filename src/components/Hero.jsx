import React from 'react'


const Hero = () => {
    return (
        <>
            <div className="flex w-full min-h-[75vh] mb-20 items-center justify-center">
                <div className="hero-content text-center text-neutral-content ">
                    <div className="flex flex-col pb-40 items-center">
                        <img
                            className='w-1/2'
                            src="/other/PhoenixLogoShadowTransparent.png"
                        />
                        <h1 className="text-5xl font-bold text-white font-hammersmith-one drop-shadow-custom-tight-dark">PHOENIX DOTA</h1>
                        <h2
                            className='text-5xl text-white font-amatic-sc font-bold  drop-shadow-custom-dark'
                        >
                            HOSTING <span className='text-pdorange'>OCEANIC & SEA DOTA</span> LEAGUES
                        </h2>
                        <img
                            className='w-1/10 pt-5 drop-shadow-custom-dark '
                            src="/other/dotalogotransparent2.png"
                        />
                        {/* <div className='flex justify-center'>
                            <a href='https://discord.gg/MwK8fJd5cT'>
                                <button className="btn bg-discord text-white mx-2 rounded-lg">
                                    Join our discord<span><img src='/discord-mark-white.png' className='w-6 h-6' /></span>
                                </button>
                            </a>
                            <button className="btn bg-white text-black mx-2 rounded-lg"><a href='https://docs.google.com/forms/d/e/1FAIpQLSfkWDEXMjKpZeltM7p-fbW1Zq1PmnIivDdpd3jlqF7-CLA0Fw/viewform'>Sign up to a league</a></button>
                        </div> */}
                    </div>
                </div>
            </div>


        </>
    )
}


export default Hero