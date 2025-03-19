import React from 'react'
import SideBar from '../../components/sideBar'
import mdlogo from '../../assets/icons/mdlogo.webp'
import Dashborad from './../../components/dashboard';
import { Link } from 'react-router-dom';


const DashboradPage = () => {
    return (
        <div className='p-5 bg-[var(--color-bg)] h-full w-full flex'>
            {/* sidebar */}
            <div className="sidebar overflow-y-auto w-[260px] h-full">
                <Link to='/'>
                    <img src={mdlogo} alt="" className='h-[60px]' />
                </Link>
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