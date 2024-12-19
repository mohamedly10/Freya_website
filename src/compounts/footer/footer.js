import React,{Component} from 'react'
import "../footer/footer.css"
import Description  from '../description/description'
import facebookIcon from "../../assets/icon/facebook.png"
import instaIcon from "../../assets/icon/instagram.png"
import twitterIcon from "../../assets/icon/twitter.png"
class Footer extends Component{
    render(){
        return(<>
        <div className='theFooter'>
        <div className='upper'>
        <div> <a href="#"><img src={facebookIcon}/></a></div>
        <div> <a href="#"><img src={twitterIcon}/></a></div>
        <div> <a href="#"><img src={instaIcon}/></a></div>
        </div>
        <div className='bottom'>
           <Description
           color="#fff"
           firstText="Freya Incorporated, 019 Appellation Ave, New Jersey, 535-118-7056"
           secondText="Template by Themewagon"
           />
        </div>
        
        </div>
        </>
        )
    }
}
export default Footer 