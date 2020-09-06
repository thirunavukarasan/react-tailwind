import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Content from './Content'

class Card extends React.Component {
  render() {
    return (
      <>

        <div className=" md:weaverz-ai-container md:weaverz-ai-mx-auto">
          <div className="weaverz-ai-gee">
          <div className="weaverz-ai-grid weaverz-ai-gap-x-10 xlg:weaverz-ai-grid-cols-4 lg:weaverz-ai-grid-cols-4 md:weaverz-ai-grid-cols-4 sm:weaverz-ai-grid-cols-2 weaverz-ai-mt-4">
            {/* Colum -1 */}
            <div ClassName="">
              <Content
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                content="The Fit Knit upper provides"
              
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <Content
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                content="The Fit Knit upper provides"
              
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> </div>

            {/* Colum -2 */}
            <div ClassName="">
            <Content
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                content="The Fit Knit upper provides"
              
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> 
              <Content
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                content="The Fit Knit upper provides"
              
              />
               </div>
                {/* Colum -3 */}
            <div ClassName="">
              <Content
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                content="The Fit Knit upper provides"
              
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> 
             <Content
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                content="The Fit Knit upper provides"
              
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> </div>

            {/* Colum -4 */}
            <div ClassName="">
              <Content
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                content="The Fit Knit upper provides"
              
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> 
             <Content
                icon={<FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>}
                content="The Fit Knit upper provides"
              
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> </div>

           
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
