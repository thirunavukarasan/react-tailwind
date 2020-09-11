import React from "react";
import img1 from "../../assets/img/imgRet7/img1.jpg";
import img2 from "../../assets/img/imgRet7/img2.jpg";
import img3 from "../../assets/img/imgRet7/img3.jpg";
import Content from "./Content";

class Card extends React.Component {
  render() {
    return (
      <>
        {/*container for layout */}
        <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto ">
          <div className="weaverz-ai-grid md:weaverz-ai-ml-40 md:weaverz-ai-mr-40 weaverz-ai-gap-x-0 xlg:weaverz-ai-grid-rows-1 lg:weaverz-ai-grid-cols-3 md:weaverz-ai-grid-cols-3 xs:weaverz-ai-grid-cols-1">
            {/* Colum -1 */}
            <div className="md:weaverz-ai-mt-0">
              <Content
                imgSrc={img3}
                heading="Fresh Look"
                content="The Fit Knit upper provides a fashion-forward aesthetic with a secure, distraction-free fit"
                heading1="Super springy"
                content1="Now 20% lighter, our DNA AMP midsole technology lets your foot spring"
                imgOrder="center"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
             </div>
             <div className="md:weaverz-ai-mt-10">
              <Content
                imgSrc={img1}
                heading="Super springy"
                content="Now 20% lighter, our DNA AMP midsole technology lets your foot spring off the ground with each step for speedy, efficient energy return"
                imgOrder="center"
                content1="We’ve shifted our focus beyond the feet to the most injury-prone part of a runner’s body"
                button={<button className="weaverz-ai-font-bold weaverz-ai-underline">Image button</button>}
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              </div>
              <div className="md:weaverz-ai-mt-20">
              <Content
                imgSrc={img2}
                heading="GuideRails® holistic support system"
                content="We’ve shifted our focus beyond the feet to the most injury-prone part of a runner’s bodyheck."
                imgOrder="center"
                content1="The Fit Knit upper provides a fashion-forward aesthetic with a secure, distraction-free fit"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default Card;
