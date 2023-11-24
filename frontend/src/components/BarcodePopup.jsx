// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Modal, Button, Input } from 'antd';

// eslint-disable-next-line react/prop-types
const BarcodePopup = ({barcodeOpen,closeBarcode}) => {

    const handleSaveBarcode = ()=>{
        console.log("handle Save Barcode !");
        closeBarcode();
    }

  return (
    <Modal
    title= "Barcode"
    open={barcodeOpen}
    footer={null} // Remove the default footer
    onCancel={closeBarcode}
  >
      <div>
          <Input
           placeholder='Barcode'
           maxLength={50}
          />
      </div>
         <div style={{ textAlign: 'right' }} className='invetory-popup-btn' >
      <Button onClick={handleSaveBarcode} type="primary">
        Add
      </Button>
    </div>
  </Modal>
  )
}

export default BarcodePopup