// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Modal, Button, Input } from 'antd';
import '../styles/InventoryPopup.css'

// eslint-disable-next-line react/prop-types
const InventoryPopup = ({modelOpen,closeModal}) => {

    const handleSave = ()=>{
        console.log('Save button clicked!')
        closeModal();
    }
  return (
    <Modal
      title= "Category Name"
      open={modelOpen}
      footer={null} // Remove the default footer
      onCancel={closeModal}
    >
        <div>
            <Input
             placeholder='Catagory Name'
             maxLength={50}
            />
        </div>
           <div style={{ textAlign: 'right' }} className='invetory-popup-btn' >
        <Button onClick={handleSave} type="primary">
          Add
        </Button>
      </div>
    </Modal>
  )
}

export default InventoryPopup