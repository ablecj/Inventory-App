// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import "../styles/sales.css";
import { Button,Table } from "antd";

const SalesAccount = () => {
  // const cardDatas = [
  //   {
  //     titles: ["Total Purchase", "Additional Title 1"],
  //     content: "Content for Card 1",
  //   },
  //   {
  //     titles: ["Total Purchase", "Additional Title 2"],
  //     content: "Content for Card 2",
  //   },
  //   {
  //     titles: ["Total Purchase", "Additional Title 3"],
  //     content: "Content for Card 3",
  //   },
  //   // Existing cards...
  // ];

  // Update data for existing cards or add new ones if needed
  const cardData = [
    { title: "Today", content: ["Total Sale", "Bill:", "Amount:"] },
    { title: "Month", content: ["Total Sale", "Bill:", "Amount:"] },
    { title: "Year", content: ["Total Sale", "Bill:", "Amount:"] },
  ]
  // Add more cards or update existing ones as needed...

  // Add more cards or update existing ones as needed...

  const cardDatas = [
    { title: "Total Outstanding", content: ["Bill: 2", "Amount: 9545"] },
    { title: "Total Outstanding", content: ["Bill : 5", "Amount: 8000"] },
    { title: "Total Outstanding", content: ["Bill : 8", "Amount: 500"] },
  ];

  const columns = [
    {
      title: "Sl. No.",
      dataIndex: "slNo",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Phone.No",
      dataIndex: "phone",
    },
    {
      title: "Pending Bill",
      dataIndex: "pending",
    },
    {
      title: "Total Bill",
      dataIndex: "total",
    },
    {
        title: "Action", // New column
        dataIndex: "action", // dataIndex for the new column (doesn't exist in your data)
        render: (_, record) => (
          <Button type="primary" onClick={() => handleAction(record.key)}>Go</Button>
        ),
      },
  ];

  const handleAction = (key) => {
    // Do something with the row key, for example, show details, navigate to a page, etc.
    console.log(`Button clicked for row with key: ${key}`);
  };

  // useState for the pending bill
  const [tableDatas, setTableDatas] = useState([]);

  useEffect(() => {
    const data = [];
    for (let index = 0; index < 7; index++) {
      data.push({
        key: `${index}`,
        slNo: ` ${index + 1}`,
        name: `name${index}`,
        phone:`phone${index}`,
        total: `total${index}`,
        pending: `pending${index}`,
      });
    }
    setTableDatas(data);
  }, []);


  return (
    <DefaultLayout>
      <div className="sales-container">
        <div className="sales-heading">
          <h4>Sales Account</h4>
        </div>
        <div className="salestable">
            <div className="salestable-content">
              {cardData.map((card, index) => (
                <div className="salestable-card" key={index}>
                  <h3>{card.title}</h3>
                  <div className="salescard-content">
                    <p>{card.content[0]}</p>
                    <p>{card.content[1]}</p>
                    <p>{card.content[2]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        <div className="outstanding-bill">
            <div className="outstanding-content">
              {cardDatas.map((card, index) => (
                <div className="outstanding-card" key={index}>
                  <h6>{card.title}</h6>
                  <div className="card-content">
                    <p>{card.content[0]}</p>
                    <p>{card.content[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="credit-bill-customer">
              <Table columns={columns} dataSource={tableDatas}></Table>
          </div>
      </div>
    </DefaultLayout>
  );
};

export default SalesAccount;
