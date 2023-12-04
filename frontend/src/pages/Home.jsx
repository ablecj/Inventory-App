// Home.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import "../styles/Home.css";
import Cards from "../components/Cards";

const Home = () => {
  const cardData = [
    { title: "Total Invoice Today", content: "Content for Card 1" },
    { title: "Total Invoice Monthly", content: "Content for Card 2" },
    { title: "Total Sales Today", content: "Content for Card 3" },
    { title: "Total Sales this month", content: "Content for Card 4" },
    { title: "Order form", content: "Content for Card 5" },
    { title: "Card 6", content: "Content for Card 6" },
    // Add more objects for additional cards...
  ];
  return (
    <DefaultLayout>
      <div className="container">
        <div className="content">
          {/* <div className="section"> */}
          {cardData.map((card, index) => (
            <Cards key={index} title={card.title} content={card.content} />
          ))}
          {/* </div> */}
          {/* <div className='section'>
              Section 2
            </div>
            <div className='section'>
              Section 3
            </div>
            <div className='section'>
              Section 4
            </div>
            <div className='section'>
              Section 5
            </div>
            <div className='section'>
              Section 6
            </div> */}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
