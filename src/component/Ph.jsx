import React, { Component } from "react";

class Ph extends Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      fontSize: "14px"
    };
  }

  onMouseEnter = () => {
    this.setState({ 
      color: "blue", 
      fontSize: "20px" 
    });
  };

  onMouseLeave = () => {
    this.setState({ 
      color: "red", 
      fontSize: "14px" 
    });
  };

  render() {
    const { color, fontSize } = this.state;
    
    return (
      <p
        style={{ color, fontSize }}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
       bounjour.
      </p>
    );
  }
}

export default Ph;