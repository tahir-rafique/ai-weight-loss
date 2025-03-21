import React from 'react'
import { InputBox } from '../../components/shared/InputBox';
import Btn from '../../components/shared/Btn';
import logo from '../../assets/icons/mdlogo.webp'
import { Link, useNavigate } from 'react-router-dom';

const VerifyCode = () => {


    const navigate = useNavigate()

    return (
        <div className='bg-[var(--color-background)]  p-5'>

            <div className='w-full'>
                <Link to="/" className='cursor-pointer'>
                    <img src={logo} alt="no" className='w-60 pt-5 px-10' />
                </Link>
            </div>

            <div className=' flex flex-col gap-2 items-center  h-full w-full'>

                <h1 className='text-center font-semibold'>Verify Code</h1>

                <div className='bg-[url(../assets/icons/login/subtract.svg)]  bg-no-repeat  w-full bg-center h-full py-30 pb-50 relative'  >
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                        }}>

                        <div className='flex flex-col gap-4 py-15 items-center'>

                            <InputBox
                                className='bg-[var(--color-bg)] px-4 py-3  rounded-[8px] w-[318px] ' label='Verification Code'
                                placeholder='Enter your Varification Code'
                                type='number'
                            />


                            <Btn title='Continue'
                                onClick={() => { navigate('/new-password') }}
                                className='bg-[var(--color-btn)] px-10 py-3 rounded-[8px] font-semibold w-[318px] flex justify-center items-center drop-shadow-lg' />
                        </div>

                    </form>

                    {/* button */}
                    <div className='absolute bottom-12
                    max-lg:left-[12%] 
                    max-xl:left-[18%]
                    max-2xl:left-[30%]
                    max-[2000px]:left-[29vw] 
                    min-[2000px]:left-[33vw]  '
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

export default VerifyCode;







