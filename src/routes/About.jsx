import React from 'react'
import GDocViewer from '../components/GDocViewer'


const About = () => {
    const rulesGdocsUrl = 'https://docs.google.com/document/d/e/2PACX-1vTkWKo1_PHsV8N8IBtXVPa68nwXeB6RgAPa0KE4f2FMksxg_arcT3Agd0YGF0SXrViccwElIWkF2eLa/pub?embedded=true'
    // const docUrl = 'https://docs.google.com/document/d/1AHux92511WM834rP4xrslm3tl-AfJzDI_8pBRaYPuik/export?format=html'; // Replace with your Google Doc export URL
    const docUrl = 'https://docs.google.com/document/d/1RoqHK9g9UBNAg6rS7kc8n3H8ulAoKztJOlr4Ijkh9y0/export?format=html'; // Replace with your Google Doc export URL

    return (
        <>
            <div className="flex w-full min-h-[75vh] w-6xl mb-20 items-center justify-center">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md flex flex-col items-center ">
                        <h1 className="mb-5 text-5xl font-bold text-white text-center">Welcome to Phoenix <span className='text-orange-500'>Dota</span></h1>

                        <h2 className="mb-5 text-3xl font-bold text-white">Season 1</h2>
                        <p className="mb-5 w-2/3 text-xl text-red-700 font-bold bg-black p-2 rounded-lg">June - September 2024</p>
                        <p className="mb-5 w-2/3 text-xl text-red-700 font-bold bg-black p-2 rounded-lg">Signups Closed</p>
                        {/* <p className="mb-5 w-3/4 text-xl text-red-700 font-bold bg-black p-1 rounded-lg">Season begins 24th June 2024</p> */}

                        <div className='flex justify-center'>
                            <a onClick={() => window.open('https://discord.gg/MwK8fJd5cT', "_blank")}
                                className='px-4'
                            >
                                <button className="btn bg-discord text-white mx-2 rounded-lg">
                                    Join our discord<span><img src='/discord-mark-white.png' className='w-6 h-6' /></span>
                                </button>
                            </a>
                            <button className="btn bg-white text-black mx-2 rounded-lg">
                                <a
                                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfkWDEXMjKpZeltM7p-fbW1Zq1PmnIivDdpd3jlqF7-CLA0Fw/viewform', "_blank")}
                                // href='https://docs.google.com/forms/d/e/1FAIpQLSfkWDEXMjKpZeltM7p-fbW1Zq1PmnIivDdpd3jlqF7-CLA0Fw/viewform'
                                >
                                    Signup to a league
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* GDOC exported and inner html rendered */}
            <GDocViewer docUrl={docUrl} />
            
        </>
    )
}

export default About