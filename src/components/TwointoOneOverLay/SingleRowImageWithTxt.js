import React from "react";
import "./SingleRowImage.css";

class RetailerBenfitsLastRow extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/*container for layout */}
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-1 md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1">
          <h6 className="weaverz-ai-text-center weaverz-ai-mt-8"> Special sole provides maximum stability.</h6>
          <div id="weaverz-ai-img-row">
            <img id="weaverz-ai-cus-img" className="weaverz-ai-px-8"
                src={this.props.imgSrc}
                alt="photo"
               />
          </div>
        </div>
      </>
    );
  }
}

export default RetailerBenfitsLastRow;
