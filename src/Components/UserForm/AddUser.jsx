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
              <h4>Add User Form</h4>
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
                  <label htmlFor="department">department</label>
                  <input
                    type="text"
                    name="department"
                    id="department"
                    placeholder="Enter department<"
                    className="form-control"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    placeholder="Enter salary"
                    className="form-control"
                  />
                </div>
                <br />
                <button className="btn btn-primary btn-block" type="submit">
                  Add User
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
