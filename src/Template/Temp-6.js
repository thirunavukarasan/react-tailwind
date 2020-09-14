import React from "react";
import './temp6.css'
import img1 from "../assets/Template2/img-1.jpg";
import img2 from "../assets/Template2/img-2.jpg";
import img3 from "../assets/Template2/img-3.jpg";
import img4 from "../assets/Template2/img-4.jpg";
import img6 from "../assets/Template2/img-6.webp";
import img7 from "../assets/Template2/img-7.jpg";
import RetailerBenfits from "../components/RetailerPage2/RetailerBenfits2";
import HorizondalImage from '../components/Horizon_Img-T-D/card1'
import VerticalImage from '../components/Vertical_Img-T-D/card2'
import ThumnailGallery from '../components/RetailerPage6/ThumnailGallery/ImageGallery'
import Icons4X2 from '../components/4x2_Icons/card'
import LogoPlusCollection from '../components/LogoPlusCollection/LogoPlusCollection'

class Temp1 extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.sliderImages)
  }
  render() {
    return (
      <>
        {/*container for layout */}
        <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto weaverz-ai-temp6BG">
          <p className="weaverz-ai-text-center weaverz-ai-mt-10">THE WORLDS FIRST WOOL SPORTS SHOE</p>
          <h3 className="weaverz-ai-text-center">WOOL CROSS X</h3>
          <div className="weaverz-ai-grid weaverz-ai-gap-x-24 xlg:weaverz-ai-grid-cols-1 lg:weaverz-ai-grid-cols-1 md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1 weaverz-ai-mt-4">
            {/* Colum -1 */}
            <div ClassName="">
              <HorizondalImage/>
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <VerticalImage/>
              <ThumnailGallery sliderImages={this.props.sliderImages}/>
              <Icons4X2/>
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <LogoPlusCollection/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Temp1;

