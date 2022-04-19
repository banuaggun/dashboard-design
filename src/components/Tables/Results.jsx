import React from "react";

import CustomerList from "../../Assets/Data/CustomerList";

//import TableMin from "./TableMin";

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.location}</td>
  </tr>
);

const Results = () => {
  return (
    <table
      style={{ zIndex: "10", display: "block" }}
      bodyData={CustomerList}
      renderBody={(item, index) => renderBody(item, index)}
    ></table>
  );
};

export default Results;
