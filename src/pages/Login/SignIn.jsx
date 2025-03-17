import React, { useState } from 'react'
import { InputBox } from '../../components/shared/InputBox';
import Btn from '../../components/shared/Btn';
import logo from '../../assets/icons/mdlogo.webp';

import passEyeClose from '../../assets/icons/login/passEyeClose.svg';



import { Link } from 'react-router-dom';

function SignIn() {

  // password show 
  const [show, setShow] = useState(false);
  const handelClickEye = () => {
    setShow(show)
  }

  return (

    <>
      <div className='w-full'>
        <Link to="/" className='cursor-pointer'>
          <img src={logo} alt="no" className='w-60 pt-5 px-10' />
        </Link>
      </div>

      <div className='bg-[var(--color-background)] flex flex-col gap-2 items-center h-full w-full'>

        <h1 className='text-center font-semibold'>Sign in</h1>

        {/* bg-image-tailwind */}
        <div className=' bg-[url(../assets/icons/login/subtract.svg)]  bg-no-repeat  w-full bg-center h-full py-30 pb-50'  >

          <form
            className=''
            action=""
            onSubmit={(e) => { e.preventDefault() }}
          >

            <div className='flex flex-col gap-4  items-center max-w-[320px] mx-auto'>

              <InputBox
                className='bg-[var(--color-bg-light)] px-4 py-3  rounded-[8px] w-[318px] '
                label='Email address'
                placeholder='Enter your email address'
                type='email'
              />

              <InputBox className='bg-[var(--color-bg-light)] px-4 py-3  rounded-[8px] w-[318px] max-w-full flex items-center gap-1'
                label='Password'
                placeholder='Enter your password'
                passIcon={passEyeClose}
                handelClick={handelClickEye}
                typepass={show ? 'text' : 'password'}
              />

              <Btn title='Sign in' className='bg-[var(--color-btn)] px-10 py-3 rounded-[8px] font-semibold w-[318px] flex justify-center items-center drop-shadow-lg' />

              <div className='flex justify-between gap-5 w-full'>
                <Link to="recover-password">  <p className='text-xs'>Forgot your password?</p></Link>

                <Link to="sign-up"> <p className='text-xs text-[var(--color-heading)] underline'>Sign up</p> </Link>
              </div>

            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default SignIn
