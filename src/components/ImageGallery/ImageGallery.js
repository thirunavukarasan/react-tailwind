import React, { useState, useEffect } from 'react';
import './ImageGallery.css';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.sliderIndex = 0;
        this.state = {
            sliderImages: this.props.sliderImages
        }
        console.log(this.sliderImages);
    }

    componentDidMount() {

        const sliderImages = this.state.sliderImages.map(value => value.isShow = false )
        this.setState((state) => {
            state.sliderImages = sliderImages;
            return state;
        })
        this.showSlides(this.sliderIndex)
    }

    plusSlides(n) {

        if (this.sliderIndex + n < 0) {
            return;
        }
        if (this.sliderIndex + n > this.state.sliderImages.length - 1) {
            return;
        }
        this.sliderIndex += n;
        this.showSlides(this.sliderIndex)
    }

    showSlides(n) {

        const sliderImages = this.state.sliderImages.map((value, index) => {
            value.isShow = false;
            if (index == n) {
                value.isShow = true;
            }
            return value;
        });
        this.setState((state) => {
            state.sliderImages = sliderImages;
            return state;
        });
    }

    currentSlide = n => {
        this.showSlides(n)
    }

    render() {
        return (
            <>
                <div className="weaverz-ai-container weaverz-ai-mx-auto weaverz-ai-p-2 ">
                    <div className="weaverz-ai-grid weaverz-ai-gap-y-1 weaverz-ai-gap-x-1 weaverz-ai-grid-cols-1 ">
                        <div className="weaverz-ai-bg-gray-300 weaverz-ai-mt-4 weaverz-ai-relative">
                            {
                                this.state.sliderImages.map((value, index) => {
                                    return <img key={index} className={"weaverz-ai-banner-img weaverz-ai-rounded " + (value.isShow == false ? 'weaverz-ai-hidden' : '')} src={value.imgUrl} style={{ width: "100%" }} />
                                })
                            }
                            <a className="weaverz-ai-absolute weaverz-ai-text-black weaverz-ai-ml-6 weaverz-ai-text-2xl weaverz-ai-left-x-0 weaverz-ai-ban-prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                            <a className="weaverz-ai-absolute weaverz-ai-text-black  weaverz-ai-mr-6  weaverz-ai-text-2xl weaverz-ai-right-0 weaverz-ai-ban-next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                            <div className="weaverz-ai-absolute weaverz-ai-inset-x-0 weaverz-ai-dot-pos">
                                <div className="weaverz-ai-text-center">
                                    {
                                        this.state.sliderImages.map((value, index) => {
                                            return <span key={index} className={"weaverz-ai-dot thumb-dot " + (value.isShow == false ? '' : 'weaverz-ai-active')} onClick={() => this.currentSlide(index)}></span>
                                        })
                                    }
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
