// eslint-disable-next-line no-unused-vars
import React from "react";
import { Modal } from "antd";

// eslint-disable-next-line react/prop-types
const PaymentModePopUP = ({ paymentPopUp, closePaymentPopUp }) => {
  return (
    <Modal
      title="Payment Method"
      open={paymentPopUp}
      footer={null} // Remove the default footer
      onCancel={closePaymentPopUp}
    >
      
        <div style={{margin:"1.5rem"}}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Cash
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Credit
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Bank
            </label>
          </div>
        </div>
      
      {/* <div style={{ textAlign: "right" }} className="invetory-popup-btn">
        <Button onClick={handlePayment} type="primary">
          Add
        </Button>
      </div> */}
    </Modal>
  );
};

export default PaymentModePopUP;
