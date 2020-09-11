import React from "react";

class Content extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/*container for layout */}
        <div className="weaverz-ai-grid  lg:weaverz-ai-grid-cols-1  md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1">
          <div className=" md:weaverz-ai-py-0 weaverz-ai-p-0 md:weaverz-ai-p-0">
          <div
            className={`weaverz-ai-imgSec weaverz-ai-order-first sm:weaverz-ai-order-first md:weaverz-ai-order-${this.props.imgOrder}`}
          >
            <div ClassName="">
              <img
                src={this.props.imgSrc}
                alt="photo"
                style={{ width: "100%" }}
              />
            </div>
          </div>
            <h6 className="weaverz-ai-font-bold weaverz-ai-text-left ">
              {this.props.heading}
            </h6>
            <p className="weaverz-ai-text-left weaverz-ai-text-sm ">
              {this.props.content}
            </p>
            <h6 className="weaverz-ai-font-bold weaverz-ai-mt-5 weaverz-ai-text-left ">
              {this.props.heading1}
            </h6>
            <p className="weaverz-ai-text-left weaverz-ai-mt-5 weaverz-ai-text-sm ">
              {this.props.content1}
            </p>
            <h6 className="weaverz-ai-mt-3 weaverz-ai-text-left ">
              {this.props.button}
            </h6>
          </div>
          
        </div>
      </>
    );
  }
}

export default Content;
