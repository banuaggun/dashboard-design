import React, { Component } from "react";

import posed from "react-pose";

const Animation = posed.div({
  visible: { opacity: 1, applyAtStart: { display: "block" } },
  hidden: { opacity: 0, applyAtEnd: { display: "none" } }
});

class AddUser extends Component {
  state = {
    visible: false
  };

  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <br />
        <button
          onClick={this.changeVisibility}
          className="mb-2 btn btn-dark btn-block"
        >
          {visible ? "Hide Form" : "Show Form"}
        </button>
        <br />
        <Animation pose={visible ? "visible" : "hidden"}>
          <div className="card">
            <div className="card-header">
              <h4>Add Customer Form</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="id"
                    placeholder="Enter name"
                    className="form-control"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    className="form-control"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter phone"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Enter location"
                    className="form-control"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="totalOrders">Total Orders</label>
                  <input
                    type="number"
                    name="totalOrders"
                    id="totalOrders"
                    placeholder="Enter Total Orders"
                    className="form-control"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="totalSpend">Total Spend</label>
                  <input
                    type="number"
                    name="totalSpend"
                    id="totalSpend"
                    placeholder="Enter Total Spend"
                    className="form-control"
                  />
                </div>
                <br />
                <button className="btn btn-primary btn-block" type="submit">
                  Add Customer
                </button>
              </form>
            </div>
          </div>
        </Animation>
      </div>
    );
  }
}

export default AddUser;
