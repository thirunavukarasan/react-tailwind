import React, { useState, useEffect } from 'react';
import './imageSlider.css';

class ImageSlider extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)
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
                <div className="tru-container tru-mx-auto tru-p-2 ">
                    <div className="tru-grid tru-gap-y-1 tru-gap-x-1 tru-grid-cols-1 ">
                        <div className="tru-bg-gray-300 tru-mt-4 tru-relative">
                            {
                                this.state.sliderImages.map((value, index) => {
                                    return <img key={index} className={"tru-banner-img tru-rounded " + (value.isShow == false ? 'tru-hidden' : '')} src={value.imgUrl} style={{ width: "100%" }} />
                                })
                            }
                            <a className="tru-absolute tru-text-white tru-ml-6 tru-text-2xl tru-inset-x-0 tru-ban-prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                            <a className="tru-absolute tru-text-white  tru-mr-6  tru-text-2xl tru-right-0 tru-ban-next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                            <div className="tru-absolute tru-inset-x-0 tru-dot-pos">
                                <div className="tru-text-center">
                                    {
                                        this.state.sliderImages.map((value, index) => {
                                            return <span key={index} className={"tru-dot thumb-dot " + (value.isShow == false ? '' : 'tru-active')} onClick={() => this.currentSlide(index)}></span>
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


// const ImageSlider = props => {

//     const [sliderIndex, setSliderIndex] = useState(0);

//     props.sliderImages.map((value, index) => {
//         value.isShow = false;

//         if (index == sliderIndex) {
//             value.isShow = true;
//         }
//         return value;
//     })


//     const [sliderImages, setSliderImages] = useState(props.sliderImages);



//     const plusSlides = n => {

//         if (sliderIndex + n < 0) {
//             return;
//         }
//         if (sliderIndex + n > sliderImages.length - 1) {
//             return;
//         }

//         setSliderIndex(sliderIndex + n)

//         showSlides(sliderIndex);
//     }

//     const showSlides = n => {

//         sliderImages.map((value, index) => {
//             value.isShow = false;
//             if (index == n) {
//                 value.isShow = true;
//             }

//             return value;
//         });

//         setSliderImages(sliderImages);

//     }

//     function currentSlide(n) {
//         console.log(n);

//         setSliderIndex(n)
//         setSliderImages(sliderImages);

//     }



//     return (
//         <>
//             <div className="tru-container tru-mx-auto tru-p-2 ">
//                 <div className="tru-grid tru-gap-y-1 tru-gap-x-1 tru-grid-cols-1 ">
//                     <div className="tru-bg-gray-300 tru-mt-4 tru-relative">
//                         {
//                             sliderImages.map((value, index) => {
//                                 return <img key={index} className={"tru-banner-img tru-rounded " + (value.isShow == false ? 'tru-hidden' : '')} src={value.imgUrl} style={{ width: "100%" }} />
//                             })
//                         }
//                         <a className="tru-absolute tru-text-white tru-ml-6 tru-text-2xl tru-inset-x-0 tru-ban-prev" onClick={() => plusSlides(-1)}>&#10094;</a>
//                         <a className="tru-absolute tru-text-white  tru-mr-6  tru-text-2xl tru-right-0 tru-ban-next" onClick={() => plusSlides(1)}>&#10095;</a>
//                         <div className="tru-absolute tru-inset-x-0 tru-dot-pos">
//                             <div className="tru-text-center ">
//                                 {
//                                     sliderImages.map((value, index) => {
//                                         return <span key={index} className={"tru-dot thumb-dot " + (value.isShow == false ? '' : 'active')} onClick={() => currentSlide(index)}></span>
//                                     })
//                                 }
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// }

export default ImageSlider;
