import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Phoenix = () => {
    const videoRef = useRef(null);

    useGSAP(() => {
        // gsap.to('.hero-title', { opacity: 1, delay: 1.5 })
        // gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
        let video= videoRef.current
        
        gsap.to(video, {
            duration: 3.27,
            repeat: -1,
            repeatRefresh: true,
            ease: 'power2.inOut',
            onRepeat: () => {
                // console.log(video.currentTime)
                console.log(video.currentTime)
                video.currentTime = 0;
                console.log(video.currentTime)
                video.play();
            },
        });
      }, [])

    return (
        <>
            <div className='border border-red-500'>
                <div className='flex w-full h-full justify-center items-center border border-blue-500'>
                    <video
                        ref={videoRef}
                        id = "phoenix_vid"
                        className=" -z-10 max-h-[50vh] border border-green-500"
                        // poster="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phoenix.png"
                        autoPlay
                        preload="auto"
                        // loop
                        playsInline={true}
                    >
                        <source
                            type="video/webm"
                            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phoenix.webm"
                        />
                        {/* <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/phoenix.png" /> */}
                    </video>
                </div>
            </div>
        </>
    )
}

export default Phoenix