import React, { useState } from 'react'
import SideIcons from '../../components/shared/sideIcons'
import Btn from '../../components/shared/Btn'
import { Button, Modal } from 'antd';
// import InputBox from '../../components/shared/InputBox'

const Goal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModalgoal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='bg-[var(--color-bg-white)] w-full h-full py-5 relative z-100 px-5 overflow-y-hidden'>

            <div className='flex flex-col gap-10 relative'>


                <div className="goal-top flex">
                    <h3 className='text-[var(--color-btn)]'>Goals</h3>
                    <SideIcons />
                </div>

                <div className='flex justify-end'>
                    <Btn
                        onClick={showModalgoal}
                        title='+ Add goal'
                        className='text-[var(--color-bg-white)] bg-[var(--color-btn)] px-10 py-2 rounded-[8px]' />
                </div>

            </div>


            <div className="gaols-detail">
                <h4 className='absolute top-[50%] left-[40%] translate-x-[-50%] translate-y-[-50%] text-[var(--color-btn)]'>No goals added yet</h4>
            </div>

            <>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div className='bg-green-300 h-full'>


                        {/* <InputBox label='Goal Title' /> */}

                    </div>
                </Modal>
            </>

        </div>

    )
}

export default Goal