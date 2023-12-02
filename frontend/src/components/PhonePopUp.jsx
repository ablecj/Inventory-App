// eslint-disable-next-line no-unused-vars
import React from "react";
import { Modal, Button, Input, Form } from "antd";

// eslint-disable-next-line react/prop-types
const PhonePopUp = ({ phonePopUp, closePhonePopUp }) => {
  const handleSavePhone = () => {
    closePhonePopUp();
  };

  return (
    <Modal
      title="Add Phone Number"
      open={phonePopUp}
      footer={null} // Remove the default footer
      onCancel={closePhonePopUp}
    >
      <div style={{margin: "1.5rem"}}>
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item label="Enter Phone No">
            <Input placeholder="Phone.No" maxLength={50} />
          </Form.Item>
        </Form>
      </div>
      <div style={{ textAlign: "right" }} className="invetory-popup-btn">
        <Button onClick={handleSavePhone} type="primary">
          Add
        </Button>
      </div>
    </Modal>
  );
};

export default PhonePopUp;
