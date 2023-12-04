// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Modal } from 'antd';

// eslint-disable-next-line react/prop-types
const BillPopUp = ({billPopUp,closeBillPopUp}) => {

    const handleBillPopUp = ()=>{
        closeBillPopUp()
    }

  return (
    <Modal  open={billPopUp} onOk={handleBillPopUp} onCancel={handleBillPopUp}>
    <p>Are you sure want to pay cash bill</p>
  </Modal>
  )
}

export default BillPopUp