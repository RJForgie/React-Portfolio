import React, { Component } from 'react';

class CodeIcons extends Component {
  render() {
    return (
      <div id="icon-container">
        {this.props.project.icons.map(item =>
          <span className={"devicons devicons-" + item} />
          // <img src={item} className="icon" />
        )}
      </div>
    );
  }
}
export default CodeIcons;
