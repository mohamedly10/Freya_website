import React, { Component } from 'react';
import { useInView } from "react-intersection-observer";
import image from "../../assets/image/frunitire.jpg";
import "../full image width/full_image_width.css";

class FullImageWidth extends Component {
    render() {
        return (
            <>
                <div className='Container'>
                    <div className="image-container">
                        <div className="color-overlay"></div> 
                        <img src={image} alt="Descriptive Text" />
                        <div className='text-overlay'>
                        <div>Museo</div>
                        <div>Manitoba</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FullImageWidth;
