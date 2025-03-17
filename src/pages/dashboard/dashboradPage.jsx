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
                <div className='h-[calc(100%_-_60px)]'>
                    <SideBar />
                </div>
            </div>

            {/* main */}
            <div className="w-[calc(100%_-_260px)] relative">
                {/* inverted-border */}
                <div className="inverted-radius"></div>
                <Dashborad />
            </div>
        </div>
    )
}

export default DashboradPage