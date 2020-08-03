import React from "react";
class ClearButton extends React.Component {
  render() {
    return( 
      <div 
        className="button_clear"
        onClick={() => this.props.handleClear()}
      >
        {this.props.children}
      </div>
    )
  }
}
export default ClearButton;