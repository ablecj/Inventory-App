// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import "../styles/purchaseAccount.css";
// import Cards from "../components/Cards";
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
    { title: "Today", content: ["Total Sale", "Bill:", "Amount:"] },
    { title: "Month", content: ["Total Sale", "Bill:", "Amount:"] },
    { title: "Year", content: ["Total Sale", "Bill:", "Amount:"] },
  ]

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
            <div className="purchasetable">
            <div className="purchasetable-content">
              {cardData.map((card, index) => (
                <div className="purchasetable-card" key={index}>
                  <h3>{card.title}</h3>
                  <div className="purchasecard-content">
                    <p>{card.content[0]}</p>
                    <p>{card.content[1]}</p>
                    <p>{card.content[2]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
            
         
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
