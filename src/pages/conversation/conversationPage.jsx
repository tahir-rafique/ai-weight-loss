import React, { useState } from 'react';
import { Modal } from 'antd';
import { InputBox } from '../../components/shared/InputBox';
import sandclock from '../../assets/icons/conversation/sand-clock.svg'
import searchicon from '../../assets/icons/conversation/search-icon.webp'
import clock from '../../assets/icons/conversation/clock.webp'
import dotsicon from '../../assets/icons/conversation/dots-icon.webp'
import mdicon from '../../assets/icons/conversation/md-icon.svg'
import doubleArrowRight from '../../assets/icons/conversation/double-arrow-right.svg'
import lineVectorSidebar from '../../assets/icons/conversation/line-vector-sidebar.svg'
import jackimg from '../../assets/images/conversation/jack-img.svg'
import info from '../../assets/icons/conversation/info.svg'
import arrowup from '../../assets/icons/conversation/arrowup.svg'
import arrowdown from '../../assets/icons/conversation/arrowdown.svg'
import buddyIcon from '../../assets/icons/conversation/buddy.svg'
import plus from '../../assets/icons/conversation/plusicon.svg'
import cross from '../../assets/icons/conversation/crossicon.svg'
import notes from '../../assets/icons/conversation/notesicon.svg'
import community from '../../assets/icons/conversation/communityicon.svg'
import forwardMessage from '../../assets/icons/conversation/forward.svg'
import arrowcircleup from '../../assets/icons/conversation/arrowcircleup.svg'
import { useNavigate } from 'react-router-dom';

const ConversationPage = () => {

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // back btn
    const navigate = useNavigate()

    return (
        <div className='bg-[var(--color-bg)] h-full w-full lg:pt-20 lg:pr-5 lg:pl-25 lg:pb-5'>

            {/* back button */}
            <button 
            onClick={()=>{navigate('/dashboard-page')}}
            className='fixed top-10 left-10 cursor-pointer'>
                <img src={arrowcircleup} alt="" />
            </button>

            {/*Conversation Main wraper */}
            <div className='conv-main-wraper w-full h-full flex gap-5 justify-between'>

                {/* conv-left-side 📍 */}
                <div
                    className='conv-left-side min-w-[230px] h-full drop-shadow-lg myrounded bg-[var(--color-bg-white)] border-b-[10px] border-[var(--color-primary)] py-3'>

                    {/* left-part1 */}
                    <div className='left-part1 flex flex-col gap-5 px-4  py-3'>
                        <h4 className='font-semibold font-secondary text-center'>
                            AI health coach
                        </h4>

                        {/* onClick open modal */}
                        <div onClick={showModal}
                            className='bg-[var(--color-bg)] broder flex justify-center px-4 py-2 border border-[var(--color-btn)] rounded-[14px] cursor-pointer'>
                            <p className='text-[var(--color-btn)] text- font-semibold cursor-pointer'>  Ask Question
                            </p>
                        </div>

                    </div>

                    <hr className='text-[var(--color-dark-light)]' />

                    {/* left-part2 */}
                    <div className='left-part2 flex flex-col gap-4 pt-4 px-4 relative'>
                        <div className='flex justify-between items-center  '>

                            <div className='flex items-center gap-1'>
                                <img src={mdicon} alt="" />
                                <h6>History</h6>
                            </div>
                            <div className=' '>
                                <img src={doubleArrowRight} alt='' />
                            </div>

                        </div>

                        <div className='flex flex-col gap-2 items-center px-2 '>
                            <div className='text-xs px-4 py-3 bg-[var(--color-dim)]  myrounded w-full '>Tell me about services y...</div>
                            <div className='text-xs px-4 py-3 bg-[var(--color-dim)] myrounded w-full'>Tell me about services y...</div>
                            <div className='text-xs px-4 py-3 bg-[var(--color-dim)]  myrounded w-full'>Tell me about services y...</div>
                        </div>


                        <img src={lineVectorSidebar} alt="no" className='absolute top-14 h-34 left-2' />

                    </div>

                </div>

                {/* conv-center 📍 */}
                <div
                    className="conv-center pt-5  w-full h-full drop-shadow-lg myrounded bg-[var(--color-bg-white)] border-b-[10px] border-[var(--color-primary)] px-6 flex flex-col gap-10 justify-between pb-10 relative z-100 ">

                    {/* center-top */}
                    <div className='center-top flex flex-col gap-8'>

                        <div className='flex flex-col items-center gap-1'>
                            <img src={jackimg} alt="jack" className='size-20' />
                            <h6>Jack</h6>
                            <p className='text-small text-[var(--color-dark-light)]'>Health Coach</p>
                        </div>

                        <div className='flex gap-4 '>

                            <div className=''>
                                <img src={jackimg} alt="jack" className='size-14' />
                            </div>

                            <div className='bg-[var(--color-bg)] px-4 py-3 rounded-[14px] w-full flex flex-col gap-3' >
                                <p className='text-small'>Hello! I am your AI Health Coach. Please choose one persona either Suzy or Jack. Once you select your persona then it can’t be changed.
                                </p>
                                <div className='flex gap-1'>
                                    <button className='bg-[var(--color-btn)] px-3 py-1 rounded-[500px]'>Suzy</button>
                                    <button className='bg-[var(--color-btn)] px-3 py-1 rounded-[500px]'>Jack</button>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* middel */}
                    <img src={mdicon} alt="no image" className='h-full absolute left-[50%] translate-[-50%]  top-[50%] opacity-20 max-[1600px]:size-60  size-80  -z-100' />



                    {/* center-bottom */}
                    <div className='center-bottom ' >
                        <div className="inp-wraper flex items-center py-3 px-4 myrounded 
                        shadow-[1px_1px_10px_1px_rgba(10,10,10,0.1)] ">
                            <input type="text" placeholder='Type a message' className='w-full placeholder-[var(--color-dark-light)] ' />
                            <img src={forwardMessage} alt="no" className='cursor-pointer' />
                        </div>

                    </div>
                </div>

                {/* conv-right-side 📍 */}
                <div
                    className='conv-right-side min-w-[330px] h-full  drop-shadow-lg myrounded bg-[var(--color-bg-white)] border-b-[10px] border-[var(--color-primary)] '>

                    {/* left-part1 */}
                    <div className='left-part1 flex justify-between items-center gap-5  p-6'>
                        <h4 className='font-secondary'>
                            Memorizing
                        </h4>
                        <img src={info} alt="info" />
                    </div>
                    <hr className='text-[var(--color-dark-light)]' />

                    {/* left-part2 */}
                    <div className='left-part2 px-6 py-2 flex flex-col  gap-4 pt-4'>


                        {/* Accounts */}
                        <div className='accounts flex flex-col gap-4'>
                            <div className='flex justify-between gap-3'>

                                <div className='flex items-center gap-3'>
                                    <img src={arrowup} alt="" />

                                    <img src={buddyIcon} alt="buddyIcon" />
                                    <p className='font-bold text-small'>Accountability Buddy</p>
                                </div>

                                <div className='flex items-center gap-2 bg-[var(--color-btn)] px-2 py-1 myrounded'>
                                    <button className='text-xs'>Add</button>
                                    <img src={plus} alt="" />
                                </div>
                            </div>
                            {/* acc details */}
                            <div className='p-4 myrounded border-2 border-[var(--color-border)] flex flex-col gap-1'>
                                <div className='flex gap-2'> <p className='text-xs '> Name:</p> <p className='text-small font-bold'> Joseph</p>  </div>
                                <div className='flex gap-2'> <p className='text-xs '>  Phone no:</p> <p className='text-small font-bold'> +123456789</p>  </div>
                                <div className='flex gap-2'> <p className='text-xs '> Email:</p> <p className='text-small font-bold'>  @gmail.com </p>  </div>
                            </div>
                        </div>

                        <hr className='text-[var(--color-dark-light)] my-2' />


                        {/* Community */}
                        <div className='community flex flex-col gap-4'>
                            <div className='flex items-center gap-3'>

                                <img src={arrowup} alt="" />


                                <img src={community} alt="community" />
                                <p className='font-bold text-small'>Community</p>
                            </div>

                            <div className='flex justify-between gap-2 items-center bg-[var(--color-bg)] px-4 py-2 rounded-[4px]'>
                                <p className='text-xs'>   Choose a Community   </p>
                                <img src={arrowdown} alt="" />
                            </div>
                        </div>


                        <hr className='text-[var(--color-dark-light)] my-2' />
                        {/* Notes */}
                        <div className='notes flex flex-col gap-4'>
                            <div className='flex justify-between gap-3'>
                                <div className='flex items-center gap-3'>
                                    <img src={arrowup} alt="" />
                                    <img src={notes} alt="notes" />

                                    <p className='font-bold text-small'>Notes</p>
                                </div>

                                <div className='flex items-center gap-2 bg-[var(--color-btn)] px-2 py-1 myrounded'>
                                    <button className='text-xs'>Add</button>
                                    <img src={plus} alt="" />
                                </div>
                            </div>
                            <div className='bg-[var(--color-bg)] rounded-[4px]'>
                                <input type="text" placeholder='Type here' className='placeholder-[var(--color-dark-light)] w-full px-2 text-xs  py-2' />
                            </div>

                            <div>
                                <p className='text-xs'>Press <span className='bg-[var(--color-bg)] rounded-md px-1 text-[var(--color-btn)]'>Enter</span>to add note</p>
                            </div>

                            <div className='bg-[var(--color-bg)] rounded-[4px] flex items-center gap-1 px-2'>
                                <input type="text" placeholder='Lorem ipsum dolor sit amet consectetur' disabled className='placeholder-black w-full text-xs py-2' />
                                <img src={cross} alt="" className='h-6' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className='shadow-md'>
                <Modal className='conversation-modal' title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div className='conv-modal-wraper '>

                        {/* top */}
                        <div className="conv-modal-top flex items-center justify-between px-4">
                            <div className="part1 flex gap-2 items-center">
                                <img src={sandclock} alt="" />
                                <h3>History</h3>
                            </div>

                            <div className="part2">
                                <div className="input-wraper bg-[var(--color-bg)] rounded-[4px] pl-2  py-1">
                                    <InputBox placeholder='Search thread' icon={searchicon} className='flex items-center gap-3 w-full' />
                                </div>
                            </div>
                        </div>

                        <hr className='my-2  text-[var(--color-dark-light)] ' />

                        {/* bottom */}
                        <div className="conv-modal-bottom px-4 py-5 ">
                            <div className='inner-content  overflow-y-auto h-[400px]  px-2 flex flex-col gap-4'>

                                <div className='bg-[var(--color-border)] p-4 rounded-[12px] flex gap-4 flex-col'>

                                    <div className='flex flex-col gap-2'>

                                        <p className='font-bold'>Tell me about services you provide</p>
                                        <p className='text-small text-[var(--text-light)]'>Hello! I am your AI Health Coach. Please choose one persona either Suzy or Jack. Once you select your persona then it can’t be changed.</p>

                                    </div>

                                    <div className='flex items-center justify-between gap-2'>

                                        <div className='flex items-center gap-2'>
                                            <img src={clock} alt="no" />
                                            <p className='text-xs text-[var(--text-light)]'>Just now</p>
                                        </div>

                                        <div>
                                            <img src={dotsicon} alt="" />
                                        </div>

                                    </div>
                                </div>

                                <div className='bg-[var(--color-border)] p-4 rounded-[12px] flex gap-4 flex-col'>

                                    <div className='flex flex-col gap-2'>

                                        <p className='font-bold'>Tell me about services you provide</p>
                                        <p className='text-small text-[var(--text-light)]'>Hello! I am your AI Health Coach. Please choose one persona either Suzy or Jack. Once you select your persona then it can’t be changed.</p>

                                    </div>

                                    <div className='flex items-center justify-between gap-2'>

                                        <div className='flex items-center gap-2'>
                                            <img src={clock} alt="no" />
                                            <p className='text-xs text-[var(--text-light)]'>Just now</p>
                                        </div>

                                        <div>
                                            <img src={dotsicon} alt="" />
                                        </div>

                                    </div>
                                </div>


                                <div className='bg-[var(--color-border)] p-4 rounded-[12px] flex gap-4 flex-col'>
                                    <div className='flex flex-col gap-2'>

                                        <p className='font-bold'>Tell me about services you provide</p>
                                        <p className='text-small text-[var(--text-light)]'>Hello! I am your AI Health Coach. Please choose one persona either Suzy or Jack. Once you select your persona then it can’t be changed.</p>

                                    </div>

                                    <div className='flex items-center justify-between gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <img src={clock} alt="no" />
                                            <p className='text-xs text-[var(--text-light)]'>Just now</p>
                                        </div>

                                        <div>
                                            <img src={dotsicon} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[var(--color-border)] p-4 rounded-[12px] flex gap-4 flex-col'>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-bold'>Tell me about services you provide</p>
                                        <p className='text-small text-[var(--text-light)]'>Hello! I am your AI Health Coach. Please choose one persona either Suzy or Jack. Once you select your persona then it can’t be changed.</p>
                                    </div>

                                    <div className='flex items-center justify-between gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <img src={clock} alt="no" />
                                            <p className='text-xs text-[var(--text-light)]'>Just now</p>
                                        </div>
                                        <div>
                                            <img src={dotsicon} alt="" />
                                        </div>
                                    </div>
                                </div>


                                <div className='bg-[var(--color-border)] p-4 rounded-[12px] flex gap-4 flex-col'>
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-bold'>Tell me about services you provide</p>
                                        <p className='text-small text-[var(--text-light)]'>Hello! I am your AI Health Coach. Please choose one persona either Suzy or Jack. Once you select your persona then it can’t be changed.</p>
                                    </div>

                                    <div className='flex items-center justify-between gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <img src={clock} alt="no" />
                                            <p className='text-xs text-[var(--text-light)]'>Just now</p>
                                        </div>
                                        <div>
                                            <img src={dotsicon} alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </Modal>
            </div>

        </div>
    )
}

export default ConversationPage;