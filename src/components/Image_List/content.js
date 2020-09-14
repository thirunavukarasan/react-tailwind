import React from "react";

class Content extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/*container for layout */}
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-1">
          <div className=" md:weaverz-ai-py-32 md:weaverz-ai-mt-8 weaverz-ai-p-4 md:weaverz-ai-p-0">
            <h6 className="weaverz-ai-font-bold weaverz-ai-text-left weaverz-ai-mb-10 weaverz-ai-ml-40 ">
              {this.props.heading}
            </h6>
            <p className="weaverz-ai-text-left weaverz-ai-ml-40">
              {this.props.list}
            </p>
          </div>
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
        </div>
      </>
    );
  }
}

export default Content;
