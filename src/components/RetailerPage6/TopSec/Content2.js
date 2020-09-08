import React from "react";

class Content2 extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/*container for layout */}
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-1">
          <div className="  md:weaverz-ai-py-10  md:weaverz-ai-mt-8 weaverz-ai-p-4 md:weaverz-ai-p-0 md:weaverz-ai-mt-10 ">
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
            <div className="weaverz-ai-pl-40 ">
              <img
                src={this.props.imgSrc}
                alt=""
                style={{width: "90%" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Content2;
