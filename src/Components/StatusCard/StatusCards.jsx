import React from "react";

import "./StatusCards.css";

const StatusCard = (props) => {
  return (
    <div className="statusCard">
     <div className="area">
     <div className="statusCard-title">
        <span>{props.title}</span>
      </div>

      <div className="statusCard-info">
        <span>{props.count}</span>
        <i className={props.icon}></i>
      </div>
      </div>
    </div>
  
  );
};

export default StatusCard;
