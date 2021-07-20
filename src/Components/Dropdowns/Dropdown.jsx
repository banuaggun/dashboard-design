import React, { useRef } from "react";

import "./Dropdown.css";

const clickOutsideRef = (contentRef, toggleRef) => {
  document.addEventListener("mousedown", (e) => {
    //when it is click toggle by user
    if (toggleRef.current && toggleRef.current.contains(e.target)) {
      contentRef.current.classList.toggle("active");
    } else {
      //click outside toggle and content
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        contentRef.current.classList.remove("active");
      }
    }
  });
};

const Dropdown = (props) => {
  const dropdownToggleEl = useRef(null);
  const dropdownContentEl = useRef(null);

  clickOutsideRef(dropdownContentEl, dropdownToggleEl);
  return (
    <div className="dropdown">
      <button ref={dropdownToggleEl} className="dropdownToggle">
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.badge ? (
          <span className="dropdownToggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div ref={dropdownContentEl} className="dropdownContent">
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ""}
        {props.renderFooter ? (
          <div className="dropdownFooter">{props.renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dropdown;
