import React, { Component } from "react";
import image from "../../assets/image/frunitire.jpg";
import image1 from "../../assets/image/image_2.jpg";
import "../imageslider/imageslider.css";

const images = [image, image1];

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                currentIndex: (prevState.currentIndex + 1) % images.length
            }));
        }, 5000); 
    }

    componentWillUnmount() {
        clearInterval(this.interval); // Cleanup interval on component unmount
    }

    render() {
        const { currentIndex } = this.state;
        return (
            <div className="imageslider">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    />
                ))}
            </div>
        );
    }
}

export default ImageSlider;
