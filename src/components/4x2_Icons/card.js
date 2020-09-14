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
          <h5 className="weaverz-ai-text-center weaverz-ai-font-bold  weaverz-ai-p-4">The Benifits of Wool Runner Mizzles</h5>
          <div className="weaverz-ai-grid md:weaverz-ai-grid-cols-4 weaverz-ai-grid-cols-2">
            <div ClassName="">
              <Content
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                content="The Fit Knit upper provides"
              />
             </div>
             <div className="">
              <Content
                icon={<FontAwesomeIcon icon={faSpaceShuttle} >  </FontAwesomeIcon>}
                content="We knitted a unique one-piece upper made"
              />
             </div>
            <div ClassName="">
            <Content
                icon={<FontAwesomeIcon icon={faDatabase} >  </FontAwesomeIcon>}
                content="Optimized for cushion, stability, and energy return"
              />
        
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
                content="We added our signature ZQ Merino wool ddds sdsdsd eeee"
              />
  
             </div>
             <div className="">
             <Content
                icon={<FontAwesomeIcon icon={faLightbulb} >  </FontAwesomeIcon>}
                content="Designed with a new outsole geometry"
              />
             </div>
            <div ClassName="">
              <Content
                icon={<FontAwesomeIcon icon={faSuperscript} >  </FontAwesomeIcon>}
                content="Signature eyelets are embroidered"
              />
             </div>
             <div className="">
             <Content
                icon={<FontAwesomeIcon icon={faDesktop} >  </FontAwesomeIcon>}
                content="Our removable castor bean sockliner"
              />
             </div>
          </div>
          </div>
      </>
    );
  }
}
export default Card;
