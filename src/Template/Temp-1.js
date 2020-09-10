import React from "react";
import img1 from "../assets/Template2/img-1.jpg";
import img2 from "../assets/Template2/img-2.jpg";
import img3 from "../assets/Template2/img-3.jpg";
import img4 from "../assets/Template2/img-4.jpg";
import img6 from "../assets/Template2/img-6.webp";
import img7 from "../assets/Template2/img-7.jpg";
import RetailerBenfits from "../components/RetailerPage2/RetailerBenfits2";
import SingleRowImage from '../components/TwointoOneOverLay/SingleRowImage'
import SingleRowImageWIthTxt from '../components/TwointoOneOverLay/SingleRowImageWithTxt'


class Temp1 extends React.Component {
  render() {
    return (
      <>
        {/*container for layout */}
        <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto">
          <p className="weaverz-ai-text-center weaverz-ai-mt-10">THE WORLDS FIRST WOOL SPORTS SHOE</p>
          <h3 className="weaverz-ai-text-center">WOOL CROSS X</h3>
          <div className="weaverz-ai-grid weaverz-ai-gap-x-24 xlg:weaverz-ai-grid-cols-1 lg:weaverz-ai-grid-cols-1 md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1 weaverz-ai-mt-4">
            {/* Colum -1 */}
            <div ClassName="">
              <RetailerBenfits
                imgSrc={img1}
                heading="SOCKS ARE SO YESTERDAY!"
                content="We promise that once you slip your bare feet into the Wool Cross X - which is lined with natural materials - that you’ll never want to take them off."
                imgOrder="last"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img2}
                heading="NO NEED TO PLUG YOUR NOSE"
                content="Merino wool naturally neutralizes unpleasant smells, and wicks all moisture far away from the foot. It’s much more effective at eliminating odors and dampness than any artificial material."
                imgOrder="first"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <SingleRowImage 
                imgSrc={img6}
                heading="STABILITY CONTROL"
                content="The special sole provides maximum stability and an ideal cushioning effect on all surfaces."
                imgOrder="last"
              />
              <SingleRowImageWIthTxt
                imgSrc={img7}
                heading="STABILITY CONTROL"
                content="The special sole provides maximum stability and an ideal cushioning effect on all surfaces."
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img3}
                heading="MICRO-GRIP SOLE"
                content="The Wool Cross X sports a Micro-Grip sole, which makes it the perfect shoe for any terrain. No matter if you’re tackling snow, slush or rocky ground, the Wool Cross X has your back."
                imgOrder="last"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
            </div>
          </div>
          <div>

          </div>
        </div>
      </>
    );
  }
}

export default Temp1;
