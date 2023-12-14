// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import "../styles/sales.css";
// import Cards from "../components/Cards";
import { Button, Card,  Table } from "antd";

const SalesAccount = () => {
  const cardDatas = [
    {
      titles: ["Total Purchase", "Additional Title 1"],
      content: "Content for Card 1",
    },
    {
      titles: ["Total Purchase", "Additional Title 2"],
      content: "Content for Card 2",
    },
    {
      titles: ["Total Purchase", "Additional Title 3"],
      content: "Content for Card 3",
    },
    // Existing cards...
  ];

  // Update data for existing cards or add new ones if needed
  cardDatas[0].titles = ["New Title for Card 1", "Another Title"];
  cardDatas[1].titles = ["New Title for Card 2", "Different Title"];
  cardDatas[2].titles = ["New Title for Card 3", "Different Title"];
  // Add more cards or update existing ones as needed...

  // Add more cards or update existing ones as needed...

  const cardData = [
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
          <h4>Salces Account</h4>
        </div>
        <div className="sales-content">
          <div className="sales-head">
            <h3 className="Today">Today</h3>
            <h3 className="Month">Month</h3>
            <h3 className="Year">Year</h3>
          </div>
          <div className="sales-card-container">
            {cardDatas.map((card, index) => (
              <div className="sales-card" key={index}>
                <div className="card-container">
                  <Card>
                    {/* style={{ width: 170 }} */}
                    <h6>Titles:</h6>
                    <ul>
                      {card.titles.map((title, titleIndex) => (
                        <li key={titleIndex}>{title}</li>
                      ))}
                    </ul>
                    <h6>Content:</h6>
                    <p>{card.content}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        
        </div>
        <div className="outstanding-bill">
            <div className="outstanding-content">
              {cardData.map((card, index) => (
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
