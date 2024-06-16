

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = (path) => {
        //removing 'open' closes the drop down
        document.getElementById('dropdown-details').removeAttribute('open');
        navigate(`/${path}`)
    };


    return (
        <>
            {/* Removed bg-base-200 to make bg image extent to top */}
            <div className="flex navbar justify-center px-1/10 text-white">

                <a
                    className="btn btn-ghost flex text-xl"
                    onClick={() => navigate('/')}
                >
                    Home
                    {/* OLD HOMEWITH LOGO */}
                    {/* <img className=" h-10 w-10 object-contain" src='/pd_logo_540x540.png'></img>
                    <span className=''>Phoenix</span>
                    <span className='text-orange-500'>Dota</span> */}
                </a>

                <div className='hidden md:flex '>
                    <a
                        className="btn btn-ghost text-xl"
                        onClick={() => navigate('/leagues')}
                    >
                        Leagues
                        {/* <span className='text-orange-500'>Dota</span> */}
                    </a>
                    <a
                        className="btn btn-ghost text-xl"
                        onClick={() => navigate('/about')}
                    >Rules
                        {/* <span className='text-orange-500'>Dota</span> */}
                    </a>

                    <a
                        className="btn btn-ghost text-xl"
                        // onClick={() => navigate('/leagues')}
                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfkWDEXMjKpZeltM7p-fbW1Zq1PmnIivDdpd3jlqF7-CLA0Fw/viewform', "_blank")}

                    >
                        Register
                        {/* <span className='text-orange-500'>Dota</span> */}
                    </a>
                    <a onClick={() => window.open('https://discord.gg/MwK8fJd5cT', "_blank")}
                    >
                        <button className="btn btn-ghost">

                            <img
                                src='/discord_full_white.svg'
                                className='w-full h-full py-2 drop-shadow-custom-dark' 
                            />

                        </button>
                    </a>

                </div>

                {/* Hamburger icon for small screens */}
                <div className="md:hidden reletive">
                    {/* season selector */}
                    <div className='flex'>
                        <details id="dropdown-details" className="dropdown dropdown-end">
                            <summary className="m-1 btn bg-transparent border-transparent relative group">
                                {/* Code for hamburger icon */}

                                {/* <button className="relative group "> */}
                                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                                        <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                                        <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                                            <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                                            <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* </button> */}


                            </summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-xl w-52">
                                <li>
                                    <a
                                        className="btn btn-ghost text-xl"
                                        onClick={() => handleMenuClick('about')}
                                    >About
                                        {/* <span className='text-orange-500'>Dota</span> */}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="btn btn-ghost text-xl"
                                        onClick={() => handleMenuClick('leagues')}
                                    >
                                        Leagues
                                        {/* <span className='text-orange-500'>Dota</span> */}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="btn btn-ghost text-xl"
                                        // onClick={() => navigate('/leagues')}
                                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfkWDEXMjKpZeltM7p-fbW1Zq1PmnIivDdpd3jlqF7-CLA0Fw/viewform', "_blank")}

                                    >
                                        Signup
                                        {/* <span className='text-orange-500'>Dota</span> */}
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => window.open('https://discord.gg/MwK8fJd5cT', "_blank")}>
                                        <button className="btn bg-discord border-transparent text-white rounded-lg">
                                            Join discord<span><img src='/discord-mark-white.png' className='w-6 h-6' /></span>
                                        </button>
                                    </a>
                                </li>

                            </ul>
                        </details>
                    </div>
                </div>



            </div >

        </>
    )
}

export default Navbar