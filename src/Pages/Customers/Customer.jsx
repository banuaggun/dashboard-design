import React from "react";

import Table from "../../Components/Tables/Table";

import CustomerList from "../../Assets/Data/CustomerList.json";

import "./customer.css";

import CustomerGuide from "../../Components/CustomerGuides/CustomerGuide";

import AddUser from "../../Components/UserForm/AddUser";

const customerHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location"
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td style={{ border: "1px solid violet", padding: "5px 2px" }}>
      {item.id}
    </td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.totalOrders}</td>
    <td>{item.totalSpend}</td>
    <td>{item.location}</td>
  </tr>
);

const Customers = () => {
  return (
    <div>
      <h2 className="pageHeader">Customers</h2>
      <div className="row">
        <div className="col-12 customerTable">
          <AddUser />
          <div className="card">
            <div className="cardBody">
              <Table
                limit="10"
                headData={customerHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={CustomerList}
                renderBody={(item, index) => renderBody(item, index)}
                className="customerTable"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
