// eslint-disable-next-line no-unused-vars
import React from "react";
import { Modal, Button, Input } from "antd";
import "../styles/AddNewItem.css";

// eslint-disable-next-line react/prop-types
const AddNewItemPurchase = ({ addNewItem, closeAddnewItemPurchase }) => {
  const handleAddnewItemPurchase = () => {
    closeAddnewItemPurchase();
  };

  return (
    
      <Modal
        title="Add New Items"
        open={addNewItem}
        footer={null} // Remove the default footer
        onCancel={closeAddnewItemPurchase}
      >
        <div className="AddNewItemInput">
          <Input placeholder="Category" maxLength={50} />
          <Input placeholder="Item name" maxLength={50} />
          <Input placeholder="Quantity" maxLength={50} />
          <Input placeholder="Barcode" maxLength={50} />
          <Input placeholder="Scode" maxLength={50} />
          <Input placeholder="Purchase Price" maxLength={50} />
          <Input placeholder="Selling Price" maxLength={50} />
          <Input placeholder="Unit" maxLength={50} />
          <Input placeholder="Discount Amount" maxLength={50} />
          <Input placeholder="Vendor Name" maxLength={50} />
        </div>
        <div style={{ textAlign: "right" }} className="invetory-popup-btn">
          <Button onClick={handleAddnewItemPurchase} type="primary">
            Add
          </Button>
        </div>
      </Modal>
    
  );
};

export default AddNewItemPurchase;
