
import React from 'react'
import mdlogo from '../../assets/icons/mdlogo.webp'
import { Link } from 'react-router-dom'
import SideBar from '../../components/sideBar'
import SideIcons from '../../components/shared/sideIcons'
import searchIcon from '../../assets/icons/community/search-icon.svg'
import { communityCardData } from '../../constant/data'

import subBg from '../../assets/icons/community/subBg.webp'
import Btn from '../../components/shared/Btn'


const CommunityPage = () => {

    return (
        <div className='p-5 bg-[var(--color-bg)] h-screen w-screen flex'>
            {/* sidebar */}
            <div className="sidebar  w-[260px]">
                <Link to='/'>
                    <img src={mdlogo} alt="" className='h-[60px]' />
                </Link>
                <div className=' h-[calc(100%_-_60px)]'>
                    <SideBar />
                </div>
            </div>

            {/* main */}
            <div className="w-[calc(100%_-_260px)] relative">
                {/* inverted-border */}
                <div className="inverted-radius"></div>


                <div className='community-wraper bg-[var(--color-bg-white)] h-full w-full p-3 rounded-t-[8px] rounded-br-[8px]'>

                    <div className='community-main flex flex-col gap-y-6 h-full'>

                        <div className="top-right-icons w-full">
                            <SideIcons />
                        </div>

                        <div className="community-main-wraper  border border-[var(--color-bg)] rounded-[8px] p-5 flex flex-col gap-y-15 h-full">
                            <div className='community-top-sec flex justify-between '>

                                <h2>
                                    <span className='text-[var(--color-heading)] font-medium'>Metabolic</span> Community
                                </h2>

                                <div className='search-box bg-[var(--color-bg)] flex items-center max-w-[300px] px-4 rounded-[8px]'>
                                    <input type="text" placeholder='Search Communities' />
                                    <img src={searchIcon} alt="" className='h-6' />

                                </div>

                            </div>

                            <div className="community-cards-sec grid grid-cols-5 gap-y-10 gap-x-5" >
                                {communityCardData.map((item) => (
                                    <div
                                        className='flex flex-col gap-y-2 justify-center items-center  px-10 py-5  shadow-md border-b-[var(--color-primary)] border-b-[4px] rounded-[8px] w-full'
                                        style={{ backgroundImage: `url(${subBg})`, backgroundRepeat: 'no-repeat',backgroundSize: 'contain' }}
                                    >

                                        <img src={item.ComImg} alt="" />
                                        <p className='font-medium'>{item.ComTitle}</p>
                                        <p className='text-small text-[var(--color-dark-light)]'>{item.ComMemeber}</p>
                                        <Btn title='join' className='bg-[var(--color-btn)] px-3 py-2 rounded-[8px] w-full text-center text-[var(--color-bg-white)]' />

                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityPage