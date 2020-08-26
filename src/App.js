import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import RetailerPage from './components/RetailerPage/RetailerPage';


function App() {
	const imagesArr = getImagesData();
	return (
		<>
			{/* <ImageGridView images={imagesArr} viewHeading="Image Grid View Heading"  /> */}

			<ImageGallery sliderImages= {imagesArr}/>

			<RetailerPage />
		</>
	);
}

function getImagesData() {
	return [
		{
			imgUrl : 'https://picsum.photos/id/237/700/300'
		},
		{
			imgUrl : 'https://picsum.photos/id/100/700/300'
		},
		{
			imgUrl : 'https://picsum.photos/id/90/700/300'
		},
		{
			imgUrl : 'https://picsum.photos/id/268/700/300'
		},
		{
			imgUrl : 'https://picsum.photos/id/124/700/300'
		},
		{
			imgUrl : 'https://picsum.photos/id/85/700/300'
		}

	]
}

export default App;
