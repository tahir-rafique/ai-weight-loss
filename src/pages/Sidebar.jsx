import React from 'react'
import { NavLink } from 'react-router-dom'
import Btn from './../components/shared/Btn';
import { MdDashboard } from "react-icons/md";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { RiUserCommunityLine } from "react-icons/ri";
import { LuGoal } from "react-icons/lu";


import { TbSettingsCode } from "react-icons/tb";

const Sidebar = () => {
    return (
        <div className='sidebar px-4!  flex flex-col  h-full rounded-t-[8px]  w-[220px]'>

            <div className='flex flex-col justify-between h-full pb-5!'>


                <div className='sidebar-links flex flex-col gap-y-3 pt-2! text-[var(--color-dark-light)]'>
                    <NavLink to='' className={`hover:text-[var(--color-btn)] flex gap-2 items-center hover:shadow-md  rounded-[8px] px-2! py-2!` }>
                        <MdDashboard size={26} />
                        Dashboard
                    </NavLink>

                    <NavLink to='' className={`hover:text-[var(--color-btn)] flex gap-2 items-center hover:shadow-md rounded-[8px] px-2! py-2!`}>
                        <BsFillChatSquareTextFill size={22} />
                        AI Health Coach
                    </NavLink>

                    <NavLink to='' className={`hover:text-[var(--color-btn)]  flex gap-2 hover:shadow-md rounded-[8px] px-2! py-2!`}>
                        <LuGoal size={22} />

                        Goals
                    </NavLink>

                    <NavLink to='' className={`hover:text-[var(--color-btn)]  flex gap-2 hover:shadow-md rounded-[8px] px-2! py-2!`}>
                        <RiUserCommunityLine size={22} />

                        Community
                    </NavLink>

                    <NavLink to='' className={`hover:text-[var(--color-btn)] flex gap-2 hover:shadow-md rounded-[8px] px-2! py-2!`}>
                        <TbSettingsCode size={22} />

                        Settings
                    </NavLink>


                </div>
                <div>
                    <Btn title='Logout' className='border! border-[var(--color-btn)]! text-center rounded-[8px] py-2! text-[var(--color-btn)] ' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar