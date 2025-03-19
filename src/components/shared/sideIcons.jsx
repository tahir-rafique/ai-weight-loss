import React from 'react'
import notfication from '../../assets/icons/dashboard/notfication.svg'
import userImg from '../../assets/icons/dashboard/userImg.svg'

const SideIcons = () => {
    return (
        <div className='w-full flex justify-end'>
            <div className='setting-icons rounded-[30px] shadow-md flex gap-2 px-4 py-2 w-fit'>
                <img src={notfication} alt="" className='cursor-pointer rounded-full object-top' />
                <img src={userImg} alt="" className='cursor-pointer' />
            </div>
        </div>
    )
}

export default SideIcons