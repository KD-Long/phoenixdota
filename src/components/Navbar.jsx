

import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="navbar flex flex-wrap bg-base-200 items-center justify-between p-2">
                <div className='flex items-center'>
                    <a
                        className="btn btn-ghost text-xl border border-blue-500"
                        onClick={() => navigate('/')}
                    >
                        <img className=" h-10 w-10 object-contain" src='./pd_logo_540x540.png'></img>
                        <span className=''>Phoenix</span>
                        <span className='text-orange-500'>Dota</span>
                    </a>
                </div>
                <div className='flex w-1/2 flex-grow items-center justify-between'>
                    <a
                        className="btn btn-ghost w-1/2 text-xl object-contain border border-red-500"
                        onClick={() => navigate('/phoenix')}
                    >
                        Leagues<span className='text-orange-500'>Dota</span>
                    </a>
                    <a
                        className="btn btn-ghost w-1/2 text-xl object-contain border border-red-500"
                        onClick={() => navigate('/about')}
                    >About<span className='text-orange-500'>Dota</span></a>
                </div>
            </div >

        </>
    )
}

export default Navbar