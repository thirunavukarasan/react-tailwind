import React from "react";
import "./RetailerPage.css";

class RetailerBenfitsLastRow extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/*container for layout */}
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-1 md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1">
          <div id="weaverz-ai-img-Sec" className="weaverz-ai-relative">
            <img id="weaverz-ai-cus-img"
                  src={this.props.imgSrc}
                  alt="photo"
                  
               />
            <div class="weaverz-ai-absolute weaverz-ai-insert-x-0 weaverz-ai-body-pos">
              <div className="">
                <h6 className="weaverz-ai-font-bold weaverz-ai-text-black weaverz-ai-text-center weaverz-ai-align-middle">
                  {this.props.heading}
                </h6>
                <p className="weaverz-ai-text-black weaverz-ai-text-center weaverz-ai-text-sm weaverz-ai-align-middle ">
                  {this.props.content}
                </p>
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default RetailerBenfitsLastRow;
