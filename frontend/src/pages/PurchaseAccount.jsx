// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import "../styles/purchaseAccount.css";
import Cards from "../components/Cards";
import { Button, Table } from "antd";

const PurchaseAccount = () => {
  // useState for the select option
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // usestate for the select option for select vendor
  const [selectVendor, setSelectVendor] = useState("");
  const handleSelectVendor = (e) => {
    setSelectVendor(e.target.value);
  };
  // card data
  const cardData = [
    { title: "Total Purchase", content: "Content for Card 1" },
    { title: "Total Purchase", content: "Content for Card 2" },
    { title: "Total Purchase", content: "Content for Card 3" },
    { title: "Total paid", content: "Content for Card 4" },
    { title: "Total paid", content: "Content for Card 5" },
    { title: "Total paid", content: "Content for Card 6" },
    // Add more objects for additional cards...
  ];

  // pending bill table
  const columns = [
    {
      title: "Sl. No.",
      dataIndex: "slNo",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Toatal Bill",
      dataIndex: "total",
    },
    {
      title: "Pending Bill",
      dataIndex: "pending",
    },
  ];

  // useState for the pending bill
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const data = [];
    for (let index = 0; index < 7; index++) {
      data.push({
        key: `${index}`,
        slNo: ` ${index + 1}`,
        phone: `phone${index}`,
        total: `total${index}`,
        pending: `pending${index}`,
      });
    }
    setTableData(data);
  }, []);

  return (
    <DefaultLayout>
      <div className="purchase-accnt-container">
        <div className="purchase-header">
          <h4>Purchase Account</h4>
        </div>
        <div className="purchse-content">
          <div className="dropdown-container">
            <div className="list-vendor-dropdown">
              <label htmlFor="dropdown">Select an option:</label>
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Select</option>
                <option value="Vendor1">Vendor 1</option>
                <option value="Vendor2">Vendor 2</option>
                <option value="Vendor3">Vendor 3</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="select-vendor-dropdown">
              <label htmlFor="dropdown">Select an option:</label>
              <select
                id="dropdown"
                value={selectVendor}
                onChange={handleSelectVendor}
              >
                <option value="">Select</option>
                <option value="vendor1">vendor 1</option>
                <option value="vendor2">vendor 2</option>
                <option value="vendor3">vendor 3</option>
                <option value="vendor4">vendor 4</option>
              </select>
            </div>
          </div>
         
            {/* ... other content ... */}
            <div className="purchase-head">
              <h3 className="Today">Today</h3>
              <h3 className="Month">Month</h3>
              <h3 className="Year">Year</h3>
            </div>
            <div className="purchase-card-container">
              {cardData.map((card, index) => (
                <div className="purchase-card" key={index}>
                  <Cards title={card.title} content={card.content} />
                </div>
              ))}
            </div>
            {/* ... other content ... */}
         
          {/* pending bill */}
          <div className="pending-bill">
            <Button type="primary">list pending bill</Button>
          </div>
          <div className="pending-bill-table">
            <Table columns={columns} dataSource={tableData} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PurchaseAccount;
