import React from 'react'

const TBdemo = () => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>SteamID</th>
                            <th>DotaBuff</th>
                            <th>Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Kdogpwns</td>
                            <td>76561198065323370</td>
                            <td>
                                <a href='https://www.dotabuff.com/search?q=76561198065323370&commit=Search'>
                                    <img src="/dotabuff_favicon.ico"/>
                                </a>
                            </td>
                            <td>Ez mid</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td className='border border-red-500'>SolaFide</td>
                            <td>76561198047203238</td>
                            <td><a href='https://www.dotabuff.com/search?q=76561198047203238&commit=Search'>link</a></td>
                            <td>Butt cheese</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <iframe src="https://brackethq.com/b/0162b/embed/" width="100%" height="550" frameborder="0"></iframe>s
        </>
    )
}

export default TBdemo