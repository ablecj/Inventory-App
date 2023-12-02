// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Modal, Button, Input } from 'antd';
import '../styles/CreditCustomerPopup.css';
// eslint-disable-next-line react/prop-types
const NewCreditCustomer = ({popupOpen,closeCreditCustomer}) => {
    
 const handleNewCreditCustomer =()=>{
    console.log("new credit customer closed !");
    closeCreditCustomer();
 }

  return (
    <Modal
    title= "New Credit Customer"
    open={popupOpen}
    footer={null} // Remove the default footer
    onCancel={closeCreditCustomer}
  >
      <div className='credit-customer-input'>
          <Input
           placeholder='Name'
           maxLength={50}
          />
          <Input
           placeholder='Phone'
           maxLength={50}
          />
          <Input
           placeholder='Place'
           maxLength={50}
          />
      </div>
         <div style={{ textAlign: 'right' }} className='invetory-popup-btn' >
      <Button onClick={handleNewCreditCustomer} type="primary">
        Add
      </Button>
    </div>
  </Modal>
  )
}

export default NewCreditCustomer