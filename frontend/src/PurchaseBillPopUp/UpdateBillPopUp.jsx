// eslint-disable-next-line no-unused-vars
import React from "react";
import { Modal } from "antd";

// eslint-disable-next-line react/prop-types
const UpdateBillPopUp = ({ billUpdate, closeBillUpdate }) => {
  // handle update bill function calling
  const handleUpdateBill = () => {
    closeBillUpdate();
  };

  return (
    <Modal
      open={billUpdate}
      onOk={handleUpdateBill}
      onCancel={handleUpdateBill}
    >
      <div>
        <p>Add items to stock</p>
      </div>
    </Modal>
  );
};

export default UpdateBillPopUp;
