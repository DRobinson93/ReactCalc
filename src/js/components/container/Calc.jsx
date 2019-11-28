import React, { Component } from "react";
import ReactDOM from "react-dom";
import Btn from "../presentational/Button.jsx";
import Alerts from "../presentational/Alerts.jsx";
class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTxt: "", 
      errors:   []
    };
    this.handleClick = this.handleClick.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.calculate = this.calculate.bind(this);
    this.appendAndCalc = this.appendAndCalc.bind(this);
  }
  clearErrors(){
    return this.setState({ errors: [] })
  }
  appendAndCalc(str){
    let newVal = (this.state.inputTxt.toString()+str).toString();
    this.setState({inputTxt: newVal}, function () {
        this.calculate();
    });
    return this;
  }
  calculate(){
    try {
      console.log(this.state.inputTxt);
        let result= eval(this.state.inputTxt);
        this.setState({inputTxt: result}); 
        clearErrors();
    } catch (e) {
        if (e instanceof SyntaxError) {
          var joined = this.state.errors.concat(e.message);
          this.setState({ errors: joined })
        }
    }
    return this;
  }
  handleClick(btnVal) {
    this.clearErrors();
    if(!(['=','AC','+/-','%'].includes(btnVal))){
      this.setState({inputTxt: this.state.inputTxt+btnVal}); 
    }
    else{
      //handle special cases like =
      switch(btnVal){
        case "=":
          this.calculate();
          break;
        case "AC":
          this.setState({inputTxt: ""}); 
          break;
        case "+/-":
          this.appendAndCalc("*-1");
          break;
        case "%": //percent val
          this.appendAndCalc("/100");
          break;
      }
    }
  }
  render() {
    return (
      <div className="row">
        <input className="col-12" disabled value={this.state.inputTxt}></input>
        {this.props.btns.map(function(data, key) {
            return (
              <div className="col-3" key={key}>
                <Btn
                  data={data}
                  handleClick={() => this.handleClick(data.val)}></Btn>
              </div>
            )
        },this)} 
        <Alerts errors={this.state.errors}></Alerts> 
      </div>
    );
  }
}
export default Calc;

const wrapper = document.getElementById("calc-parent");
wrapper ? ReactDOM.render(<Calc 
  btns={[
    {'val':'AC'},{'val':'+/-'},{val:'%'},{val:'/'},
    {'val': 7},{'val': 8},{'val': 9},{'val': '*', disp:'x'},
    {'val': 4},{'val': 5},{'val': 6},{'val': '-'},
    {'val': 1},{'val': 2},{'val': 3},{'val': '+'},
    {'val': 0, 'sytle':"col-6"},{'val': '.'},{'val': '='}
  ]} 
/>, wrapper) : false;