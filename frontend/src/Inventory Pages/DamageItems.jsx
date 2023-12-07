// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import InventoryLayout from "../components/InventoryLayout";
import "../styles/DamageItems.css";
import { Table } from "antd";


const DamageItems = () => {
  const [formData, setFormData] = useState({
    item: "",
    category: "",
    quantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here using 'formData'
    console.log("Form data:", formData);
  };

//   table coplumns
const columns = [
    {
      title: 'Sl. No',
      dataIndex: 'slno',
      key: 'slno',
    },
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'items',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];
//   table datasource
const dataSource = [
    {
      key: '1',
      slno: 1,
      items: 'Item 1',
      category: 'Category A',
      quantity: 5,
    },
    {
      key: '2',
      slno: 2,
      items: 'Item 2',
      category: 'Category B',
      quantity: 8,
    },
    // Add more data as needed
  ];

  return (
    <InventoryLayout>
      <div className="damage-item-container">
        <div className="damage-heading">
          <h4>Damage Items</h4>
        </div>
        <div className="damage-item-content">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="item">Item:</label>
              <input
                type="text"
                id="item"
                name="item"
                placeholder="Enter item name"
                value={formData.item}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Enter category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Enter quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="damage-btn">
            <button type="submit">Submit</button>
            </div>
          </form>
          <div className="damage-table">
          <Table dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
    </InventoryLayout>
  );
};

export default DamageItems;
