import React, { Component } from "react";
import TypeOfFurniture from "../../assets/json/type_furniture.json"
import '../Types of furniture/type_furniture.css'
const furnitures = TypeOfFurniture.furniture;

class Type_of_furniture extends Component {

    state={add_remove_cart:"add to cart",isinCart:false};
    addcart=()=>{
  
if(this.state.isinCart){
        this.setState({add_remove_cart:"remove from cart",isinCart:true})

}
else{
    this.setState({add_remove_cart:"remove from cart",isinCart:false})
}
        
       // this.setState({add_remove_cart:"add to cart"})
    }
    render() {
        return (
            <>
            <div className="container">
                {furnitures.map((furniture) => (
                    furniture.isinCart=false,
                    
                        <div class="card">
                            <img src={furniture.image} alt="Image 1" class="card-image" />
                            <h3 class="card-title">{furniture.title}</h3>
                            <p class="card-description">{furniture.description}</p>
                            <div className="add_cart" onClick={this.addcart}><a href="">{this.state.add_remove_cart}</a></div>
                            
                      
                    </div>
                       
                )
                )
                }
                  </div>
            </>
        )
    }
}
export default Type_of_furniture;