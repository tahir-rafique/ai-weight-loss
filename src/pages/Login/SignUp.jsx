import React from 'react'
import { InputBox } from '../../components/InputBox';
import Btn from '../../components/Btn';
import logo from '../../assets/icons/logo.png'

function SignUp() {
  return (

    <>

      <div className='w-full'>
        <a href="/" className='cursor-pointer'>
          <img src={logo} alt="no" className='w-60 py-10! px-10!' />
        </a>
      </div>

      <div className='bg-[var(--color-background)] flex flex-col items-center  h-[100vh] w-full'>

        <h1 className='text-center font-semibold'>Sign up</h1>

        <form action="" onSubmit={(e) => {
          e.preventDefault()
        }}>

          <div className='flex flex-col gap-4 py-20! items-center '>


            <InputBox className='bg-[var(--color-bg-light)] px-4! py-3!  rounded-[8px] w-[318px] ' label='Email address' placeholder='Enter your email address' />

            <InputBox className='bg-[var(--color-bg-light)] px-4! py-3!  rounded-[8px] w-[318px] max-w-full' label='Password' placeholder='Enter your password' />

            <InputBox className='bg-[var(--color-bg-light)] px-4! py-3!  rounded-[8px] w-[318px] max-w-full' label='Confirm Password' placeholder='Enter your password' />

            <Btn title='Sign in' className='bg-[var(--color-btn)] px-10! py-3! rounded-[8px] font-semibold w-[318px] flex justify-center items-center shadow-md' />



            <div className='flex justify-end w-full gap-5'>

              <a href="/"> <p className='text-xs text-[var(--color-heading)] underline!'>Sign in</p> </a>
            </div>
          </div>
        </form>


      </div>
    </>
  )
}

export default SignUp;
