import React, { Component } from "react";
class Text extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }
  Changer = (e) => {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.text} 
          onChange={this.Changer} 
        />
        <p>vous avis saiser: {this.state.text}</p>
      </div>
    );
  }
}
export default Text;