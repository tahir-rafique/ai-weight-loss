import React from 'react'
import { GoStopwatch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Dashborad = () => {
  return (
    <div className=' bg-[var(--color-background)] h-full bg rounded-t-[8px] px-5! py-4!'>

      {/* dashboard-top */}

      <div className="dashboard-top flex justify-between pb-10!">
        <h4 className='text-[var(--color-btn)] font-bold'>Dashboard</h4>
        <div className='rounded-[30px] shadow-md flex gap-2 px-4! py-2! items-center justify-center'>
          <GoStopwatch size={30} />
          <IoMdNotificationsOutline size={30} />
          <RxAvatar size={30} />
        </div>
      </div>


      {/* dashboard-main */}
      <div className="dashboard-main">

        {/* D-center */}
        <div className="dashboard-center">

          <div className='flex justify-between gap-2 '>
            <h4 className='text-[var(--color-btn)] font-semibold'>Today's <span className='text-[var(--color-dark)]'>Goals</span> to Achieve</h4>

            <div className='flex items-center gap-4'>
              <p className='text-xs font-semibold'>Nov (2024)</p>
              <div className='flex gap-2 items-center'>
                <button>--</button>
                <button>--</button>
              </div>
            </div>
          </div>

          {/* date */}
          <div className='w-full flex justify-between pt-8!'>
            <div className='w-fit'>
              <p>Mon</p>
              <p className='text-[var(--color-btn)] text-center'>1</p>
            </div>


            <div className='w-fit'>
              <p>Tue</p>
              <p className='text-[var(--color-btn)] text-center'>2</p>
            </div>

            <div className='w-fit'>
              <p>Wed</p>
              <p className='text-[var(--color-btn)] text-center'>3</p>
            </div>

            <div className='w-fit'>
              <p>Thu</p>
              <p className='text-[var(--color-btn)] text-center'>4</p>
            </div>

            <div className='w-fit'>
              <p>Fri</p>
              <p className='text-[var(--color-btn)] text-center'>5</p>
            </div>


            <div className='w-fit'>
              <p>Sat</p>
              <p className='text-[var(--color-btn)] text-center'>6</p>
            </div>

            <div className='w-fit'>
              <p>Sun</p>
              <p className='text-[var(--color-btn)] text-center'>7</p>
            </div>

            <div className='w-fit'>
              <p>Mon</p>
              <p className='text-[var(--color-btn)] text-center'>8</p>
            </div>


            <div className='w-fit'>
              <p>Tue</p>
              <p className='text-[var(--color-btn)] text-center'>9</p>
            </div>


            <div className='w-fit'>
              <p>Wed</p>
              <p className='text-[var(--color-btn)] text-center'>10</p>
            </div>


            <div className='w-fit'>
              <p>Thu</p>
              <p className='text-[var(--color-btn)] text-center'>11</p>
            </div>


            <div className='w-fit'>
              <p>Fri</p>
              <p className='text-[var(--color-btn)] text-center'>12</p>
            </div>

            <div className='w-fit'>
              <p>Sat</p>
              <p className='text-[var(--color-btn)] text-center'>13</p>
            </div>

            <div className='w-fit'>
              <p>Sun</p>
              <p className='text-[var(--color-btn)] text-center'>14</p>
            </div>

            <div className='w-fit pr-12!'>
              <p>Mon</p>
              <p className='text-[var(--color-btn)] text-center'>15</p>
            </div>



          </div>


        </div>

        {/* D-bottom */}
        <div className='dashboard-bottom'>

        </div>
      </div>
    </div>
  )
}

export default Dashborad