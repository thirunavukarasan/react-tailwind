import React  from 'react';
import './ImageGallery.css';
import img1 from '../../../assets/Template3/img1.jpg'
import img2 from '../../../assets/Template3/img2.jpg'
import img3 from '../../../assets/Template3/img6.jpg'
import img4 from '../../../assets/Template3/img4.jpg'
import img5 from '../../../assets/Template3/img5.jpg'

class ImageGallery extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props)
        this.minIndexVal = 0
        this.maxIndexVal = 4;
        this.state = {
            sliderImages: this.props.sliderImages
        }
        console.log( this.state.sliderImages)
    }

    componentDidMount() {

        const sliderImages = this.state.sliderImages.map(value => value.isShow = false )
        this.setState((state) => {
            state.sliderImages = sliderImages;
            return state;
        })
        this.showSlides(this.minIndexVal,this.maxIndexVal)
    }

    plusSlides(n) {

        if (this.minIndexVal + n < 0) {
            return;
        }
        if (this.maxIndexVal + n > this.state.sliderImages.length - 1) {
            return;
        }
        this.maxIndexVal += n;
        this.minIndexVal += n;
        this.showSlides(this.minIndexVal,this.maxIndexVal)
    }

    showSlides(minIndx,maxIndx) {

        const sliderImages = this.state.sliderImages.map((value, index) => {
            value.isShow = false;
            if (index >=minIndx && index <= maxIndx) {
                value.isShow = true;
            }
            return value;
        });
        this.setState((state) => {
            state.sliderImages = sliderImages;
            return state;
        });
    }

    // currentSlide = n => {
    //     this.showSlides(n)
    // }

    render() {
        return (
            <>
                <div className="weaverz-ai-container weaverz-ai-mx-auto weaverz-ai-p-2 ">
                    <div className="weaverz-ai-grid weaverz-ai-gap-y-1 weaverz-ai-gap-x-1 weaverz-ai-grid-cols-1 ">
                        <div className="weaverz-ai-bg-gray-300 weaverz-ai-mt-4 weaverz-ai-relative">
                            <ul>
                                {
                                
                                    this.state.sliderImages.map((value,index) => {
                                        console.log("testtt")
                                            console.log(value.imgUrl)
                                return <li className="">
                                            <img className={"weaverz-ai-inline weaverz-ai-p-2 " +  (value.isShow == false ? 'weaverz-ai-hidden' : 'weaverz-ai-opacity-100')} key={index} src={value.imgUrl} style={{ width: "20%" }}></img>
                                        </li>
                                    })
                                }
                            </ul>
                            <a className="weaverz-ai-absolute weaverz-ai-text-black weaverz-ai-ml-6 weaverz-ai-text-2xl weaverz-ai-left-x-0 weaverz-ai-ban-prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                            <a className="weaverz-ai-absolute weaverz-ai-text-black  weaverz-ai-mr-6  weaverz-ai-text-2xl weaverz-ai-right-0 weaverz-ai-ban-next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ImageGallery;
