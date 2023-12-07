// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Modal, Button, Input } from 'antd';

// eslint-disable-next-line react/prop-types
const AddNewVendorPopUp = ({addVendor,closeNewVendor}) => {

    // handle add new vendor function 
    const handleNewVendor = ()=>{
        closeNewVendor();
    }

  return (
    <Modal
    title= "Add New Vendor"
    open={addVendor}
    footer={null} // Remove the default footer
    onCancel={closeNewVendor}
  >
      <div>
          <Input
           placeholder='Name'
           maxLength={50}
          />
          <Input
           placeholder='Place'
           maxLength={50}
          />
          <Input
           placeholder='Address'
           maxLength={50}
          />
          <Input
           placeholder='Pincode'
           maxLength={50}
          />
          <Input
           placeholder='Contact N.o'
           maxLength={50}
          />
          <Input
           placeholder='Phone'
           maxLength={50}
          />
          <Input
           placeholder='Website'
           maxLength={50}
          />
          <Input
           placeholder='Tax details'
           maxLength={50}
          />
          <Input
           placeholder='Old balance'
           maxLength={50}
          />
      </div>
         <div style={{ textAlign: 'right' }} className='invetory-popup-btn' >
      <Button onClick={handleNewVendor} type="primary">
        Add
      </Button>
    </div>
  </Modal>
  )
}

export default AddNewVendorPopUp