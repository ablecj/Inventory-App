// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Modal, Button, Input } from 'antd';

// eslint-disable-next-line react/prop-types
const BarCodePopUpManual = ({barCodePopUp,closeBarcodePopUp}) => {
    // search barcode function 
    const handleSearchBarcode = ()=>{
      closeBarcodePopUp();
    }

  return (
    <Modal
    title= "Barcode Manually"
    open={barCodePopUp}
    footer={null} // Remove the default footer
    onCancel={closeBarcodePopUp}
  >
      <div>
          <Input
           placeholder='Barcode'
           maxLength={50}
          />
      </div>
         <div style={{ textAlign: 'right' }} className='invetory-popup-btn' >
      <Button onClick={handleSearchBarcode} type="primary">
        Search
      </Button>
    </div>
  </Modal>
  )
}

export default BarCodePopUpManual