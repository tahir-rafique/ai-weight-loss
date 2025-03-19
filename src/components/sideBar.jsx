import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Btn from './shared/Btn';
import aichat from '../assets/icons/sidebar/ai-chat.webp';
import dashboard from '../assets/icons/sidebar/dashboard.webp';
// import dashboardActive from '../assets/icons/sidebar/dashboardActive.svg';
import goal from '../assets/icons/sidebar/goal.webp';
import goalActive from '../assets/icons/sidebar/goalActive.svg';
import community from '../assets/icons/sidebar/community.webp';
import communityActive from '../assets/icons/sidebar/community-active.svg';
import setting from '../assets/icons/sidebar/setting.webp';
import settingActive from '../assets/icons/sidebar/settingActive.svg';

// use to get pages-link 
var locaction = window.location.pathname;
// console.log(locaction);

const SideBar = () => {
    const loc = useLocation()
    console.log(loc)
    const navigate = useNavigate()
    return (
        <div className='sidebar bg-[var(--color-bg-white)] flex flex-col rounded-tl-[8px] rounded-bl-[8px]  h-full w-full'>

            <div className='flex flex-col justify-between h-full w-full p-3'>
                <div className='sidebar-links flex flex-col gap-y-2  text-[var(--color-dark-light)] pt-4'>
                    <NavLink
                        to='/dashboard-page'
                        className='navlink flex gap-2 hover:shadow-md rounded-[8px] px-4 py-3'
                    >
                        <img src={dashboard} alt="" />
                        <p className='font-medium'>  Dashboard  </p>
                    </NavLink>

                    {/* ai-chat */}
                    <NavLink
                        to='/conversation'
                        className="navlink flex gap-2 items-center hover:shadow-md rounded-[8px] px-4 py-3"
                    >
                        <img src={aichat} alt="" />
                        <p className='font-medium'>  AI Health Coach  </p>
                    </NavLink>

                    {/* Goals */}

                    <NavLink
                        to='/goals-page'
                        className='navlink flex gap-2 hover:shadow-md rounded-[8px] px-4 py-3'
                    >
                        <img src={goal} alt="" />
                        <p className='font-medium'>  Goals  </p>
                    </NavLink>

                    {/* Community */}
                    <NavLink
                        to='/community-page'
                        className='navlink flex gap-2 hover:shadow-md rounded-[8px] px-4 py-3'
                    >
                        <img src={community} alt="" />
                        <p className='font-medium'>  Community  </p>
                    </NavLink>

                    {/* Settings */}
                    <NavLink
                        to='/settings-page'
                        className='navlink flex gap-2 hover:shadow-md rounded-[8px] px-4 py-3'
                    >
                        <img src={setting} alt="" />
                        <p className='font-medium'>  Settings  </p>
                    </NavLink>
                </div>

                <div>
                    <Btn
                        title='Logout'
                        onClick={() => { navigate('/') }}
                        className='border border-[var(--color-btn)] font-medium text-center rounded-[8px] py-2 text-[var(--color-btn)]'
                    />
                </div>
            </div>
        </div>
    )
}

export default SideBar;