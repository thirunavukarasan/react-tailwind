import React from 'react'
import Content from './Content';
import img1 from '../../assets/img/imgRet7/img1.jpg';
import img2 from '../../assets/img/imgRet7/img2.jpg';
import img3 from '../../assets/img/imgRet7/img3.jpg';
class Card extends React.Component {
  render() {
    return (
      <>
        <div className=" md:weaverz-ai-container md:weaverz-ai-mx-auto">
          <div className="weaverz-ai-grid xlg:weaverz-ai-grid-rows-2 xlg:weaverz-ai-grid-cols-3 md:weaverz-ai-grid-cols-3 xs:weaverz-ai-grid-cols-1 ">
            <div ClassName="">
              <Content
                imgSrc={img1}
                heading="Good looking"
                content="The Fit Knit upper provides"
            
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
             </div>
             <div className="">
              <Content
               imgSrc={img2}
                heading="Branded One"
                content="We knitted a unique one-piece upper made"
                
              />
             <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr> 
             </div>
            <div ClassName="">
            <Content
             imgSrc={img3}
                heading="Flexible Shoes"
                content="Optimized for cushion, stability, and energy return"
                
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
