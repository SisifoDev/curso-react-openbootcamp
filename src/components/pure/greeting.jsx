import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 46,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>You are {this.state.age} years old.</p>
      </div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
