import React, { Component } from 'react'

export class Previewer extends Component {
    render() {
        return (
          <div id="preview">
            <div dangerouslySetInnerHTML={this.props.getMarkdownText}></div>
          </div>
        );
    }
}

export default Previewer
