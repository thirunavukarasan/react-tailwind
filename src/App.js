import React from 'react';
import './App.css';
import ImageGridView from './components/ImageGrid/ImageGridView';
import ImageSlider from './components/ImageSlider/ImageSlider';


function App() {
	const imagesArr = getImagesData();
	return (
		<>
			{/* <ImageGridView images={imagesArr} viewHeading="Image Grid View Heading"  /> */}

			<ImageSlider sliderImages= {imagesArr}/>
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
