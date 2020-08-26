import React, { useState, useEffect } from "react";
import "./RetailerPage.css";
import img1 from "../../assets/img/img1.webp";
import img2 from "../../assets/img/img2.webp";
import img3 from "../../assets/img/img3.webp";
import img4 from "../../assets/img/img4.webp";
import img5 from "../../assets/img/img5.webp";
import img6 from "../../assets/img/img6.webp";
import img7 from "../../assets/img/img7.webp";
import img8 from "../../assets/img/img8.webp";
import img9 from "../../assets/img/img9.webp";
import RetailerBenfits from "./RetailerBenfits";

class RetailerPage extends React.Component {
  render() {
    return (
      <>
        {/*container for layout */}
        <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto">
          <h3 className="weaverz-ai-text-center weaverz-ai-mt-10">Benefits</h3>
          <div className="weaverz-ai-grid weaverz-ai-gap-x-24 xlg:weaverz-ai-grid-cols-2 lg:weaverz-ai-grid-cols-2 md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-1 weaverz-ai-mt-4">
            {/* Colum -1 */}
            <div ClassName="">
              <RetailerBenfits
                imgSrc={img3}
                heading="Fresh Look"
                content="The Fit Knit upper provides a fashion-forward aesthetic with a secure, distraction-free fit"
                imgOrder = "last"
              />
              <hr className="sm:weaverz-ai-block sm:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img8}
                heading="Responsive ride"
                content="BioMoGo DNA combines with the Green Rubber outsole to create a springy feel."
                imgOrder = "first"
              />
              <hr className="sm:weaverz-ai-block sm:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img1}
                heading="Super springy"
                content="Now 20% lighter, our DNA AMP midsole technology lets your foot spring off the ground with each step for speedy, efficient energy return"
                imgOrder = "last"
              />
              <hr className="sm:weaverz-ai-block sm:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img2}
                heading="GuideRails® holistic support system"
                content="We’ve shifted our focus beyond the feet to the most injury-prone part of a runner’s body: the knees. GuideRails® support keeps you moving comfortably by keeping excess movement in check."
                imgOrder = "first"
              />
              <hr className="sm:weaverz-ai-block sm:weaverz-ai-hidden weaverz-ai-my-2"></hr>
            </div>

            {/* Colum -2 */}
            <div ClassName="">
            <RetailerBenfits
                imgSrc={img4}
                heading="Fresh Look"
                content="The Fit Knit upper provides a fashion-forward aesthetic with a secure, distraction-free fit"
                imgOrder = "last"
              />
              <hr className="sm:weaverz-ai-block sm:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img5}
                heading="Responsive ride"
                content="BioMoGo DNA combines with the Green Rubber outsole to create a springy feel."
                imgOrder = "first"
              />
              <hr className="sm:weaverz-ai-block sm:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img6}
                heading="Super springy"
                content="Now 20% lighter, our DNA AMP midsole technology lets your foot spring off the ground with each step for speedy, efficient energy return"
                imgOrder = "last"
              />
              <hr className="sm:weaverz-ai-block sm:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <RetailerBenfits
                imgSrc={img9}
                heading="GuideRails® holistic support system"
                content="We’ve shifted our focus beyond the feet to the most injury-prone part of a runner’s body: the knees. GuideRails® support keeps you moving comfortably by keeping excess movement in check."
                imgOrder = "first"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RetailerPage;
