import React from 'react'

const GoogleForm = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-4xl p-4 border border-gray-200 rounded-lg shadow-lg">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfkWDEXMjKpZeltM7p-fbW1Zq1PmnIivDdpd3jlqF7-CLA0Fw/viewform?embedded=true"
                        width="100%"
                        height="100"
                        frameBorder="50"
                        marginHeight="50"
                        marginWidth="50"
                        className="w-full h-full">
                        Loading…
                    </iframe>
                </div>
            </div>
        </>
    )
}

export default GoogleForm