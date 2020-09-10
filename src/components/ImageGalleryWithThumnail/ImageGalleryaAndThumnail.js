import React, { useState, useEffect } from 'react';
import './ImageGalleryaAndThumnail.css';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.sliderIndex = 0;

        this.state = {
            sliderImagesForBanner: this.props.sliderImages
        }
    }

    componentDidMount() {
        const sliderImages = this.state.sliderImagesForBanner.map((value,index) => {
            value.isShow = false 
            value.thumnail = index <= 4 ? true : false
            value.blur = false
        })
        this.setState((state) => {
            state.sliderImagesForBanner = sliderImages;
            return state;
        })
        this.showSlides(this.sliderIndex)
    }
    
    plusSlides(n) {
        if (this.sliderIndex + n < 0) {
            return;
        }
        if (this.sliderIndex + n > this.state.sliderImagesForBanner.length - 1) {
            return;
        }
        this.sliderIndex += n;
        this.maxIndexVal += n;
        this.minIndexVal += n;
        console.log(this.sliderIndex)
        this.showSlides(this.sliderIndex)
    }

    showSlides(n) {

        const sliderImages = this.state.sliderImagesForBanner.map((value, index) => {
            value.isShow = false;
            value.blur = false;
            if (index == n) {
                value.isShow = true;
                value.blur = true;
            }
            return value;
        });
        if (n > 4) {
            this.state.sliderImagesForBanner[n-5].thumnail = false;
            this.state.sliderImagesForBanner[n].thumnail = true;
        }
        if ( n <= 2) {
            this.state.sliderImagesForBanner[n + 5].thumnail = false;
            this.state.sliderImagesForBanner[n].thumnail = true;
        }
        this.setState((state) => {
            state.sliderImagesForBanner = sliderImages;
            return state;
        });
        console.log(this.state.sliderImagesForBanner)
    }
    currentSlide = (n) => {
        this.showSlides(n)
    }

    render() {
        return (
            <>
                <div className="weaverz-ai-container weaverz-ai-mx-auto weaverz-ai-p-2 ">
                    <div className="weaverz-ai-grid weaverz-ai-gap-y-1 weaverz-ai-gap-x-1 weaverz-ai-grid-cols-1 ">
                        {/* <div className="weaverz-ai-mt-4 weaverz-ai-relative">
                            {
                                this.state.sliderImagesForBanner.map((value, index) => {
                                    return <img key={index} className={"weaverz-ai-banner-img weaverz-ai-rounded " + (value.isShow == false ? 'weaverz-ai-hidden' : '')} src={value.imgUrl} style={{ width: "100%" }} />
                                })
                            }
                            <a className="weaverz-ai-absolute weaverz-ai-text-black weaverz-ai-ml-6 weaverz-ai-text-2xl weaverz-ai-left-x-0 weaverz-ai-ban-prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                            <a className="weaverz-ai-absolute weaverz-ai-text-black  weaverz-ai-mr-6  weaverz-ai-text-2xl weaverz-ai-right-0 weaverz-ai-ban-next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                        </div> */}
                        <div className="weaverz-ai-bg-gray-300 weaverz-ai-mt-4 weaverz-ai-relative">
                            {
                                this.state.sliderImagesForBanner.map((value, index) => {
                                    return <img key={index} className={"weaverz-ai-banner-img weaverz-ai-rounded " + (value.isShow == false ? 'weaverz-ai-hidden' : '')} src={value.imgUrl} style={{ width: "100%" }} />
                                })
                            }
                            <a className="weaverz-ai-absolute weaverz-ai-text-black weaverz-ai-ml-6 weaverz-ai-text-2xl weaverz-ai-left-x-0 weaverz-ai-ban-prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                            <a className="weaverz-ai-absolute weaverz-ai-text-black  weaverz-ai-mr-6  weaverz-ai-text-2xl weaverz-ai-right-0 weaverz-ai-ban-next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                            <div className="weaverz-ai-absolute weaverz-ai-inset-x-0 weaverz-ai-dot-pos weaverz-ai-block md:weaverz-ai-hidden">
                                <div className="weaverz-ai-text-center">
                                    {
                                        this.state.sliderImagesForBanner.map((value, index) => {
                                            return <span key={index} className={"weaverz-ai-dot thumb-dot " + (value.isShow == false ? '' : 'weaverz-ai-active')} onClick={() => this.currentSlide(index)}></span>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="weaverz-ai-grid weaverz-ai-gap-y-1 weaverz-ai-gap-x-1 weaverz-ai-grid-cols-1 weaverz-ai-hidden md:weaverz-ai-block">
                            <div className="weaverz-ai-mt-4 weaverz-ai-relative">
                                <ul>
                                    {
                                    this.state.sliderImagesForBanner.map((value,index) => {
                            return  <li className={"weaverz-ai-hover " + (value.blur ==  false ? 'weaverz-ai-opacity-25 ' : '')}>
                                        <img className={"weaverz-ai-inline weaverz-ai-p-2 " +  (value.thumnail ==  false ? 'weaverz-ai-hidden' : '')} key={index} src={value.imgUrl} style={{ width: "20%" }} onClick={() => this.currentSlide(index)}></img>
                                    </li>
                                        })
                                     }
                                </ul>
                                <div className=""> 
                                    <a className=" weaverz-ai-absolute weaverz-ai-text-black weaverz-ai-ml-6 weaverz-ai-text-xl weaverz-ai-left-x-0 weaverz-ai-ban-prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                                    <a className="weaverz-ai-absolute weaverz-ai-text-black  weaverz-ai-mr-6  weaverz-ai-text-xl weaverz-ai-right-0 weaverz-ai-ban-next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ImageGallery;
