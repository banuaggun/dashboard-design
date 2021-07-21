import React from "react";

import "./StatusCards.css";

const StatusCard = (props) => {
  return (
    <div className="statusCard">
      <div className="statusCard-icon">
        <i className={props.icon}></i>
      </div>
      <div className="statusCard-info">
        <h4>{props.count}</h4>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default StatusCard;
