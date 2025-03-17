import React from 'react'
import SideBar from '../../components/sideBar'
import mdlogo from '../../assets/icons/mdlogo.webp'
import Dashborad from './../../components/dashboard';


const DashboradPage = () => {
    return (
        <div className='p-5 bg-[var(--color-bg)] h-screen w-screen flex'>
            {/* sidebar */}
            <div className="sidebar overflow-y-auto w-[260px] h-full">
                <div>
                    <img src={mdlogo} alt="" className='h-[60px]' />
                </div>
                <div className='rounded-tl-lg rounded-bl-[8px]  h-[calc(100%_-_60px)]'>
                    <SideBar />
                </div>
            </div>

            {/* main */}
            <div className="rounded-e-[8px] rounded-tl-[8px] w-full ">
                <Dashborad />
            </div>
        </div>
    )
}

export default DashboradPage