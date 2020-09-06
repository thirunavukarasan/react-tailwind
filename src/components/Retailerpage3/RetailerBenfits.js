import React from "react";
import "./RetailerPage.css";

class RetailerBenfits extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/*container for layout */}
        <div className={`weaverz-ai-grid lg:weaverz-ai-grid-cols-2 md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-1 weaver-ai-cus-${this.props.bgColor}`}>
          <div className="weaverz-ai-mt-0 md:weaverz-ai-mt-12 lg:weaverz-ai-mt-32">
            <h6 className={`weaverz-ai-font-bold weaverz-ai-font-cursive weaverz-ai-text-center weaverz-ai-${this.props.textColor}`}>
              {this.props.heading}
            </h6>
            <p className={`weaverz-ai-text-center weaverz-ai-font-Helvetica weaverz-ai-text-sm weaverz-ai-${this.props.textColor}`}>
              {this.props.content}
            </p>
          </div>  
          <div
            className={`weaverz-ai-order-first sm:weaverz-ai-order-first md:weaverz-ai-order-${this.props.imgOrder}`}
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

export default RetailerBenfits;
