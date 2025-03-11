import React from 'react'

export const InputBox = ({
    className = '',
    label = '',
    placeholder='',

}) => {
    return (
        <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='text-[14px]!' >{label}</label>
            <div className={`${className} `}>
                <input type="email" id='email' placeholder={placeholder} className='w-full' />
            </div>
        </div>
    )
}