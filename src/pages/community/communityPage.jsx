
import React from 'react'
import mdlogo from '../../assets/icons/mdlogo.webp'
import { Link } from 'react-router-dom'
import SideBar from '../../components/sideBar'
import notfication from '../../assets/icons/dashboard/notfication.svg'
import userImg from '../../assets/icons/dashboard/userImg.svg'


const CommunityPage = () => {
    
    return (
        <div className='p-5 bg-[var(--color-bg)] h-screen w-screen flex'>
            {/* sidebar */}
            <div className="sidebar overflow-y-auto w-[260px] h-full">
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

                {/* Setting-page */}
                <div className='setting-wraper bg-[var(--color-bg-white)] h-full w-full p-3'>

                    <div className='setting-main w-full h-full flex flex-col gap-y-[12px]'>

                        <div className="setting-top flex justify-end">
                            <div className='setting-icons rounded-[30px] shadow-xs flex gap-2 px-4 py-4'>

                                <img src={notfication} alt="" className=' cursor-pointer ' />
                                <img src={userImg} alt="" className='cursor-pointer' />
                            </div>
                        </div>


                      <div className="community-main-wraper">
                        <div className='community-top-wraper'>


                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityPage