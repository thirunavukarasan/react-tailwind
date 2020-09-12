import React, { useState, useEffect } from "react";
import "./CollageGalleryFormat2.css";
import img1 from "../../assets/img/collageGallery/img1.jpg";
import img2 from "../../assets/img/collageGallery/img2.jpg";
import img3 from "../../assets/img/collageGallery/img3.jpg";
import img4 from "../../assets/img/collageGallery/img4.jpg";
import img5 from "../../assets/img/collageGallery/img5.jpg";
import img6 from "../../assets/img/collageGallery/img6.jpg";

class CollageGallery extends React.Component {
  render() {
    return (
      <>
        <div className="weaverz-ai-container weaverz-ai-mx-auto weaverz-ai-p-2 ">
          <div className="weaverz-ai-grid weaverz-ai-gap-y-1 weaverz-ai-gap-x-1 weaverz-ai-grid-cols-1 ">
            <div className="gallery">
              <div className="gallery__item gallery__item--1">
                <img src={img5} alt="Gallery image 2" class="gallery__img" />
              </div>
              <div className="gallery__item gallery__item--2">
                <img src={img4} alt="Gallery image 2" class="gallery__img" />
              </div>
              <div className="gallery__item gallery__item--3">
                <img src={img6} alt="Gallery image 2" class="gallery__img" />
              </div>
              <div className="gallery__item gallery__item--4">
                <img src={img4} alt="Gallery image 2" class="gallery__img" />
              </div>
              <div className="gallery__item gallery__item--5">
                <img src={img3} alt="Gallery image 2" class="gallery__img" />
              </div>
              <div className="gallery__item gallery__item--6">
                <img src={img1} alt="Gallery image 2" class="gallery__img" />
              </div>
            </div>
          </div>
        </div>
        
        {/*Approach Two */}
        {/* <div className="weaverz-ai-container weaverz-ai-mx-auto weaverz-ai-p-2">
          <div className="weaverz-ai-grid weaverz-ai-gap-y-1 weaverz-ai-gap-x-1 weaverz-ai-grid-cols-1">
            <div
              class="diagonalHover first"
              style={{ backgroundImage: "url(" + img3 + ")" }}
            ></div>
            <div
              class="diagonalHover second"
              style={{ backgroundImage: "url(" + img4 + ")" }}
            ></div>
          </div>
        </div> */}
      </>
    );
  }
}

export default CollageGallery;
