import React from 'react'
import { InputBox } from './../../components/shared/InputBox';
import Btn from '../../components/shared/Btn';
import logo from '../../assets/icons/mdlogo.webp'

const PasswordRecover = () => {
    return (
        <>

            <div className='w-full'>
                <a href="/" className='cursor-pointer'>
                    <img src={logo} alt="no" className='w-60 py-10! px-10!' />
                </a>
            </div>

            <div className='bg-[var(--color-background)] flex flex-col items-center  h-[95vh] w-full'>


                <h1 className='text-center font-semibold'>Password Recovery</h1>


                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                    }}>

                    <div className='flex flex-col gap-4 py-20! items-center'>


                        <InputBox className='bg-[var(--color-bg-light)] px-4! py-3!  rounded-[8px] w-[318px] ' label='Email address' placeholder='Enter your email address' />


                        <Btn title='Continue' className='bg-[var(--color-btn)] px-10! py-3! rounded-[8px] font-semibold w-[318px] flex justify-center items-center shadow-md' />
                    </div>

                    <div className='flex justify-start w-full'>
                        <Btn title='Get Back' className='bg-[var(--color-btn)] px-5! py-3! rounded-[8px] font-semibold  items-center shadow-md' />
                    </div>
                </form>


            </div>
        </>
    )
}

export default PasswordRecover







