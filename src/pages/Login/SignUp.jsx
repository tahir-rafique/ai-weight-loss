import React, { useState } from 'react'
import { InputBox } from '../../components/shared/InputBox';
import Btn from '../../components/shared/Btn';
import logo from '../../assets/icons/mdlogo.webp'
import passEyeClose from '../../assets/icons/login/passEyeClose.svg';




import { Link } from 'react-router-dom';

function SignUp() {

  const [show, setShow] = useState(false);
  const handelClickEye = () => {
    setShow(!show)
  }
  return (

    <>

      <div className='w-full'>
        <a href="/" className='cursor-pointer'>
          <img src={logo} alt="no" className='w-60 py-10 px-10' />
        </a>
      </div>

      <div className='bg-[var(--color-background)] flex flex-col gap-2 items-center h-full w-full'>

        <h1 className='text-center font-semibold'>Sign up</h1>

        <div className='bg-[url(../assets/icons/login/subtract.svg)]  bg-no-repeat  w-full bg-center h-full py-17 pb-44'>

          <form
            action=""
            onSubmit={(e) => { e.preventDefault() }}
          >
            <div className='flex flex-col gap-4 items-center w-[320px] mx-auto'>

              <InputBox
                className='bg-[var(--color-bg-light)] px-4 py-3  rounded-[8px] w-[318px] '
                label='Email address'
                placeholder='Enter your email address'
                type='email'
              />

              <InputBox className='bg-[var(--color-bg-light)] px-4 py-3  rounded-[8px] w-[318px] max-w-full flex items-center'
                label='Password'
                placeholder='Enter your password'
                passIcon={passEyeClose}
                handelClick={handelClickEye}
                type={show ? 'text' : 'password'}

              />

              <InputBox className='bg-[var(--color-bg-light)] px-4 py-3  rounded-[8px] w-[318px] max-w-full flex items-center'
                label='Confirm Password'
                placeholder='Confirm your password'
                passIcon={passEyeClose}
                handelClick={handelClickEye}
                type={show ? 'text' : 'password'}

              />

              <Btn
                title='Sign up'
                className='bg-[var(--color-btn)] px-10 py-3 rounded-[8px] font-semibold w-[318px] flex justify-center items-center drop-shadow-lg'
              />

              <div className='flex justify-end w-full'>
                <Link to="/"> <p className='text-xs text-[var(--color-heading)] underline'>Sign in</p> </Link>
              </div>

            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default SignUp;
