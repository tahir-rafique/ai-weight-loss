import React from 'react'
import { useNavigate } from 'react-router-dom';
import arrowcircleup from '../../assets/icons/conversation/arrowcircleup.svg'
import comimg1 from '../../assets/images/community/healthcare.webp'
import forwardMessage from '../../assets/icons/conversation/forward.svg'

import chatVector from '../../assets/images/community/chatvector.webp'
import user1img from '../../assets/images/conversation/jack-img.svg'
import user2img from '../../assets/images/community/user2img.webp'

import memb1 from '../../assets/images/community/member1.webp'
import memb2 from '../../assets/images/community/member2.webp'
import memb3 from '../../assets/images/community/member3.webp'

const CommunityChat = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-[var(--color-bg)] h-full w-full pt-20 pr-5 pl-25 pb-5'>

            {/* back button */}
            <button
                onClick={() => { navigate('/community-page') }}
                className='fixed top-10 left-10 cursor-pointer'>
                <img src={arrowcircleup} alt="" />
            </button>

            {/* Main wraper */}
            <div className='community-chat-wraper w-full h-full flex gap-5 justify-between'>

                {/* left-side 📍 */}
                <div className='conv-left-side w-full h-full drop-shadow-lg myrounded bg-[var(--color-bg-white)] border-b-[10px] border-[var(--color-primary)] '>

                    <div className="left-top p-[24px] flex items-center gap-2">
                        <img src={comimg1} alt="" />
                        <h4>Healthcare</h4>
                    </div>

                    <hr className='text-[var(--color-dark-light)]' />

                    <div className="left-bottom p-[24px] flex flex-col gap-10 justify-between  ">
                        <div className="chat-view relative z-[1000px] h-150 flex flex-col gap-y-[26px]">

                            <img src={chatVector} alt="no" className=' absolute -z-1 opacity-[10%] top-[4%] translate-x-[-50%] left-[50%]  ' />

                            {/* user - 1 */}
                            <div className="chat-user1 flex items-center gap-4">
                                <img src={user1img} alt="" className='h-9' />
                                <p className='bg-[var(--color-bg)] px-[16px] py-[10px] rounded-[8px] text-small'>Did you achieve your daily goal today?</p>
                            </div>


                            {/* user - 2 */}
                            <div className="chat-user2 flex  flex-row-reverse items-center gap-4">
                                <img src={user2img} alt="" className='h-10' />
                                <p className='bg-[var(--color-primary)] px-[16px] py-[10px] rounded-[8px] text-small'>How are you?</p>
                            </div>


                            {/* user - 1 */}
                            <div className="chat-user1 flex  gap-4">
                                <img src={user1img} alt="" className='h-9' />
                                <div className='flex flex-col gap-2'>
                                    <p className='bg-[var(--color-bg)] px-[16px] py-[10px] rounded-[8px] text-small'>Wow, great! Did you want to share your achievement with your friends and family on your social media account?</p>
                                    <p className='bg-[var(--color-bg)] px-[16px] py-[10px] rounded-[8px] text-small w-fit'>I'll be there in 2 mins ⏰</p>
                                </div>
                            </div>


                            {/* user - 2 */}
                            <div className="chat-user2 flex  flex-row-reverse items-center gap-4">
                                <img src={user2img} alt="" className='h-10' />
                                <p className='bg-[var(--color-primary)] px-[16px] py-[10px] rounded-[8px] text-small'>Woohoooo</p>
                            </div>

                        </div>

                        <div className="chat-box">
                            <div className='center-bottom ' >
                                <div className="inpt-wraper flex items-center py-3 px-4 myrounded 
                                                    shadow-[1px_1px_10px_1px_rgba(10,10,10,0.1)] ">
                                    <input type="text" placeholder='Type a message' className='w-full placeholder-[var(--color-dark-light)] ' />
                                    <img src={forwardMessage} alt="no" className='cursor-pointer' />
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
                {/* right-side 📍 */}
                <div className='conv-left-side w-[20vw] h-full drop-shadow-lg myrounded bg-[var(--color-bg-white)] border-b-[10px] border-[var(--color-primary)] '>

                    <div className="right-top p-[24px]" >
                        <div className='flex gap-2 items-center bg-[var(--color-bg)] w-fit px-2 pr-4 py-1 rounded-full'>
                            <div className=' relative'>
                                <img src={memb1} alt="" />
                                <img src={memb2} alt="" className=' absolute left-4 top-0' />
                                <img src={memb3} alt="" className=' absolute left-8 top-0' />
                            </div>
                            <div className='ml-8'>
                                <p className='text-small text-[var(--color-dark-light)]'>3.21k </p>
                            </div>
                        </div>

                    </div>
                    <hr className='text-[var(--color-dark-light)]' />
                    <div className="right-bottom">


                        {/* {activeMember} */}



                    </div>


                </div>



            </div>


        </div>
    )
}

export default CommunityChat