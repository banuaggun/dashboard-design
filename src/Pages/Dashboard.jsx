import React from "react";

import StatusCards from "../Components/StatusCard/StatusCards";

import statusCards from "../Assets/Data/statusCard.json";

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
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default Dashboard;
