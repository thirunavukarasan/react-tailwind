import React from "react";
import img2 from "../../../assets/img/imgRet6/img2.jpg";
import Content2 from "../TopSec/Content2"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Card1 extends React.Component {
  render() {
    return (
      <>

        <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto ">
          <div className="weaverz-ai-grid xlg:weaverz-ai-grid-cols-1 lg:weaverz-ai-grid-cols-1 md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1 ">
              <Content2
                imgSrc={img2}               
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                heading="Shop Trino™ Sprinters" 
                content="Our performance sock is engineered to pair with the Dasher, combining breathability, durability, and design for your optimal, distraction free run."
                imgOrder = "last"
              /> 
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
          </div>
        </div>
      </>
    );
  }
}

export default Card1;
