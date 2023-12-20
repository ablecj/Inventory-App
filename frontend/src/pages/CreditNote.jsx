// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import "../styles/CreditNote.css";
import { Checkbox, InputNumber } from "antd";

const CreditNote = () => {
  // handle Select function
  const [selectOption, setSelectOption] = useState("");
  const handleSelect = (e) => {
    setSelectOption(e.target.value);
  };
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  //   useState for Credit Note
  const [creditNote, setCreditNote] = useState("");
  //   useState for return Date
  const [returnDates, setReturnDates] = useState("");

  // itemnames
  const [itemNames, setItemNames] = useState("");
  const handleSelectItems = (e) => {
    setItemNames(e.target.value);
  };

  //   check box
  const onChangeReasons = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  // Product id
  const [productIds, setProductIds] = useState("");

  // Check box logic
  const [refundCheckedCredit, setRefundCheckedCredit] = useState("");
  const hanleRefundCheckedCredit = (e) => {
    setRefundCheckedCredit(e.target.checked);
  };
  // Exchage check box logic
  const [exchangeCheckedCredit, setExchangeCheckedCredit] = useState("");
  const handleExchangeCheckboxCredit = (e) => {
    setExchangeCheckedCredit(e.target.checked);
  };

  // store credit
  const [storeCheckedCredit, setStoreCheckedCredit] = useState("");
  const handleStoreCheckboxCredit = (e) => {
    setStoreCheckedCredit(e.target.checked);
  };

  const handleUpdateButton = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <DefaultLayout>
      <div className="credit-note-container">
        <div className="credit-note-heading">
          <h3>Purchase Return Credit Note</h3>
        </div>
        <div className="credit-note-content">
          <div className="Credit-select-dropdown">
            <select onChange={handleSelect} value={selectOption}>
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
                <label htmlFor="cerditNoteNo" className="form-label">
                  Debit Note No
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="creditNoteNo"
                  value={creditNote}
                  onChange={(e) => setCreditNote(e.target.value)}
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
                  value={returnDates}
                  onChange={(e) => setReturnDates(e.target.value)}
                />
              </div>
              {/* Item/Product Name */}
              <div className="items-Dropdown-credit">
                <label htmlFor="itemName" className="item-Name">
                  Item/Product Name :{" "}
                </label>
                <select onChange={handleSelectItems} value={itemNames}>
                  <option value="">Select an option</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* Reason for Return */}
              <div className="Reason-Return-credit">
                <label>Reason For Return :</label>
                <Checkbox onChange={onChangeReasons}>Checkbox</Checkbox>
              </div>
              {/* Product ID */}
              <div className="product-id-credit">
                <label>Product ID :</label>
                <input
                  type="text"
                  className="form-control"
                  id="ProductId"
                  value={productIds}
                  onChange={(e) => setProductIds(e.target.value)}
                />
              </div>
              {/* Quantity Details */}
              <div className="Quantity-Details-credit">
                <label>Quantity Returned : </label>
                <InputNumber min={0} max={10} defaultValue={1} />
              </div>

              {/* checkbox for refund and exchange */}
              <div className="All-checkbox">
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="refundCheckbox"
                    checked={refundCheckedCredit}
                    onChange={hanleRefundCheckedCredit}
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
                    checked={exchangeCheckedCredit}
                    onChange={handleExchangeCheckboxCredit}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="exchangeCheckbox"
                  >
                    Exchange
                  </label>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exchangeCheckbox"
                    checked={storeCheckedCredit}
                    onChange={handleStoreCheckboxCredit}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="exchangeCheckbox"
                  >
                    Store Credit
                  </label>
                </div>
              </div>
              {/* Update Button */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateButton}
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

export default CreditNote;
