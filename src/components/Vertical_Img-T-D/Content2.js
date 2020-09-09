import React from "react";

class Content2 extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/*container for layout */}
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-1">
          <div className="  md:weaverz-ai-py-10 weaverz-ai-text-center md:weaverz-ai-mt-8 md:weaverz-ai-p-0 md:weaverz-ai-mt-10">
          <div className="weaverz-ai-text-center">
            {this.props.icon}
            </div>
            <h5 className="weaverz-ai-font-bold  weaverz-ai-text-center">
              {this.props.heading}
            </h5>
            <p className="weaverz-ai-text-sm  weaverz-ai-text-center">
              {this.props.content}
            </p>
          </div>
          <div
            className={`weaverz-ai-imgSec weaverz-ai-order-first sm:weaverz-ai-order-first md:weaverz-ai-order-${this.props.imgOrder}`}
          >
            <div className="md:weaverz-ai-pl-40 md:weaverz-ai-w-11/12  sm:weaverz-ai-w:100% sm:weaverz-ai-p-0">
              <img
                src={this.props.imgSrc}
                alt=""
                
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Content2;
