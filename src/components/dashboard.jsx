import React from 'react'
import dashClock from '../assets/icons/dashboard/dash-clock.svg'
import notfication from '../assets/icons/dashboard/notfication.svg'
import userImg from '../assets/icons/dashboard/userImg.svg'
import arrowCircleRight from '../assets/icons/dashboard/arrow-circle-right.svg'
import arrowCircleLeft from '../assets/icons/dashboard/arrow-circle-left.svg'
import threeDotIcon from '../assets/icons/dashboard/three-dot-icon.svg'
import tickGreen from '../assets/icons/dashboard/tick-green.svg'
import statChart from '../assets/icons/dashboard/pie-chart-stat.svg'
import totalGoal from '../assets/icons/dashboard/total-goal.svg'
import goalProgress from '../assets/icons/dashboard/goal-progress.svg'
import goalCompleted from '../assets/icons/dashboard/goal-completed.svg'


const Dashborad = () => {
  return (
    <div className='bg-[var(--color-bg-white)] rounded-t-[8px] rounded-br-[8px]  h-full w-full px-5 py-8 flex flex-col gap-8 relative '>
      {/* dashboard-top */}



      <div className="dashboard-top flex justify-between">
        <h4 className='text-[var(--color-btn)] font-[750] font-secondary'>Dashboard</h4>
        <div className='dash-icons rounded-[30px] shadow-xs flex gap-2 px-4 py-2 items-center justify-between'>
          <div className='clock cursor-pointer'>
            <img src={dashClock} alt="" />
            <span className='text-xs'>Reminder</span>
          </div>
          <img src={notfication} alt="" className=' cursor-pointer ' />
          <img src={userImg} alt="" className='cursor-pointer' />
        </div>
      </div>

      {/* Dash-bottom */}
      <div className="dashboard-bottom flex flex-col gap-y-[26px]">
        <div className="shadow-[#fcc378] shadow-xs  border-[var(--color-primary)] border-b-[10px] p-5 pl-[40px] rounded-[8px] flex flex-col gap-y-[26px]">

          <div className='gaols-section flex flex-col gap-y-6'>

            {/*  */}
            <div className='flex justify-between'>
              <h4 className='text-[var(--color-primary)] font-semibold font-secondary'>
                Today's<span className='text-[var(--color-dark)]'> Goals </span>to Achieve
              </h4>
              <div className='flex items-center gap-1'>
                <p className='text-small font-semibold font-secondary'>Nov (2024)</p>
                <button className=' cursor-pointer'> <img src={arrowCircleLeft} alt="" /></button>
                <button className=' cursor-pointer'> <img src={arrowCircleRight} alt="" /></button>
              </div>
            </div>

            <div className='flex flex-col gap-y-[23px]'>
              {/* days & date */}
              <div className='w-[95%] flex justify-between items-center'>

                <div className='w-fit'>
                  <p>Mon</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>1</p>
                </div>

                <div className='w-fit'>
                  <p>Tue</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>2</p>
                </div>


                <div className='w-fit'>
                  <p>Wed</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>3</p>
                </div>


                <div className='w-fit'>
                  <p>Thu</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>4</p>
                </div>

                <div className='w-fit bg-[var(--color-btn)] rounded-[27px] px-4 py-2 text-white flex flex-col justify-center items-center'>
                  <p>Fri</p>
                  <p className='text-center font-bold text-white'>5</p>
                </div>


                <div className='w-fit'>
                  <p>Sat</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>6</p>
                </div>


                <div className='w-fit'>
                  <p>Sun</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>7</p>
                </div>

                <div className='w-fit'>
                  <p>Mon</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>8</p>
                </div>

                <div className='w-fit'>
                  <p>Tue</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>9</p>
                </div>


                <div className='w-fit'>
                  <p>Wed</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>10</p>
                </div>


                <div className='w-fit'>
                  <p>Thu</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>11</p>
                </div>

                <div className='w-fit'>
                  <p>Fri</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>12</p>
                </div>


                <div className='w-fit'>
                  <p>Sat</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>13</p>
                </div>


                <div className='w-fit'>
                  <p>Sun</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>14</p>
                </div>

                <div className='w-fit'>
                  <p>Mon</p>
                  <p className='text-[var(--color-btn)] text-center font-bold'>15</p>
                </div>


              </div>

              {/* goal completed */}
              <div className=' flex flex-col gap-y-[15px] overflow-y-auto'>

                <div className='goal-complete flex gap-10'>
                  {/* div-1 */}
                  <div className=' flex items-center w-30'>
                    <h6 className=' text-[var(--color-dark-light)] font-semibold '>08:30 Am</h6>
                  </div>
                  {/* div-2 */}
                  <div className='bg-[var(--color-bg)] rounded-[8px] flex flex-col gap-2 w-full p-5 '>
                    <div className='flex justify-between items-center '>
                      <h5 className='font-bold'>Headache Release</h5>
                      <div className='text-2xl font-black rounded-full'>
                        <img src={threeDotIcon} alt="" />
                      </div>
                    </div>

                    <div className='flex justify-between items-center '>
                      <p><span className='text-[var(--color-heading)]'>Duration:</span> 07 days</p>
                      <div className='flex items-center gap-2 bg-[var(--sec-bg)] px-2 py-1 rounded-[8px]'>
                        <img src={tickGreen} alt="goal-completed-icon" />
                        <p className='text-large font-bold text-[var(--text-sec)]'> Goal completed</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className='goal-complete flex gap-10'>
                  {/* div-1 */}
                  <div className=' flex items-center w-30'>
                    <h6 className=' text-[var(--color-dark-light)] font-semibold '>08:30 Am</h6>
                  </div>
                  {/* div-2 */}
                  <div className='bg-[var(--color-bg)] rounded-[8px] flex flex-col gap-2 w-full p-5 '>
                    <div className='flex justify-between items-center '>
                      <h5 className='font-bold'>Headache Release</h5>
                      <div className='text-2xl font-black rounded-full'>
                        <img src={threeDotIcon} alt="" />
                      </div>
                    </div>

                    <div className='flex justify-between items-center '>
                      <p><span className='text-[var(--color-heading)]'>Duration:</span> 07 days</p>

                      <div className='flex items-center gap-2 bg-[var(--sec-bg)] px-2 py-1 rounded-[8px]'>
                        <img src={tickGreen} alt="goal-completed-icon" />
                        <p className='text-large font-bold text-[var(--text-sec)]'> Goal completed</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="statistic-section shadow-[#fcc378] shadow-xs  border-[var(--color-primary)] border-b-[10px] p-5 myrounded justify-between">
          <div className='bottom-left flex flex-col gap-1 '>
            <h4 className='text-[var(--color-btn)] font-semibold font-secondary'>Statistics</h4>
          </div>

          <div className='bottom-right flex gap-10 justify-between w-full xl:pl-[55px] xl:pr-[40px] xl:pb-[50px] overflow-x-auto'>

            {/* sec-1 */}
            <img src={statChart} alt="" />

            {/* sec-2 */}
            <div className='shadow-xs shadow-[#FFC6AF] border-[var(--color-primary)] border-b-[10px]  myrounded flex items-center gap-4 pl-[25px] pr-[43px] py-[70px] '>
              <div>
                <img src={totalGoal} alt="total-goals-image" />
              </div>
              <div>
                <p className='font-secondary'>Total Goals</p>
                <h4 className='font-secondary text-[var(--color-primary)] font-[750]'>10</h4>
              </div>

            </div>

            {/* sec-3 */}
            <div className='shadow-xs shadow-[#FFC6AF] border-[var(--color-primary)] border-b-[10px]  myrounded flex items-center gap-4 pl-[25px] pr-[43px] py-[70px] '>
              <div>
                <img src={goalCompleted} alt="total-goals-image" />
              </div>
              <div>
                <p className='font-secondary'>Goals Completed</p>
                <h4 className='font-secondary text-[var(--color-sec-light)] font-[750]'>07</h4>
              </div>
            </div>


            {/* sec-4 */}
            <div className='shadow-xs shadow-[#FFC6AF] border-[var(--color-primary)] border-b-[10px]  myrounded flex items-center gap-4 pl-[25px] pr-[43px] py-[70px] '>
              <div>
                <img src={goalProgress} alt="total-goals-image" />
              </div>

              <div>
                <p className='font-secondary'>Goals In Progress</p>
                <h4 className='font-secondary  text-[var(--color-heading)] font-[750]'>03</h4>
              </div>




            </div>
          </div>
        </div>


      </div>
    </div>


  )
}

export default Dashborad;