import React from "react";
import "./RetailerPage.css";
import img1 from "../../assets/Template3/img1.jpg";
import img2 from "../../assets/Template3/img2.jpg";
import img3 from "../../assets/Template3/img3.jpg";
import img4 from "../../assets/Template3/img4.jpg";
import img5 from "../../assets/Template3/img5.jpg";
import img6 from "../../assets/Template3/img6.jpg";

import RetailerBenfits from "./RetailerBenfits";
import RetailerBenfitsLastRow from "./RetailerBenfitsLastRow";

class RetailerPage3 extends React.Component {
  render() {
    return (
      <>
        {/*container for layout */}
        <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto">
        <h3 className="weaverz-ai-text-center">Template 3</h3>
          <div className="weaverz-ai-grid weaverz-ai-gap-x-24 xlg:weaverz-ai-grid-cols-1 lg:weaverz-ai-grid-cols-1 md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1 weaverz-ai-mt-4">
            {/* Colum -1 */}
            <div ClassName="">
              <RetailerBenfits
                imgSrc={img1}
                heading="SOCKS ARE SO YESTERDAY!"
                content="We promise that once you slip your bare feet into the Wool Cross X - which is lined with natural materials - that you’ll never want to take them off."
                imgOrder="last"
                bgColor = "bg1"
                textColor = "textColor1"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img2}
                heading="NO NEED TO PLUG YOUR NOSE"
                content="Merino wool naturally neutralizes unpleasant smells, and wicks all moisture far away from the foot. It’s much more effective at eliminating odors and dampness than any artificial material."
                imgOrder="first"
                bgColor = "bg1"
                textColor = "textColor1"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img3}
                heading="STABILITY CONTROL"
                content="The special sole provides maximum stability and an ideal cushioning effect on all surfaces."
                imgOrder="last"
                bgColor = ""
                textColor = "textColor2"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img4}
                heading="MICRO-GRIP SOLE"
                content="The Wool Cross X sports a Micro-Grip sole, which makes it the perfect shoe for any terrain. No matter if you’re tackling snow, slush or rocky ground, the Wool Cross X has your back."
                imgOrder="first"
                bgColor = "bg4"
                textColor = "textColor2"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img5}
                heading="MICRO-GRIP SOLE"
                content="The Wool Cross X sports a Micro-Grip sole, which makes it the perfect shoe for any terrain. No matter if you’re tackling snow, slush or rocky ground, the Wool Cross X has your back."
                imgOrder="last"
                bgColor = "bg4"
                textColor = "textColor2"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img6}
                heading="MICRO-GRIP SOLE"
                content="The Wool Cross X sports a Micro-Grip sole, which makes it the perfect shoe for any terrain. No matter if you’re tackling snow, slush or rocky ground, the Wool Cross X has your back."
                imgOrder="first"
                bgColor = "bg1"
                textColor = "textColor1"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
            </div>

            {/* Colum -2 */}
            {/* <div ClassName="">
              <RetailerBenfits
                imgSrc={img4}
                heading="Fresh Look"
                content="The Fit Knit upper provides a fashion-forward aesthetic with a secure, distraction-free fit"
                imgOrder="last"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img5}
                heading="Responsive ride"
                content="BioMoGo DNA combines with the Green Rubber outsole to create a springy feel."
                imgOrder="first"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img6}
                heading="Super springy"
                content="Now 20% lighter, our DNA AMP midsole technology lets your foot spring off the ground with each step for speedy, efficient energy return"
                imgOrder="last"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img9}
                heading="GuideRails® holistic support system"
                content="We’ve shifted our focus beyond the feet to the most injury-prone part of a runner’s body: the knees. GuideRails® support keeps you moving comfortably by keeping excess movement in check."
                imgOrder="first"
              />
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default RetailerPage3;
