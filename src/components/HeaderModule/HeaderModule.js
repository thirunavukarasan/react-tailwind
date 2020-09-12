import React from "react";
import './HeaderModule.css'
import img1 from "../../assets/img/HeaderModule/nike2Croped.jpg";
import img2 from "../../assets/img/HeaderModule/ShoeNike.jpg";
import img3 from "../../assets/img/HeaderModule/Logo1.jpg";
import img4 from "../../assets/Template3/img5.jpg"



class HeaderModule1 extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/*container for layout */}
        <div className="weaverz-ai-grid weaverz-ai-grid-cols-1 weaverz-ai-bg-black weaverz-ai-mb-2">
          <img className="weaverz-ai-h-24 " src={img3} alt="photo" style={{ width: "" }} />
        </div>
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-3  md:weaverz-ai-grid-cols-3 weaverz-ai-grid-cols-1">
          <div className="weaverz-ai-col-span-2 weaverz-ai-bg-black weaverz-ai-text-center">
            <div className="weaverz-ai-mt-0 sm:weaverz-ai-mt-0 md:weaverz-ai-mt-20">
              <h3 className="weaverz-ai-text-white">Nike Air Max 270</h3>
              <h3 className="weaverz-ai-text-gray-700 weaverz-ai-py-4">Style Code: CV24151-515</h3>
            </div>
          </div>
          <div className="">
            <img className="weaverz-ai-fit md:weaverz-ai-h-62" src={img4} alt="photo"/>
          </div>
        </div>
      </>
    );
  }
}
export default HeaderModule1;
