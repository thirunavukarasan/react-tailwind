import React from "react";
import img1 from "../../assets/img/imgList/img1.jpg";
import Content from "../Image_List/content";

class Card extends React.Component {
  render() {
    return (
      <>
        {/*container for layout */}
        <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto">
          <div className="weaverz-ai-grid ">
            {/* Colum -1 */}
            <div ClassName="">
              <Content
                imgSrc={img1}
                heading="Information"
                list={<ul className="weaverz-ai-list-disc">
                  <li>Canvas construction</li>
                  <li>Chuck Taylor silhouette</li>
                  <li>Beefed up Panelling</li>
                  <li>Fortified lacing system</li>
                  <li>Textile & Synthetic Upper</li>
                  <li>Synthetic Sole</li>
                </ul>}
                imgOrder="first"
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
