import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Btn from './shared/Btn';
import dashboard from '../assets/icons/sidebar/dashboard.webp'
import aichat from '../assets/icons/sidebar/ai-chat.webp'
import setting from '../assets/icons/sidebar/setting.webp'
import goal from '../assets/icons/sidebar/goal.webp'
import community from '../assets/icons/sidebar/community.webp'



const SideBar = () => {
    const navigate = useNavigate()
    return (
        <div className='sidebar bg-[var(--color-bg-white)] flex flex-col  rounded-[8px] h-full w-full'>

            <div className='flex flex-col justify-between h-full w-full p-3'>

                <div className='sidebar-links flex flex-col gap-y-2  text-[var(--color-dark-light)]'>
                    <NavLink to='' className={`hover:text-[var(--color-btn)] flex gap-2 items-center hover:shadow-md  rounded-[8px] px-4 py-3`}>
                        <img src={dashboard} alt="" />
                        <p className='font-medium'> Dashboard  </p>
                    </NavLink>

                    <NavLink to='' className={`hover:text-[var(--color-btn)] flex gap-2 items-center hover:shadow-md rounded-[8px] px-4 py-3`}>
                        <img src={aichat} alt="" />
                        <p className='font-medium'>  AI Health Coach  </p>

                    </NavLink>

                    <NavLink to='' className={`hover:text-[var(--color-btn)]  flex gap-2 hover:shadow-md rounded-[8px] px-4 py-3`}>
                        <img src={goal} alt="" />
                        <p className='font-medium'>  Goals  </p>
                    </NavLink>

                    <NavLink to='' className={`hover:text-[var(--color-btn)]  flex gap-2 hover:shadow-md rounded-[8px] px-4 py-3`}>
                        <img src={community} alt="" />
                        <p className='font-medium'>  Community  </p>
                    </NavLink>

                    <NavLink to='' className={`hover:text-[var(--color-btn)] flex gap-2 hover:shadow-md rounded-[8px] px-4 py-3`}>
                        <img src={setting} alt="" />
                        <p className='font-medium'>  Settings  </p>
                    </NavLink>

                </div>

                <div>
                    <Btn title='Logout' className='border border-[var(--color-btn)] font-medium text-center rounded-[8px] py-2 text-[var(--color-btn)]'
                        onClick={() => { navigate('/') }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SideBar;