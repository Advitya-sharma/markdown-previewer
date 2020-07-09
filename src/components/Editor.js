import React, { Component } from "react";
export class Editor extends Component {
  state = {
    value: "",
  };

  render() {
    return (
      <div>
        <textarea
          onChange={this.props.handelChange.bind(this)}
          value={this.props.value}
        ></textarea>
      </div>
    );
  }
}

export default Editor;
