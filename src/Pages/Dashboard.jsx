import React from "react";

import { Link } from "react-router-dom";

import Chart from "react-apexcharts";

import Table from "../Components/Tables/Table";

import StatusCards from "../Components/StatusCard/StatusCards";

import statusCards from "../Assets/Data/statusCard.json";

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [48, 70, 20, 90, 36, 80, 30, 91, 60]
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }
  ],
  options: {
    color: ["blue", "lightblue"],
    chart: {
      background: "transparent"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      categories: [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep"
      ]
    },
    legend: {
      position: "top"
    },
    grid: {
      show: false
    }
  }
};

const topCustomers = {
  head: ["user", "order date", "total spending"],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund"
    }
  ]
};

const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.user}</td>
    <td>{item.date}</td>
    <td>{item.price}</td>
  </tr>
);

const Dashboard = () => {
  return (
    <div>
      <h2 className="pageHeader">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6">
                {/*statuscard data*/}
                {item.title}
                <StatusCards
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            {/* graphic area */}
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="cardHeader">
              <h1>Top Customers</h1>
            </div>
            <div className="cardBody">
              {/* table area */}
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className="cardFooter">
              <Link to="/">View All</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="cardHeader">
              <h3>latest orders</h3>
            </div>
            <div className="cardBody">
              <Table />
            </div>
            <div className="cardFooter">
              <Link to="/">View All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
