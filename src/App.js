import React, { Component } from "react";
import marked from "marked";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import Header from "./components/header/Header";
import "./App.css";

const defValue = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.


- hhhh
>jjjj 

>> kjnj


\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
export class App extends Component {
  state = {
    editorText: defValue,
    previewText: "",
  };

  handelChange = (e) => {
    const a = e.target.value;
    console.log(a);
    this.setState({ editorText: e.target.value });
  };
  getMarkdownText = () => {
    var markup = marked(this.state.editorText);
    return { __html: markup };
  };

  render() {
    return (
      <div>
        <Header />
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
