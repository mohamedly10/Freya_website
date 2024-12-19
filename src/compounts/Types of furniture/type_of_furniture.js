import React, { Component } from "react";
import TypeOfFurniture from "../../assets/json/type_furniture.json"
import '../Types of furniture/type_furniture.css'
const furnitures = TypeOfFurniture.furniture;

class Type_of_furniture extends Component {
    render() {
        return (
            <>
            <div className="container">
                {furnitures.map((furniture) => (
          
                        <div class="card">
                            <img src={furniture.image} alt="Image 1" class="card-image" />
                            <h3 class="card-title">{furniture.title}</h3>
                            <p class="card-description">{furniture.description}</p>
                      
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