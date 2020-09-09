import React from "react";
import img1 from "../../assets/Template3/img1.jpg";
import img2 from "../../assets/Template3/img2.jpg";
import img3 from "../../assets/Template3/img3.jpg";
import img4 from "../../assets/Template3/img4.jpg";
import img5 from "../../assets/Template3/img5.jpg";
import img6 from "../../assets/Template3/img6.jpg";
import Topsec from "../RetailerPage6/TopSec/card1"
import Icon from "../RetailerPage6/Icon/card"
import ThumnailGallerry from "../RetailerPage6/ThumnailGallery/ImageGallery"


class RetailerPage6 extends React.Component {
  constructor() {
    super()
    let imgArry = getImagesData()
  } 
  render() {
    return (
      <>
        {/*container for layout */}
        <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto">
        <h3 className="weaverz-ai-text-center">Template 6</h3>
          <div className="weaverz-ai-grid weaverz-ai-gap-x-24 xlg:weaverz-ai-grid-cols-1 lg:weaverz-ai-grid-cols-1 md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1 weaverz-ai-mt-4 weaverz-ai-bg-500">
            {/* Colum -1 */}
            <div ClassName="">
                <Topsec/>
                <Icon/>
                {/* <ThumnailGallerry sliderImages={this.imgArry}/> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RetailerPage6;


function getImagesData() {
	return [
		{
			imgUrl : "https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw39f81968/images/ProductImages/110343/110343_012_l_WR.jpg?sw=900"
		},
		{
			imgUrl : "https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw4bd0dee1/images/ProductImages/110343/110343_012_a_WR.jpg?sw=900"
		},
		{
			imgUrl : "https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dwf6b0dfc8/images/ProductImages/110343/110343_012_o_WR.jpg?sw=900"
		},
		{
			imgUrl : "https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dwcf971a04/images/ProductImages/110343/110343_012_h_WR.jpg?sw=900"
		},
		{
			imgUrl : "https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw7869e117/images/ProductImages/110343/110343_012_m_WR.jpg?sw=900"
		},
		{
			imgUrl : "https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw6b723b15/images/ProductImages/110343/110343_012_s_WR.jpg?sw=900"
		},
		{
			imgUrl : "https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw4bd0dee1/images/ProductImages/110343/110343_012_a_WR.jpg?sw=900"
		},
		{
			imgUrl : "https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dwf6b0dfc8/images/ProductImages/110343/110343_012_o_WR.jpg?sw=900"
		}
	
	
	]
}