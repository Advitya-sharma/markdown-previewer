import React, { Component } from "react";
import marked from "marked";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

export class App extends Component {
  state = {
    editorText: "",
    previewText: "",
  };

  handelChange = (e) => {
    console.log(e.target.value);
    this.setState({ editorText: e.target.value });
  };
  getMarkdownText = () => {
    var markup = marked(this.state.editorText);
    return { __html: markup };
  };

  render() {
    return (
      <div>
        <Editor
          handelChange={this.handelChange}
          value={this.state.editorText}
        />
        <Previewer getMarkdownText={this.getMarkdownText()} />
      </div>
    );
  }
}

export default App;
