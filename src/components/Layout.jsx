import React from 'react'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className="relative h-full">
            <div className="h-1/2 flex justify-center items-center">
                <div
                    className="h-full w-full min-h-[75vh] bg-repeat-x"
                    style={{
                        backgroundImage: `url('/anubis.jpg')`,
                        backgroundSize: 'auto 100%', // Maintain image height while allowing width to repeat
                        backgroundPosition: 'top',
                    }}
                ></div>
            </div>
            {/* This makes the img fade to black Note the absolute positions it relative to parent*/}
            <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-transparent to-black">
            </div>

            <div className="absolute inset-x-0 top-0 h-1/2">
                <div className="relative z-10 ">
                    {/* Your content here */}
                    {children}
                    {/* <Footer /> */}
                </div>
            </div>
            
        </div>

    )
}

export default Layout