import React from 'react'
import Sidebar from './Sidebar';
import Dashborad from './Dashboard/Dashborad.jsx';

const Layout = () => {
    return (
        <>
            <div className='p-5! pt-24! 2xl:px-[80px]! bg-[var(--color-primary)] h-screen w-full'>
                <div className='flex justify-between bg-[var(--color-background)] h-full w-[100%]
                 rounded-[8px] py-2! relative'>

                    {/* SiderBar */}
                    <div>
                        <Sidebar />
                    </div>

                    {/* Pages condictional rendering on path/location bases  */}
                    <div className='w-[calc(100%-220px)]  relative top-[-80px] rounded-r-[8px]'>
                        <Dashborad />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Layout;