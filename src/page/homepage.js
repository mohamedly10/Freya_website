import React, { Component } from "react";
import TheNav from '../compounts/Navbar/nav' 
import Imageslider from '../compounts/imageslider/imageslider' 
import Description from '../compounts/description/description' 
import Type_of_furniture from "../compounts/Types of furniture/type_of_furniture";
import FullImageWidth from"../compounts/full image width/full_image_width.js";
import Footer from "../compounts/footer/footer.js"
class HomePage extends Component {
  render() {
    return (
      <>
      <div className="theContainer">
        <TheNav />
        <Imageslider />
        <Description
        firstText='Freya Inc. is the hub for top architects and inventors, ready to turn your imagination into reality'
        secondText="All photographs provided for demo purposes only."
        />
        <Type_of_furniture />
        <FullImageWidth/>

        <Description
        firstText="A coffee shop gains a warmer look"
        secondText="Museo coffees got in touch with Freya for their renovation. We took over and asked them to have a cup of coffee for themselves while the job is done! Sed posuere consectetur est at lobortis. Fusce dapibs, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Pellentsque ornare se lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
        />
<Footer />
        </div>
      </>
    );
  }
}

export default HomePage;
