import React, { useState, useEffect } from "react";
import "./RetailerPage.css";
import img1 from "../../assets/img/img1.webp";
import img2 from "../../assets/img/img2.webp";
import img3 from "../../assets/img/img3.webp";
import img4 from "../../assets/img/img4.webp";
import img5 from "../../assets/img/img5.webp";
import img6 from "../../assets/img/img6.webp";
import img7 from "../../assets/img/img7.webp";
import img8 from "../../assets/img/img8.webp";
import img9 from "../../assets/img/img9.webp";

class Testretailer extends React.Component {
  render() {
    return (
      <>
        {/*container for layout */}
        <div className=" md:weaverz-ai-container md:weaverz-ai-mx-auto">
          <h3 className="weaverz-ai-text-center weaverz-ai-mt-10">Benefits</h3>
          <div class="weaverz-ai-grid weaverz-ai-gap-x-24 sm:weaverz-ai-grid-flow-row md:weaverz-ai-grid-flow-col sm:weaverz-ai-grid-rows-8 md:weaverz-ai-grid-rows-4">
            <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-2">
              <div className=" md:weaverz-ai-py-10 md:weaverz-ai-mt-10 weaverz-ai-p-4 md:weaverz-ai-p-0">
                <h6 className="weaverz-ai-font-bold weaverz-ai-text-left">
                  Fresh look
                </h6>
                <p className="weaverz-ai-text-left weaverz-ai-text-sm ">
                  The Fit Knit upper provides a fashion-forward aesthetic with a
                  secure, distraction-free fit
                </p>
              </div>
              <div className="weaverz-ai-imgSec weaverz-ai-order-first sm:weaverz-ai-order-first md:weaverz-ai-order-none ">
                <div ClassName="">
                  <img src={img3} alt="Logo" style={{ width: "100%" }} />
                </div>
              </div>
							<div className="weaverz-ai-imgSec weaverz-ai-order-first sm:weaverz-ai-order-first md:weaverz-ai-order-none ">
                <div ClassName="">
                  <img src={img3} alt="Logo" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2  sm:weaverz-ai-grid-cols-2">
              <div className="weaverz-ai-imgSec">
                <div>
                  <img src={img2} alt="Logo" style={{ width: "100%" }} />
                </div>
              </div>
              <div className="md:weaverz-ai-mt-20 weaverz-ai-p-4 md:weaverz-ai-p-0">
                <h6 className="weaverz-ai-font-bold ">Responsive ride</h6>
                <p className="weaverz-ai-text-left weaverz-ai-text-sm">
                  The Fit Knit upper provides a fashion-forward aesthetic with a
                  secure, distraction-free fit
                </p>
              </div>
            </div>
            <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-2">
              <div className=" md:weaverz-ai-py-10 md:weaverz-ai-mt-10 weaverz-ai-p-4 md:weaverz-ai-p-0">
                <h6 className="weaverz-ai-font-bold weaverz-ai-text-left">
                  Fresh look
                </h6>
                <p className="weaverz-ai-text-left weaverz-ai-text-sm">
                  The Fit Knit upper provides a fashion-forward aesthetic with a
                  secure, distraction-free fit
                </p>
              </div>
              <div className="weaverz-ai-imgSec weaverz-ai-order-first sm:weaverz-ai-order-first md:weaverz-ai-order-none">
                <div>
                  <img src={img1} alt="Logo" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2  sm:weaverz-ai-grid-cols-2">
              <div className="weaverz-ai-imgSec">
                <div>
                  <img src={img9} alt="Logo" style={{ width: "100%" }} />
                </div>
              </div>
              <div className="md:weaverz-ai-mt-20 weaverz-ai-p-4 md:weaverz-ai-p-0">
                <h6 className="weaverz-ai-font-bold ">Responsive ride</h6>
                <p className="weaverz-ai-text-left weaverz-ai-text-sm">
                  The Fit Knit upper provides a fashion-forward aesthetic with a
                  secure, distraction-free fit
                </p>
              </div>
            </div>
            <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-2">
              <div className=" md:weaverz-ai-py-10 md:weaverz-ai-mt-10 weaverz-ai-p-4 md:weaverz-ai-p-0">
                <h6 className="weaverz-ai-font-bold weaverz-ai-text-left">
                  Fresh look
                </h6>
                <p className="weaverz-ai-text-left weaverz-ai-text-sm">
                  The Fit Knit upper provides a fashion-forward aesthetic with a
                  secure, distraction-free fit
                </p>
              </div>
              <div className="weaverz-ai-imgSec weaverz-ai-order-first sm:weaverz-ai-order-first md:weaverz-ai-order-none">
                <div>
                  <img src={img4} alt="Logo" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2  sm:weaverz-ai-grid-cols-2">
              <div className="weaverz-ai-imgSec">
                <div>
                  <img src={img5} alt="Logo" style={{ width: "100%" }} />
                </div>
              </div>
              <div className="md:weaverz-ai-mt-20 weaverz-ai-p-4 md:weaverz-ai-p-0">
                <h6 className="weaverz-ai-font-bold ">Responsive ride</h6>
                <p className="weaverz-ai-text-left weaverz-ai-text-sm">
                  BioMoGo DNA combines with the Green Rubber outsole to create a
                  springy feel.
                </p>
              </div>
            </div>
            <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-2">
              <div className=" md:weaverz-ai-py-10 md:weaverz-ai-mt-10 weaverz-ai-p-4 md:weaverz-ai-p-0">
                <h6 className="weaverz-ai-font-bold weaverz-ai-text-left">
                  Quick transitions
                </h6>
                <p className="weaverz-ai-text-left weaverz-ai-text-sm">
                  An updated arrow-point pattern in the outsole lets your foot
                  move from heel to toe quickly.
                </p>
              </div>
              <div className="weaverz-ai-imgSec weaverz-ai-order-first sm:weaverz-ai-order-first md:weaverz-ai-order-none">
                <div>
                  <img src={img6} alt="Logo" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2  sm:weaverz-ai-grid-cols-2">
              <div className="weaverz-ai-imgSec">
                <div>
                  <img src={img9} alt="Logo" style={{ width: "100%" }} />
                </div>
              </div>
              <div className="md:weaverz-ai-mt-20 weaverz-ai-p-4 md:weaverz-ai-p-0">
                <h6 className="weaverz-ai-font-bold ">Responsive ride</h6>
                <p className="weaverz-ai-text-left weaverz-ai-text-sm">
                  The Fit Knit upper provides a fashion-forward aesthetic with a
                  secure, distraction-free fit
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Testretailer;
