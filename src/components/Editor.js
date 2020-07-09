import React, { Component } from "react";
import "./component.css";



export class Editor extends Component {
  render() {
    return (
      <div>
          <article>
              Editor
          </article>
        <textarea
          id="edit"
          placeholder="Enter text"
          onChange={this.props.handelChange.bind(this)}
          value={this.props.value}
        ></textarea>
      </div>
    );
  }
}

export default Editor;
