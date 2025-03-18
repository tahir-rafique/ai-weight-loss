import React from 'react'
import { InputBox } from '../../components/shared/InputBox';
import Btn from '../../components/shared/Btn';
import logo from '../../assets/icons/mdlogo.webp'
import { Link, useNavigate } from 'react-router-dom';
import passEyeClose from '../../assets/icons/login/passEyeClose.svg';


const NewPassword = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-[var(--color-background)]  p-5'>
            <div className='w-full'>
                <Link to="/" className='cursor-pointer'>
                    <img src={logo} alt="no" className='w-60 pt-5 px-10' />
                </Link>
            </div>

            <div className='flex flex-col gap-2 items-center  h-full w-full'>

                <h1 className='text-center font-semibold'>Set New Password</h1>

                <div className='bg-[url(../assets/icons/login/subtract.svg)]  bg-no-repeat  w-full bg-center h-full py-18 pb-50 relative'  >
                    <form
                        onSubmit={(e) => { e.preventDefault() }}>

                        <div className='flex flex-col gap-4 py-10 items-center'>

                            <InputBox
                                passIcon={passEyeClose}
                                className='bg-[var(--color-bg)] px-4 py-3  rounded-[8px] w-[318px] flex gap-1 '
                                label='New Password'
                                placeholder='Enter your password'
                            />

                            <InputBox
                                passIcon={passEyeClose}
                                className='bg-[var(--color-bg)] px-4 py-3  rounded-[8px] w-[318px] flex gap-1'
                                label='Confirm New Password'
                                placeholder='Enter your password'
                                type='password'
                            />

                            <Btn
                                title='Continue'
                                className='bg-[var(--color-btn)] px-10 py-3 rounded-[8px] font-semibold w-[318px] flex justify-center items-center shadow-md'
                                onClick={() => {navigate('/dashboard-page')}}
                            />
                        </div>
                    </form>

                    <div className='absolute bottom-10
                        max-lg:left-[12%] 
                        max-xl:left-[18%]
                        max-2xl:left-[30%]
                        max-[2000px]:left-[29vw] 
                        min-[2000px]:left-[33vw]'
                    >
                        <Btn
                            onClick={() => { navigate(-1) }}
                            title='Get Back'
                            className='bg-[var(--color-btn)] w-fit px-8 py-3 rounded-[8px] font-semibold  items-center shadow-md'
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewPassword;







