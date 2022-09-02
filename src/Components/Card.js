import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
const Card = () => {
  return (
    <>
      <div class="col card text-bg-dark mb-3 p-2 m-2 ">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Dark card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <AccessAlarmIcon />
        </div>
      </div>
    </>
  );
};

export default Card;
