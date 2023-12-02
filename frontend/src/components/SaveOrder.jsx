// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Modal } from 'antd';


// eslint-disable-next-line react/prop-types
const SaveOrder = ({saveOrderPopUp,closeSaveOrder}) => {


    
    const handleSaveOrder = ()=>{
        console.log('Save button clicked!')
        closeSaveOrder();
  }

  return (
    <Modal  open={saveOrderPopUp} onOk={handleSaveOrder} onCancel={handleSaveOrder}>
    <p>Are you sure want to save order</p>
  </Modal>
  )
}

export default SaveOrder