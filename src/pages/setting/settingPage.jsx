import React, { useState } from 'react'
import mdlogo from '../../assets/icons/mdlogo.webp'
import { Link } from 'react-router-dom'
import SideBar from '../../components/sideBar'
import SwitchNotfication from './../../components/shared/SwitchNotfication';
import { InputBox } from './../../components/shared/InputBox';
import imgSelectIcon from '../../assets/icons/settings/selecImg.svg'
import Btn from '../../components/shared/Btn'
import passEyeClose from '../../assets/icons/login/passEyeClose.svg';
import SideIcons from '../../components/shared/sideIcons'

const SettingPage = () => {
    const [selectedButton, setSelectedButton] = useState("general")
    const [show, setShow] = useState(false);
    const handelClickEye = () => {
        setShow(!show)
    }
    return (
        <div className='p-5 bg-[var(--color-bg)] h-screen w-screen flex'>

            {/* sidebar */}
            <div className="sidebar overflow-y-auto w-[260px] h-full">

                <Link to='/'>
                    <img src={mdlogo} alt="" className='h-[60px]' />
                </Link>


                <div className=' h-[calc(100%_-_60px)]'>
                    <SideBar />
                </div>

            </div>

            {/* main */}
            <div className="w-[calc(100%_-_260px)] relative ">

                {/* inverted-border */}
                <div className="inverted-radius"></div>

                {/* Setting-page */}
                <div className='setting-wraper bg-[var(--color-bg-white)] h-full w-full p-3 rounded-t-[8px] rounded-br-[8px]'>

                    <div className='setting-main w-full h-full flex flex-col gap-y-5'>

                        <div className="top-right-icons w-full">
                            <SideIcons />
                        </div>


                        <div className='settings-bottom border border-[var(--color-bg)] h-full rounded-[8px] p-[20px] flex flex-col gap-y-[41px]'>

                            {/* navigation-buttons */}
                            <div className='setting-navigation-button w-full'>
                                <div className="w-fit bg-[var(--color-bg)] py-2 px-2 rounded-[8px] flex gap-2">
                                    <button onClick={() => setSelectedButton("general")} className={` px-4 py-2 text-large rounded-[4px] cursor-pointer ${selectedButton === "general" ? " bg-[var(--color-btn)] " : ""}`}>
                                        General Preferences
                                    </button>

                                    <button onClick={() => setSelectedButton("profile-setting")} className={`cursor-pointer px-4 py-2 rounded-[4px] ${selectedButton === "profile-setting" ? "bg-[var(--color-btn)]" : ""}`}>
                                        Profile Settings
                                    </button>

                                    <button onClick={() => setSelectedButton("security-setting")} className={`cursor-pointer px-4 py-2 rounded-[4px] ${selectedButton === "security-setting" ? "bg-[var(--color-btn)]" : ""}`}>
                                        Security Settings
                                    </button>
                                </div>
                            </div>

                            {/* setting-sections */}
                            <div className="setting-sections">
                                {/* general setting */}

                                {selectedButton === 'general' &&
                                    <div className='general-setting flex flex-col gap-y-[42px]'>
                                        <div className='flex flex-col gap-4'>
                                            <h4 className=' capitalize'> <span className='text-[var(--color-heading)]'>Notification</span> Setting</h4>
                                            <div className="nofication-wraper flex justify-between gap-[160px] w-fit items-center rounded-[8px] 
                                            py-2 px-4 border  border-[var(--color-bg)] ">
                                                <p className='text-small'>Email Notifications </p>
                                                <div className=''>
                                                    <SwitchNotfication />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-4'>
                                            <h4 className=' capitalize'> <span className='text-[var(--color-heading)]'>Notification</span> Setting</h4>

                                            <div className="nofication-wraper flex justify-between gap-[160px] w-fit items-center rounded-[8px] 
                                            py-2 px-4 border  border-[var(--color-bg)] ">
                                                <p className='text-small'>Email Notifications </p>
                                                <div className=''>
                                                    <SwitchNotfication />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {/* profile setting */}

                                {selectedButton === 'profile-setting' &&
                                    <div className='profile-setting flex flex-col gap-[30px]'>
                                        <h4 className=' capitalize'> <span className='text-[var(--color-heading)]'>Profile</span> Setting</h4>

                                        <div className=' flex flex-col gap-4 '>

                                            <InputBox
                                                label='Update Profile Settings'
                                                className='upload-img cursor-pointer flex items-center gap-3 bg-[var(--color-bg)] max-w-[400px]  rounded-[8px] py-3 px-4'
                                                type='file'
                                                icon={imgSelectIcon}
                                                style={{ opactiy: 0 }}
                                                name='Upload Profile Image'

                                            />


                                            <InputBox
                                                label='User Name'
                                                className='cursor-pointer flex items-center gap-3 bg-[var(--color-bg)] max-w-[400px] rounded-[8px] py-3 px-4'
                                                type='text'
                                                placeholder='Jenny William'
                                            />


                                            <InputBox
                                                label='Email'
                                                className='cursor-pointer flex items-center gap-3 bg-[var(--color-bg)] max-w-[400px] rounded-[8px] py-3 px-4'
                                                type='email'
                                                placeholder='@gmail.com'
                                            />


                                            <InputBox
                                                label='Phone no'
                                                className='cursor-pointer flex items-center gap-3 bg-[var(--color-bg)] max-w-[400px] rounded-[8px] py-3 px-4'
                                                type='number'
                                                placeholder='+123456798'
                                            />



                                        </div>

                                        <div className='flex gap-4 justify-between max-w-[400px]'>
                                            <Btn title='Cancle' className='text-[var(--color-btn)] border border-[var(--color-btn)] bg-[var(--color-bg-white)] py-3 px-18 rounded-[8px]' />
                                            <Btn title='Save' className='bg-[var(--color-btn)] px-18 py-3 rounded-[8px]' />
                                        </div>

                                    </div>
                                }

                                {/* securtiy setting */}

                                {selectedButton === 'security-setting' &&
                                    <div className='security-setting flex flex-col gap-[30px]'>
                                        <h4 className=' capitalize'> <span className='text-[var(--color-heading)]'>Security</span> Setting</h4>

                                        <div className=' flex flex-col gap-4 '>

                                            <InputBox className='bg-[var(--color-bg)] px-4 py-3 max-w-[400px]  rounded-[8px] flex items-center'
                                                label='Old Password'
                                                placeholder='*********'
                                                passIcon={passEyeClose}
                                                handelClick={handelClickEye}
                                                type={show ? 'text' : 'password'}

                                            />

                                            <InputBox className='bg-[var(--color-bg)] px-4 py-3 max-w-[400px]  rounded-[8px] flex items-center'
                                                label='New Password'
                                                placeholder='*********'
                                                passIcon={passEyeClose}
                                                handelClick={handelClickEye}
                                                type={show ? 'text' : 'password'}

                                            />


                                            <InputBox className='bg-[var(--color-bg)] px-4 py-3 max-w-[400px]  rounded-[8px] flex items-center'
                                                label='Confirm Password'
                                                placeholder='*********'
                                                passIcon={passEyeClose}
                                                handelClick={handelClickEye}
                                                type={show ? 'text' : 'password'}

                                            />
                                        </div>

                                        <div className='flex gap-4 justify-between max-w-[400px]'>
                                            <Btn title='Cancle' className='text-[var(--color-btn)] border border-[var(--color-btn)] bg-[var(--color-bg-white)] py-3 px-18 rounded-[8px]' />
                                            <Btn title='Save' className='bg-[var(--color-btn)] px-18 py-3 rounded-[8px]' />
                                        </div>

                                    </div>
                                }



                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SettingPage