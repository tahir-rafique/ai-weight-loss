import React from 'react'
import SideBar from '../../components/sideBar'


const DashboradPage = () => {
    return (
        <div className='p-5 bg-[var(--color-primary)] h-screen w-screen flex'>
            {/* sidebar */}
            <div className="sidebar overflow-y-auto w-[20%] h-full">
                <div>
                    <h1 className='h-[60px]'>fafdsafasfd</h1>
                </div>
                <div className=' bg-white rounded-tl-lg rounded-bl-[8px]  h-[calc(100%_-_60px)]'>
                    <SideBar />
                </div>
            </div>

            {/* main */}
            <div className="dashboard bg-white rounded-e-[8px] rounded-tl-[8px] w-[80%] ">
                kjhbvcxdrtyuiuytrewqasdfgbnuy6rdc
            </div>
        </div>
    )
}

export default DashboradPage