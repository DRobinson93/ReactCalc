import React, {Component} from 'react'; 
  
class Btn extends Component { 
    constructor(props) 
    { 
      super(props); 
    } 
  
    render() 
    { 
        return (  
          <div className="form-group">
            <button className="btn btn-default btn-lg btn-block"
              onClick={this.props.handleClick}>
              {this.props.data.disp !== undefined ? this.props.data.disp : this.props.data.val}
            </button>
          </div> 
        )
  } 
}   
  
// Exporting the component 
export default Btn; 