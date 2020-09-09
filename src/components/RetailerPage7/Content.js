import React from "react";
import './card.css'
class Content extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-1  md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1">
          <div className=" md:weaverz-ai-py-0  md:weaverz-ai-mt-0 weaverz-ai-p-0 md:weaverz-ai-p-0 xs:weaverz-ai-p-10">
             
            <div
            className={`weaverz-ai-image `}
          >
            <div ClassName="">
              <img
                src={this.props.imgSrc}
                alt=""
                style={{width: "100%" }}
              />
            </div>
            <h6 className="weaverz-ai-text-center weaverz-ai-text-bold ">
                {this.props.heading}
             </h6>
            <p className="weaverz-ai-text-center weaverz-ai-text-sm ">
              {this.props.content}
            </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Content;
