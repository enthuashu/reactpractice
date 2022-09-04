import React from "react";

const Card = ({ category, headline, description, current }) => {
  const colours = [
    "#5B84B1FF",
    "#2A363B ",
    "#A7226E",
    "#FF847C",
    "#45ADA8",
    "#E84A5F",
  ];

  return (
    <>
      <div
        style={{ backgroundColor: colours[current % 6] }}
        class="card text-white mb-3"
      >
        <div class="card-header">#{category} </div>
        <div class="card-body">
          <h5 style={{ fontWeight: "bolder" }} class="card-title">
            {" "}
            {headline}{" "}
          </h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
