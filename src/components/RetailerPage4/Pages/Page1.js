import React from "react";
import '../../RetailerPage4/Pages/Page1.css';
import img1 from "../../../assets/img/imgRet4/img/img1.webp";
import img2 from "../../../assets/img/imgRet4/img/img2.jpg";
import img3 from "../../../assets/img/imgRet4/img/img3.jpg";
import img4 from "../../../assets/img/imgRet4/img/img4.jpg";
import img5 from "../../../assets/img/imgRet4/img/img5.webp";
import img6 from "../../../assets/img/imgRet4/img/img6.jpg";
import img7 from "../../../assets/img/imgRet4/img/img7.webp";
import img8 from "../../../assets/img/imgRet4/img/img8.webp";
import Card from "../../RetailerPage4/Cards/Card";

class Page1 extends React.Component {
  render() {
    return (
      <>

        <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto ">
          <div className="weaverz-ai-grid xlg:weaverz-ai-grid-cols-1 lg:weaverz-ai-grid-cols-1 md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1 weaverz-ai-mt-4">
            <div ClassName="">
            <Card
                imgSrc={img1}
                title="MEASURED PERFORMANCE"
                heading="Rigorously Tested"
                content="Run confidently knowing we logged thousands of miles with 50+ amateur and pro athletes over a year-long testing period."
                imgOrder = "first"
              />
             
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <Card
                imgSrc={img2}
                title="TREE UPPER"
                heading="Seamless Durability"
                content="We knitted a unique one-piece upper made from FSC® Certified eucalyptus trees for a perfect fit that’s flexible, lightweight, and breathable in every step."
                imgOrder = "last"
              />
              
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <Card
                imgSrc={img3}
                title="SUGARCANE MIDSOLE"
                heading="Sweet Stability"
                content="Optimized for cushion, stability, and energy return, our dual-density SweetFoam™ midsole is made with the world’s first carbon negative green EVA."
                imgOrder = "first"
              />
             
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <Card
                imgSrc={img4}
                title=" WOOL HEEL LINING"
                heading="Cushioned Support"
                content="We added our signature ZQ Merino wool along the heel counter to center, support, and lock your foot in place."
                imgOrder = "last"
              />
             
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
          
        
            <Card
                imgSrc={img5}
                title="FLARED OUTSOLE"
                heading="Responsive Design"
                content="Designed with a new outsole geometry, our sole brings together SweetFoam™ and natural rubber traction pads for increased pronation control and stability."
                imgOrder = "first"
              />
            
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <Card
                imgSrc={img6}
                title="BIO-NYLON EYELETS"
                heading="Streamlined Fit"
                content="Our signature eyelets are embroidered directly to the internal structure for additional durability and support, anchoring the midfoot with a custom fit."
                imgOrder = "last"
              />
              
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <Card
                imgSrc={img7}
                title="CASTOR BEAN INSOLE"
                heading="Smooth Step-In"
                content=" Our removable castor bean sockliner emits less carbon than petroleum-based foam and is contoured to provide flexible, anatomical support."
                imgOrder = "first"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <Card
                imgSrc={img8}
                title="Trino™ Sprinter"
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

export default Page1;
