import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import RetailerPage1 from './components/RetailerPage1/RetailerPage1';
import RetailerPage2 from './components/RetailerPage2/RetailerPage2';
import RetailerPage3 from './components/Retailerpage3/RetailerPage3';
import Temp1 from './Template/Temp-1'



function App() {
	const imagesArr = getImagesData();
	return (
		<>
			{/* <ImageGallery sliderImages= {imagesArr}/> */}
			<Temp1/>
			<RetailerPage1/>
			<RetailerPage3/>
			<RetailerPage2/>
			
	
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
