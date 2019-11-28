import React, {Component} from 'react'; 
  
class Alerts extends Component { 
  constructor(props) 
  { 
    super(props); 
  } 

  render() 
  { 
      return ( 
      <div className="col-12"> 
          {this.props.errors.map(function(error, key) {
            return (
              <div className="alert alert-danger" key={key}>
                {error}
              </div>
            )
        },this)} 
      </div>
    )
  } 
}   
  
// Exporting the component 
export default Alerts; 