import React, { Component } from "react";

import PropTypes from "prop-types";

class User extends Component {
  static defaultProps = {
    phone: "Not Info",
    email: "Not Info",
    location: "Not Info"
  };
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button>Gönder</button>
          <p>{this.state.test}</p>
        </form>
      </div>
    );
  }
}

User.PropTypes = {
  phone: "Proptypes.number.isRequired",
  email: "Proptypes.email.isrequired",
  location: "PropTypes.string.isRequired"
};

export default User;
