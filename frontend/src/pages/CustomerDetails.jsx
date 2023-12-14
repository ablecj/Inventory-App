// eslint-disable-next-line no-unused-vars
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import "../styles/CustomerDetails.css";

const CustomerDetails = () => {
  const cardData = [
    { title: "Today", content: ["Total Sale", "Bill", "Amount"] },
    { title: "Month", content: ["Total Sale", "Bill", "Amount"] },
    { title: "Year", content: ["Total Sale", "Bill", "Amount"] },
  ];

  return (
    <DefaultLayout>
      <div className="customer-details-container">
        <div className="customerdetail-heading">
          <h4>Customer Details</h4>
        </div>
        <div className="customerdetail-content">
          <div className="customerdetails">
            <p>Name: abc</p>
            <p>Phone: 1236547789</p>
            <p>place: xyz.(po).uvw</p>
          </div>
          <div className="customertable">
            <div className="customertable-content">
              {cardData.map((card, index) => (
                <div className="customertable-card" key={index}>
                  <h3>{card.title}</h3>
                  <div className="customercard-content">
                    <p>{card.content[0]}</p>
                    <p>{card.content[1]}</p>
                    <p>{card.content[2]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CustomerDetails;
