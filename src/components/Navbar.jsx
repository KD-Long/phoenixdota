

import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* Removed bg-base-200 to make bg image extent to top */}
            <div className="navbar justify-center ">

                <a
                    className="btn btn-ghost text-xl px-[70px]"
                    onClick={() => navigate('/')}
                >
                    <img className=" h-10 w-10 object-contain" src='/pd_logo_540x540.png'></img>
                    <span className=''>Phoenix</span>
                    <span className='text-orange-500'>Dota</span>
                </a>


                <a
                    className="btn btn-ghost text-xl px-[70px]"
                    onClick={() => navigate('/leagues')}
                >
                    Leagues
                    {/* <span className='text-orange-500'>Dota</span> */}
                </a>
                <a
                    className="btn btn-ghost text-xl px-[70px]"
                    onClick={() => navigate('/about')}
                >About
                {/* <span className='text-orange-500'>Dota</span> */}
                </a>

            </div >

        </>
    )
}

export default Navbar