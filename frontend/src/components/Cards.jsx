// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card } from "antd";
import "../styles/card.css";

// eslint-disable-next-line react/prop-types
const Cards = ({ title, content }) => {
  return (
    <div className="card-container">
      <Card>
        {/* style={{ width: 170 }} */}
        <h6>{title}</h6>
        <p>{content}</p>
      </Card>
     </div> 
  );
};

export default Cards;
