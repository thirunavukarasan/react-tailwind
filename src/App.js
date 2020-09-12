import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ThumnailGallery from './components/RetailerPage6/ThumnailGallery/ImageGallery';
import RetailerPage1 from './components/RetailerPage1/RetailerPage1';
import RetailerPage2 from './components/RetailerPage2/RetailerPage2';
import RetailerPage3 from './components/Retailerpage3/RetailerPage3';
import RetailerPage4 from './components/RetailerPage4/Pages/Page1';
import Temp1 from './Template/Temp-1'
import Icons4X2 from './components/4x2_Icons/card'
import InformationModule1 from './components/InformationModule1/InformationModule1'
import VerticalImagesForTem6 from './components/Vertical_slider_image/card'
import Vertical_ImgComTemp6 from './components/Vertical_Img-T-D/card2'
import Horizondal_ImgComTemp6 from './components/Horizon_Img-T-D/card1'
import Icons3x1 from './components/Icons3x1/Icons3X1'
import Temp6 from './Template/Temp-6'
import CollageGallery1 from './components/CollageGalleryFormat1/CollageGalleryFormat1'
import CollageGallery2 from './components/CollageGalleryFormat2/CollageGalleryFormat2'


function App() {
	const imagesArr = getImagesData();
	return (
		<>
			{/* <Temp6 sliderImages= {imagesArr}/> */}
			{/* <Temp1/> */}
			<CollageGallery1/>
			{/* <CollageGallery2/> */}
		</>

	);
}

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

export default App;
