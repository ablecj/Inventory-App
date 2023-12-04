// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Modal, Button, Input } from 'antd';

// eslint-disable-next-line react/prop-types
const PurchaseCategory = ({categoryPopUp,closeCategoryPopUp}) => {
// handle purchase category 
    const handlePurchaseCategory = ()=>{
        closeCategoryPopUp();
    }


  return (
    <Modal
    title= "Create category"
    open={categoryPopUp}
    footer={null} // Remove the default footer
    onCancel={closeCategoryPopUp}
  >
      <div>
          <Input
           placeholder='Category'
           maxLength={50}
          />
      </div>
         <div style={{ textAlign: 'right' }} className='invetory-popup-btn' >
      <Button onClick={handlePurchaseCategory} type="primary">
        Add
      </Button>
    </div>
  </Modal>
  )
}

export default PurchaseCategory