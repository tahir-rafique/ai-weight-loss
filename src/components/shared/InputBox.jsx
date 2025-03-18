import React from 'react'

export const InputBox = ({
    className = '',
    label = '',
    placeholder = '',
    icon,
    passIcon,
    handelClick,
    type,
    style,
    


}) => {
    return (
        <div className='flex flex-col gap-1'>
            <label htmlFor="inpt" className='text-[14px]' >{label}</label>
            <div className={`${className} `}>
                <img src={icon} alt="" />
                <input id='inpt' placeholder={placeholder} className={`w-full`} type={type} style={style}  name={name} />
                <img src={passIcon} alt="" className='cursor-pointer' onClick={handelClick} />
            </div>
        </div>
    )
}