import React from 'react'
import { GoStopwatch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import piechart from '../../assets/icons/piechart.svg'
import { TbSettingsCode } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";

const Dashborad = () => {
  return (
    <div className='bg-[var(--color-bg)] relative z-100 rounded-[8px] px-5 py-4 '>

      {/* dashboard-top */}

      <div className="dashboard-top flex justify-between pb-5">
        <h4 className='text-[var(--color-btn)] font-bold'>Dashboard</h4>
        <div className='rounded-[30px] shadow-md flex gap-2 px-4 py-2 items-center justify-center'>
          <GoStopwatch size={30} />
          <IoMdNotificationsOutline size={30} />
          <RxAvatar size={30} />
        </div>
      </div>


      {/* dashboard-main */}
      <div className="dashboard-main flex flex-col gap-4">

        {/* Dash-center */}
        <div className="dashboard-center shadow-md border-[1px] border-[var(--color-primary)] border-b-[10px] px-10 py-2 myrounded">

          <div className='flex justify-between gap-2 '>
            <h4 className='text-[var(--color-btn)] font-semibold'>Today's <span className='text-[var(--color-dark)]'>Goals</span> to Achieve</h4>

            <div className='flex items-center gap-2'>
              <p className='text-xs font-semibold'>Nov (2024)</p>
              <div className='flex gap-2 items-center'>
                <button>--</button>
                <button>--</button>
              </div>
            </div>
          </div>

          {/* date */}
          <div className='w-full flex justify-between pt-4'>
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

            <div className='w-fit pr-12'>
              <p>Mon</p>
              <p className='text-[var(--color-btn)] text-center'>15</p>
            </div>



          </div>

          {/* goal completed */}
          <div className='py-8 flex flex-col gap-4'>
            <div className='w-full flex gap-2'>

              <div className='w-[100px] flex items-center'>
                <h6 className=' text-[var(--color-dark-light)]'>08:30 Am</h6>
              </div>

              <div className='w-[calc(100%-100px)] bg-[var(--color-bg)] rounded-[8px] py-3 px-5 flex flex-col gap-4'>
                <div className='flex justify-between items-top gap-2'>
                  <h5 className='font-bold'>Headache Release</h5>
                  <div className='text-2xl font-black rounded-full'>...</div>

                </div>

                {/* 1 one */}
                <div className='flex justify-between items-center gap-2'>
                  <p><span className='text-[var(--color-heading)]'>Duration:</span> 07 days</p>
                  <div className='flex items-center gap-2 bg-[var(--sec-bg)] px-2 py-1 rounded-[8px]'>
                    <FaRegCheckCircle className='text-[var(--text-sec)]' />
                    <p className='text-large font-bold text-[var(--text-sec)]'> Goal completed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full flex gap-2'>

              <div className='w-[100px] flex items-center'>
                <h6 className=' text-[var(--color-dark-light)]'>08:30 Am</h6>
              </div>

              <div className='w-[calc(100%-100px)] bg-[var(--color-bg)] rounded-[8px] py-3 px-5 flex flex-col gap-4'>
                <div className='flex justify-between items-center gap-2'>
                  <h5 className='font-bold'>Headache Release</h5>
                  <div className='text-2xl font-black rounded-full'>...</div>
                </div>

                {/* 2 div */}
                <div className='flex justify-between items-center gap-2'>
                  <p><span className='text-[var(--color-heading)]'>Duration:</span> 07 days</p>
                  <div className='flex items-center gap-2 bg-[var(--sec-bg)] px-2 py-1 rounded-[8px]'>
                    <FaRegCheckCircle className='text-[var(--text-sec)]' />
                    <p className='text-large font-bold text-[var(--text-sec)]'> Goal completed</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Dash-bottom */}
        <div className="dashboard-bottom shadow-md border-[1px] border-[var(--color-primary)] border-b-[10px] px-10 py-5 myrounded flex items-end gap-4">
          <div className='bottom-left'>
            <h4 className='text-[var(--color-btn)]'>Statistics</h4>
            <img src={piechart} alt="no" className='size-50' />
          </div>

          <div className='bottom-right flex justify-between w-full px-10'>

            <div className='shadow-xs shadow-[#FFC6AF] border-[var(--color-primary)] border-b-[10px] px-10 py-14 myrounded flex items-center gap-4'>
              <div>
                <TbSettingsCode size={80}
                  className='text-[var(--color-primary' />
              </div>

              <div>
                <p className='font-secondary'>Total Goals</p>
                <h4 className='font-secondary-b text-[var(--color-primary)]'>10</h4>
              </div>

            </div>

            <div className='shadow-xs shadow-[#FFC6AF] border-[var(--color-primary)] border-b-[10px] px-10 py-14 myrounded flex items-center gap-4'>
              <div>
                <TbSettingsCode size={80} className='text-[var(--color-uniq)] ' />
              </div>

              <div>
                <p className='font-secondary'> Goals Completed</p>
                <h4 className='font-secondary-b text-[var(--color-uniq)]'>07</h4>
              </div>

            </div>



            <div className='shadow-xs shadow-[#FFC6AF] border-[var(--color-primary)] border-b-[10px] px-10 py-14 myrounded flex items-center gap-4'>
              <div>
                <TbSettingsCode size={80} className='text-[var(--color-heading)] ' />
              </div>

              <div>
                <p className='font-secondary'> Goals In Progress</p>
                <h4 className='font-secondary-b text-[var(--color-heading)]'>03</h4>
              </div>

            </div>



          </div>
        </div>
      </div>
    </div>


  )
}

export default Dashborad