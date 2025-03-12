import React from 'react';
import arrow from '../../assets/icons/double-arrow-right.svg';
const Conversation = () => {
    return (
        <div className='bg-[var(--color-bg)] h-screen w-full lg:pt-20 lg:pr-5 lg:pl-25 lg:pb-5 ]'>

            {/*Conversation Main wraper */}
            <div className='conv-main-wraper w-full h-full '>

                {/* conv-left-side 📍 */}
                <div
                    className='conv-left-side w-fit h-full drop-shadow-lg myrounded bg-white border-b-[10px] border-[var(--color-primary)] py-3'>

                    {/* left-part1 */}
                    <div className='left-part1 flex flex-col gap-5 px-4  py-3'>

                        <h4 className='font-semibold font-secondary'>
                            AI health coach
                        </h4>

                        <div className='bg-[var(--color-bg)] broder flex justify-center px-4 py-2 border border-[var(--color-btn)] rounded-[14px] '>
                            <p className='text-[var(--color-btn)] text- font-semibold'>  Ask Question </p>
                        </div>

                    </div>

                    <hr className='text-gray-300 ' />

                    {/* left-part2 */}
                    <div className='left-part2 flex flex-col gap-4 pt-4 px-2'>

                        <div className='flex justify-between items-center '>

                            <div className='flex items-center gap-1'>
                                <span className='text-3xl! text-[var(--color-btn)] font-bold'>MD</span>
                                <h6>History</h6>
                            </div>
                            <div className=' '>
                                <img src={arrow} alt='' />
                            </div>



                        </div>

                        <div className='flex flex-col gap-2 items-center px-2'>
                            <div className='text-xs px-4 py-3 bg-[var(--color-dark-light)] myrounded '>Tell me about services y...</div>
                            <div className='text-xs px-4 py-3 bg-[var(--color-dark-light)] myrounded '>Tell me about services y...</div>
                            <div className='text-xs px-4 py-3 bg-[var(--color-dark-light)] myrounded '>Tell me about services y...</div>



                        </div>

                    </div>

                </div>

                {/* conv-center 📍 */}
                

            </div>

        </div>
    )
}

export default Conversation