import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <button className="dropdownToggle">
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.badge ? (
          <span className="dropdownToggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div className="dropdownContent">
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ""}
      </div>
    </div>
  );
};

export default Dropdown;
