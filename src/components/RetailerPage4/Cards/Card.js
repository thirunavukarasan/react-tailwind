import React from "react";
import "../Pages/Page1.css";

class Card extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/*container for layout */}
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-1">
          <div className=" md:weaverz-ai-py-10  md:weaverz-ai-mt-8 weaverz-ai-p-4 md:weaverz-ai-p-0">
          <p className=" weaverz-ai-font-bold  weaverz-ai-text-left">
              {this.props.title}
            </p>
            <h5 className="weaverz-ai-font-bold  weaverz-ai-text-left">
              {this.props.heading}
            </h5>
            <p className="weaverz-ai-text-sm  weaverz-ai-text-left">
              {this.props.content}
            </p>
          </div>
          <div
            className={`weaverz-ai-imgSec weaverz-ai-order-first sm:weaverz-ai-order-first md:weaverz-ai-order-${this.props.imgOrder}`}
          >
            <div ClassName="">
              <img
                src={this.props.imgSrc}
                alt=""
                style={{width: "100%" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
