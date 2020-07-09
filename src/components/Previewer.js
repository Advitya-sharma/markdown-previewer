import React, { Component } from 'react'
import "./component.css"

export class Previewer extends Component {
    render() {
        return (
          <div>
            <div id="preview">
              <article>Previewer</article>
              <div dangerouslySetInnerHTML={this.props.getMarkdownText}></div>
            </div>
          </div>
        );
    }
}

export default Previewer
