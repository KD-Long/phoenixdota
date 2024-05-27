

import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 border border-red-500">
                <a className="btn btn-ghost text-xl">Phoenix<span className='text-orange-500'>Dota</span></a>

                <div className='flex w-1/2 justify-center border border-red-500'>
                    <a className="btn btn-ghost text-xl flex justify-end border border-red-500">Leagues<span className='text-orange-500'>Dota</span></a>
                    <a className="btn btn-ghost text-xl flex justify-end border border-red-500">Teams<span className='text-orange-500'>Dota</span></a>
                </div>
            </div>

        </>
    )
}

export default Navbar