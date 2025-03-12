import React from 'react';
import arrow from '../../assets/icons/double-arrow-right.svg';
import { IoPersonSharp } from "react-icons/io5";
import { RiShareForwardFill } from "react-icons/ri";
import { FiInfo } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import { RxCross2 } from "react-icons/rx";

const Conversation = () => {
    return (
        <div className='bg-[var(--color-bg)] h-screen w-full lg:pt-20 lg:pr-5 lg:pl-25 lg:pb-5 '>

            {/*Conversation Main wraper */}
            <div className='conv-main-wraper w-full h-full flex gap-5 justify-between'>

                {/* conv-left-side 📍 */}
                <div
                    className='conv-left-side min-w-[210px] h-full drop-shadow-lg myrounded bg-[var(--color-bg-white)] border-b-[10px] border-[var(--color-primary)] py-3'>

                    {/* left-part1 */}
                    <div className='left-part1 flex flex-col gap-5 px-4  py-3'>

                        <h4 className='font-semibold font-secondary'>
                            AI health coach
                        </h4>

                        <div className='bg-[var(--color-bg)] broder flex justify-center px-4 py-2 border border-[var(--color-btn)] rounded-[14px] '>
                            <p className='text-[var(--color-btn)] text- font-semibold'>  Ask Question </p>
                        </div>

                    </div>

                    <hr className='text-[var(--color-border)]' />

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

                        <div className='flex flex-col gap-2 items-center px-2 '>
                            <div className='text-xs px-4 py-3 bg-[var(--color-dim)]  myrounded w-full '>Tell me about services y...</div>
                            <div className='text-xs px-4 py-3 bg-[var(--color-dim)] myrounded w-full'>Tell me about services y...</div>
                            <div className='text-xs px-4 py-3 bg-[var(--color-dim)]  myrounded w-full'>Tell me about services y...</div>
                        </div>

                    </div>

                </div>

                {/* conv-center 📍 */}
                <div className="conv-center pt-5 max-w-fit; w-full h-full drop-shadow-lg myrounded bg-[var(--color-bg-white)] border-b-[10px] border-[var(--color-primary)] px-6 flex flex-col  justify-between pb-10">
                    {/* conv-top */}
                    <div className='conv-top flex flex-col gap-8'>

                        <div className='flex flex-col items-center gap-2'>

                            <IoPersonSharp className='text-7xl' />
                            <h6>Jack</h6>
                            <p className='text-small text-[var(--color-dark-light)]'>Health Coach</p>

                        </div>

                        <div className='flex gap-4 '>

                            <div className=''>
                                <IoPersonSharp className='text-5xl ' />
                            </div>

                            <div className='bg-[var(--color-bg)] px-4 py-2 myrounded w-full flex flex-col gap-3' >
                                <p className='text-small'>Hello! I am your AI Health Coach. Please choose one persona either Suzy or Jack. Once you select your persona then it can’t be changed.
                                </p>
                                <div className='flex gap-2'>
                                    <button className='bg-[var(--color-btn)] px-3 py-1 rounded-[500px]'>Suzy</button>
                                    <button className='bg-[var(--color-btn)] px-3 py-1 rounded-[500px]'>Jack</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* conv-bottom */}
                    <div className='conv-bottom ' >
                        <div className="inp-wraper flex items-center py-1 px-4 myrounded 
                        shadow-[1px_1px_10px_1px_rgba(10,10,10,0.1)]">
                            <input type="text" placeholder='Type a message' className='w-full placeholder-[var(--color-dark-light)]' />
                            <RiShareForwardFill size={34} className='text-[var(--color-btn)]' />
                        </div>

                    </div>

                </div>

                {/* conv-right-side 📍 */}
                <div
                    className='conv-right-side min-w-[330px] h-full drop-shadow-lg myrounded bg-[var(--color-bg-white)] border-b-[10px] border-[var(--color-primary)] '>

                    {/* left-part1 */}
                    <div className='left-part1 flex justify-between items-center gap-5  p-6'>
                        <h4 className='font-secondary'>
                            Memorizing
                        </h4>
                        <FiInfo size={24} className='text-[var(--color-btn)]' />
                    </div>

                    <hr className='text-[var(--color-border)] my-2' />

                    {/* left-part2 */}
                    <div className='left-part2 px-6 py-2 flex flex-col  gap-4'>


                        {/* Accounts */}
                        <div className='accounts flex flex-col gap-4'>
                            <div className='flex justify-between gap-3'>

                                <div className='flex items-center gap-3'>
                                    <IoIosArrowUp className='text-[var(--color-btn)] size-5' />
                                    <FaPersonBreastfeeding />
                                    <p className='font-bold text-small'>Accountability Buddy</p>
                                </div>

                                <div className='flex items-center gap-2 bg-[var(--color-btn)] px-2 py-1 myrounded'>
                                    <button className='text-xs'>Add</button>
                                    <FaPlus className='text-white' />
                                </div>
                            </div>

                            <div className='p-4 myrounded border border-[var(--color-border)] flex flex-col gap-1'>
                                <div className='flex gap-2'> <p className='text-xs '> Name:</p> <p className='text-small font-bold'> Joseph</p>  </div>
                                <div className='flex gap-2'> <p className='text-xs '>  Phone no:</p> <p className='text-small font-bold'> +123456789</p>  </div>
                                <div className='flex gap-2'> <p className='text-xs '> Email:</p> <p className='text-small font-bold'>  @gmail.com </p>  </div>
                            </div>
                        </div>

                        <hr className='text-[var(--color-border)] my-2' />

                        {/* Community */}
                        <div className='community flex flex-col gap-4'>
                            <div className='flex items-center gap-3'>
                                <IoIosArrowUp className='text-[var(--color-btn)] size-5' />
                                <FaPersonBreastfeeding />
                                <p className='font-bold text-small'>Community</p>
                            </div>

                            <div className='flex justify-between gap-2 items-center bg-[var(--color-bg)] px-4 py-2 rounded-[4px]'>
                                <p className='text-xs'>   Choose a Community   </p>
                                <IoIosArrowUp className='size-5 rotate-180' />
                                

                            </div>
                        </div>


                        <hr className='text-[var(--color-border)] my-2' />

                        {/* Notes */}
                        <div className='notes flex flex-col gap-4'>
                            <div className='flex justify-between gap-3'>

                                <div className='flex items-center gap-3'>
                                    <IoIosArrowUp className='text-[var(--color-btn)] size-5' />
                                    <FaPersonBreastfeeding />
                                    <p className='font-bold text-small'>Notes</p>
                                </div>

                                <div className='flex items-center gap-2 bg-[var(--color-btn)] px-2 py-1 myrounded'>
                                    <button className='text-xs'>Add</button>
                                    <FaPlus className='text-white' />
                                </div>
                            </div>

                            <div className='bg-[var(--color-bg)] py-1.5 rounded-[4px]'>
                                <input type="text" placeholder='Type here' className='placeholder-[var(--color-dark-light)] w-full px-2 text-xs' />
                            </div>
                            <div>
                                <p className='text-xs'>Press <span className='bg-[var(--color-bg)] rounded-md px-1 text-[var(--color-btn)]'>Enter</span>to add note</p>
                            </div>

                            <div className='bg-[var(--color-bg)] py-1.5 rounded-[4px] flex items-center gap-1 px-2'>
                                <input type="text" placeholder='Lorem ipsum dolor sit amet consectetur' disabled className='placeholder-black w-full px-2 text-xs' />
                                <RxCross2 className='text-[var(--color-btn)]' size={20}/>
                            </div>


                        </div>



                    </div>

                </div>

            </div>

        </div>
    )
}

export default Conversation