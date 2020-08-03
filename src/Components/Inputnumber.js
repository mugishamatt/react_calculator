import React from "react";
class InputNumber extends React.Component{
  render() {
    return( 
      <div className="input_num">
        {this.props.children}
      </div>
    )
  }
}
export default InputNumber