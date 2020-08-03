import React from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Inputnumber";
import ClearButton from "./Components/ClearButton";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };
  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };
  ZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };
  clearInput = () => {
    this.setState({ input: "" });
  };
  addition = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "add";
  };
  substration = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "substration";
  };
  multiplication = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiplication";
  };
  division = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "division";
  };
  evaluation = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator == "add") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator == "substration") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator == "multiplication") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator == "division") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber)
      });
    }
  };
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <div className="button-row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="button-row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.division}>/</Button>
          </div>
          <div className="button-row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiplication}>*</Button>
          </div>
          <div className="button-row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addition}>+</Button>
          </div>
          <div className="button-row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.ZeroToInput}>0</Button>
            <Button handleClick={this.evaluation}>=</Button>
            <Button handleClick={this.substration}>-</Button>
          </div>
          <div className="button-row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
