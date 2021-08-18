import React from "react";

import "./StatusCards.css";

const StatusCard = (props) => {
  return (
    <div className="statusCard">
      <div className="statusCardTitle">
        <span>{props.title}</span>
      </div>
      <div className="statusCardInfo">
        <div className="statusCardCount">
          <h4>{props.count}</h4>
        </div>{" "}
        <div className="statusCardIcon">
          <i className={props.icon}></i>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
