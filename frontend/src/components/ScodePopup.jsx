// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Modal, Button, Input } from 'antd';

// eslint-disable-next-line react/prop-types
const ScodePopup = ({scodeOpen,closeScode}) => {

    const handleSaveScode = ()=>{
        console.log("Scode clicked !")
        closeScode();
    }

  return (
    <Modal
    title= "Scode"
    open={scodeOpen}
    footer={null} // Remove the default footer
    onCancel={closeScode}
  >
      <div>
          <Input
           placeholder='Scode'
           maxLength={50}
          />
      </div>
         <div style={{ textAlign: 'right' }} className='invetory-popup-btn' >
      <Button onClick={handleSaveScode} type="primary">
        Add
      </Button>
    </div>
  </Modal>
  )
}

export default ScodePopup