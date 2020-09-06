import React from "react";
import img1 from "../../../assets/img/img1.jpg";
import img2 from "../../../assets/img/img2.jpg";
import Content1 from "../TopSec/Content1"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Card1 extends React.Component {
  render() {
    return (
      <>

        <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto ">
          <div className="weaverz-ai-grid xlg:weaverz-ai-grid-cols-1 lg:weaverz-ai-grid-cols-1 md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1 weaverz-ai-mt-4">
            <div ClassName="">
            <Content1
                imgSrc={img1}
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                heading="Rigorously Tested"
                content="Run confidently knowing we logged thousands of miles with 50+ amateur and pro athletes over a year-long testing period."
                imgOrder = "first"
              />
             
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <Content1
                imgSrc={img2}
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                heading="Shop Trino™ Sprinters" 
                content="Our performance sock is engineered to pair with the Dasher, combining breathability, durability, and design for your optimal, distraction free run."
                imgOrder = "last"
              /> 
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card1;
