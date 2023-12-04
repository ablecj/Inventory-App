// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Modal, Button, Input } from 'antd';


// eslint-disable-next-line react/prop-types
const ScodePurchasePopUp = ({scodePurchase,closeScodePurchase}) => {

    // handle search scode function definitions
    const handleSearchScode =()=>{
        closeScodePurchase();
    } 


  return (
    <Modal
    title= "Scode"
    open={scodePurchase}
    footer={null} // Remove the default footer
    onCancel={closeScodePurchase}
  >
      <div>
          <Input
           placeholder='Scode'
           maxLength={50}
          />
      </div>
         <div style={{ textAlign: 'right' }} className='invetory-popup-btn' >
      <Button onClick={handleSearchScode} type="primary">
        Search
      </Button>
    </div>
  </Modal>
  )
}

export default ScodePurchasePopUp