
import { Button, Modal } from 'antd';
import { useState } from 'react';
const App = () => {
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
      
    );
};
export default App;