import React, { Component } from "react";
import '../description/description.css'

class Description extends Component{
   
    render(){
        const { firstText, secondText ,color} = this.props;
    
        return(
<>
<p style={{color: color}} className="firstText">{firstText}</p>
<p style={{color: color}} className="secondText">{secondText}</p>
</>
        );
    };
}
export default Description;