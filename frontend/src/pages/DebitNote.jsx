// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Checkbox, InputNumber } from 'antd';
import "../styles/DebitNote.css";

const DebitNote = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    // Add more options as needed
  ];

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  // form actions
  // debit note
  const [debitNoteNo, setDebitNoteNo] = useState("");
  // Date picker
  const [returnDate, setReturnDate] = useState("");

  // Quantity changing useState for later use
  // const [quantity, setQuantity] = useState("");

  // checkbox logic
  const [refundChecked, setRefundChecked] = useState(false);
  const handleRefundCheckbox = () => {
    setRefundChecked(!refundChecked);
  };
  // checkbox logic
  const [exchangeChecked, setExchangeChecked] = useState(false);
  const handleExchangeCheckbox = () => {
    setExchangeChecked(!exchangeChecked);
  };

  // button update logic
  const handleUpdate = () => {
    console.log("Updating data...");
  };

  // item/product name
  const [itemName, setItemName] = useState("");
  const handleSelectItem =(e)=>{
    setItemName(e.target.value)
  }

  // check box. reason for return
  // const [reasonForReturn, setReasonForReturn] = useState("");
  const onChangeReason =(e)=>{
    console.log(`checked = ${e.target.checked}`);
  }

  // Product id
  const [productId, setProductId] = useState("");
  

  return (
    <DefaultLayout>
      <div className="debit-note-container">
        <div className="debit-note-heading">
          <h4>Sales Return Debit Note</h4>
        </div>
        <div className="debit-note-content">
          <div className="Debit-select-dropdown">
            <select onChange={handleSelect} value={selectedOption}>
              <option value="">Select an option</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-content">
            <form>
              <div className="mb-3">
                <label htmlFor="debitNoteNo" className="form-label">
                  Debit Note No
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="debitNoteNo"
                  value={debitNoteNo}
                  onChange={(e) => setDebitNoteNo(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="returnDate" className="form-label">
                  Return Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="returnDate"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
              {/* Item/Product Name */}
              <div className="item-Dropdown">
                <label htmlFor="itemName" className="item-Name">Item/Product Name : </label>
                <select onChange={handleSelectItem} value={itemName}>
                  <option value="">Select an option</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* Reason for Return */}
              <div className="Reason-Return">
                <label>Reason For Return :</label>
                <Checkbox onChange={onChangeReason}>Checkbox</Checkbox>
              </div>
              {/* Product ID */}
              <div className="product-id">
                  <label>Product ID :</label>
                  <input
                  type="text"
                  className="form-control"
                  id="ProductId"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                />
              </div>
              {/* Quantity Details */}
              <div className="Quantity-Details">
                <label>Quantity Returned : </label>
                <InputNumber min={0} max={10} defaultValue={1} />
              </div>

              {/* checkbox for refund and exchange */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="refundCheckbox"
                  checked={refundChecked}
                  onChange={handleRefundCheckbox}
                />
                <label className="form-check-label" htmlFor="refundCheckbox">
                  Refund
                </label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exchangeCheckbox"
                  checked={exchangeChecked}
                  onChange={handleExchangeCheckbox}
                />
                <label className="form-check-label" htmlFor="exchangeCheckbox">
                  Exchange
                </label>
              </div>
              {/* Update Button */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DebitNote;
