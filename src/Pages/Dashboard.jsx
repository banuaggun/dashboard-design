import React from "react";

import Chart from "react-apexcharts";

import StatusCards from "../Components/StatusCard/StatusCards";

import statusCards from "../Assets/Data/statusCard.json";

const chartOptions = {
  series: [{
    name: "Online Customers",
    data:[48, 70, 20, 90, 36, 80, 30, 91, 60]
  },{
    name="Store Customers",
    data:[40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
  }],
  options:{
    color: ["blue", "lightblue"],
    chart:{
      background:"transparent"
    },
    dataLabels:{
      enabled:false
    },
    stroke:{
categories:["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep"]
    },
    legend:{
      position:"top"
    }
  }
}





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
          <div className="card full-height">{/* graphic area */}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
