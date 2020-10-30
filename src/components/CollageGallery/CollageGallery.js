import React from 'react';
import './CollageGallery.css';
// import { DynamicCollage, StaticCollage } from 'react-native-images-collage';
//  import Photostream from 'react-photostream';
import { ReactPhotoCollage } from "react-photo-collage";
import Gallery from "react-photo-gallery";
import img1 from "../../assets/img/collageGallery/img1.jpg"
import img2 from "../../assets/img/collageGallery/img2.jpg"
import img3 from "../../assets/img/collageGallery/img3.jpg"
import img4 from "../../assets/img/collageGallery/img4.jpg"
import img5 from "../../assets/img/collageGallery/img5.jpg"
import img6 from "../../assets/img/collageGallery/img6.jpg"

// const photos = [
//     {
//         src: img1,
//         srcSet: [
//           "img1/500x375 500w",
//           "img1/800x600 800w",
//           "img1/1024x768 1024w",
//           "img1/1600x1200 1600w"
//         ],
//         sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
//         width: 5,
//         height: 4
//       },
//       {
//         src: img2,
//         srcSet: [
//           "https://source.unsplash.com/Dm-qxdynoEc/500x500 500w",
//           "https://source.unsplash.com/Dm-qxdynoEc/800x800 800w",
//           "https://source.unsplash.com/Dm-qxdynoEc/1024x1024 1024w",
//           "https://source.unsplash.com/Dm-qxdynoEc/1600x1600 1600w"
//         ],
//         sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
//         width: 1,
//         height: 1
//       },
//       {
//         src: img3,
//         srcSet: [
//           "https://source.unsplash.com/qDkso9nvCg0/375x500 375w",
//           "https://source.unsplash.com/qDkso9nvCg0/600x800 600w",
//           "https://source.unsplash.com/qDkso9nvCg0/768x1024 768w",
//           "https://source.unsplash.com/qDkso9nvCg0/1200x1600 1200w"
//         ],
//         sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
//         width: 3,
//         height: 4
//       },
//       {
//         src: img4,
//         srcSet: [
//           "https://source.unsplash.com/iecJiKe_RNg/375x500 375w",
//           "https://source.unsplash.com/iecJiKe_RNg/600x800 600w",
//           "https://source.unsplash.com/iecJiKe_RNg/768x1024 768w",
//           "https://source.unsplash.com/iecJiKe_RNg/1200x1600 1200w"
//         ],
//         sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
//         width: 3,
//         height: 4
//       },
//       {
//         src: img5,
//         srcSet: [
//           "https://source.unsplash.com/epcsn8Ed8kY/375x500 375w",
//           "https://source.unsplash.com/epcsn8Ed8kY/600x800 600w",
//           "https://source.unsplash.com/epcsn8Ed8kY/768x1024 768w",
//           "https://source.unsplash.com/epcsn8Ed8kY/1200x1600 1200w"
//         ],
//         sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
//         width: 3,
//         height: 4
//       },
//       {
//         src:img6,
//         srcSet: [
//           "https://source.unsplash.com/NQSWvyVRIJk/500x375 500w",
//           "https://source.unsplash.com/NQSWvyVRIJk/800x600 800w",
//           "https://source.unsplash.com/NQSWvyVRIJk/1024x768 1024w",
//           "https://source.unsplash.com/NQSWvyVRIJk/1600x1200 1600w"
//         ],
//         sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
//         width: 4,
//         height: 3
//       }
//   ];
const setting = {
    // width: '1264px',
    height: ['400px', '300px'],
    layout: [2, 3],
    photos: [
      { src: img5 },
      { src: img2 },
      { src: img3 },
      { src: img4 },
      { src: img1 },
      { src: img6 },
    ],
    showNumOfRemainingPhotos: true
  };
function CollageGallery() {
    return (
        <>
        <div className="weaverz-ai-container weaverz-ai-mx-auto weaverz-ai-p-2" >
        {/* <Gallery photos={photos} direction={"column"}/> */}
        <ReactPhotoCollage  {...setting}/>
        </div>
        </>
    );
}

export default CollageGallery;
