import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faSuperscript } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import Content from './Content'
class Card extends React.Component {
  render() {
    return (
      <>
        <div className=" md:weaverz-ai-container md:weaverz-ai-mx-auto">
          <div className="weaverz-ai-text-center weaverz-ai-font-bold"><h5>The Benifits of Wool Runner Mizzles</h5></div>
          <div className="weaverz-ai-grid weaverz-ai-gap-x-10 xlg:weaverz-ai-grid-rows-2 xlg:weaverz-ai-grid-cols-4 md:weaverz-ai-grid-cols-4 sm:weaverz-ai-grid-cols-2 xs:weaverz-ai-grid-cols-2 ">
            <div ClassName="">
              <Content
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                content="The Fit Knit upper provides"
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
             </div>
             <div className="">
              <Content
                icon={<FontAwesomeIcon icon={faSpaceShuttle} >  </FontAwesomeIcon>}
                content="We knitted a unique one-piece upper made"
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> 
             </div>
            <div ClassName="">
            <Content
                icon={<FontAwesomeIcon icon={faDatabase} >  </FontAwesomeIcon>}
                content="Optimized for cushion, stability, and energy return"
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> 
             </div>
             <div className="">
              <Content
                icon={<FontAwesomeIcon icon={faArrowsAlt} >  </FontAwesomeIcon>}
                content="Run confidently knowing thousands"
              />
               </div>
                  <div ClassName="">
              <Content
                icon={<FontAwesomeIcon icon={faShoppingCart} >  </FontAwesomeIcon>}
                content="We added our signature ZQ Merino wool"
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> 
             </div>
             <div className="">
             <Content
                icon={<FontAwesomeIcon icon={faLightbulb} >  </FontAwesomeIcon>}
                content="Designed with a new outsole geometry"
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> </div>
            <div ClassName="">
              <Content
                icon={<FontAwesomeIcon icon={faSuperscript} >  </FontAwesomeIcon>}
                content="Signature eyelets are embroidered"
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> 
             </div>
             <div className="">
             <Content
                icon={<FontAwesomeIcon icon={faDesktop} >  </FontAwesomeIcon>}
                content="Our removable castor bean sockliner"
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> </div>
          </div>
          </div>
      </>
    );
  }
}
export default Card;
