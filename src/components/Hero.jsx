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
                        <h1 className="mb-5 text-5xl font-bold">AUS/SEA Dota League</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Hero