import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import RetailerPage1 from './components/RetailerPage1/RetailerPage1';
import RetailerPage2 from './components/RetailerPage2/RetailerPage2';
import RetailerPage3 from './components/Retailerpage3/RetailerPage3';
import RetailerPage4 from  '../src/components/RetailerPage4/Pages/Page1';
<<<<<<< HEAD
import Icon4x2 from  './components/4x2_Icons/card';
import V_Img_T_D from  '../src/components/Vertical_Img-T-D/card2';
import H_Img_T_D from  '../src/components/Horizon_Img-T-D/card1';
import Vertical_Image_Slider from  '../src/components/Vertical_slider_image/card';
=======
import Shoetemplate from "./components/Shoetemplate/Shoetemplate"
import RetailerPage6 from  '../src/components/RetailerPage6/RetailerPage6';
import RetailerPage6a from  '../src/components/RetailerPage6/TopSec/card1';
import RetailerPage6b from  '../src/components/RetailerPage6/TopSec/card2';
import RetailerPage7 from  '../src/components/RetailerPage7/card';
import ImageGallerwithThumnail from './components/ImageGalleryWithThumnail/ImageGalleryaAndThumnail'
import ThumNailGallery from './components/RetailerPage6/ThumnailGallery/ImageGallery'
>>>>>>> 9f2cf503b964022a124ac74f9729bd6dc17bbd2d



function App() {
	const imagesArr = getImagesData();
	return (
		<>
			{/* <ImageGallery sliderImages= {imagesArr}/> */}
			<RetailerPage2 />		
			<ImageGallerwithThumnail sliderImages= {imagesArr}/>

<<<<<<< HEAD
			 <ImageGallery sliderImages= {imagesArr}/> 
		  <ImageGallery sliderImages= {imagesArr}/> 
			<Shoetemplate />
			<RetailerPage1 />
			<hr></hr>
			<RetailerPage2 />
			<hr></hr>
			<RetailerPage3/>
			<RetailerPage4/>
			<H_Img_T_D/>
		   <V_Img_T_D/>
		<Vertical_Image_Slider/>
	       */}
		  <Icon4x2/>
		   
=======
>>>>>>> 9f2cf503b964022a124ac74f9729bd6dc17bbd2d
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
