import React from "react";
import "./InformationModule1.css";

class InformationModule1 extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <>
        {/*container for layout */}
        <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto">
          <h6 className="weaverz-ai-text-center weaverz-ai-p-4">Informatiom Module</h6>
          <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-3  md:weaverz-ai-grid-cols-3 sm:weaverz-ai-grid-cols-3">
            <div className="weaverz-ai-px-2">
              <img
                src={this.props.InformationImgs[0].imgUrl}
                alt="photo"
                style={{ width: "100%" }}
              />
              <h6 className="weaverz-ai-text-center weaverz-ai-my-4 weaverz-ai-text-gray-700">
                SOCKS ARE SO YESTERDAY!
              </h6>
              <p className="weaverz-ai-text-center weaverz-ai-text-gray-700">
                Merino wool naturally neutralizes unpleasant smells
              </p>
            </div>
            <div className="weaverz-ai-px-2">
              <img
                src={this.props.InformationImgs[1].imgUrl}
                alt="photo"
                style={{ width: "100%" }}
              />
              <h6 className="weaverz-ai-text-center weaverz-ai-my-4 weaverz-ai-text-gray-700">
                SOCKS ARE SO YESTERDAY!
              </h6>
              <p className="weaverz-ai-text-center weaverz-ai-text-gray-700">
                Merino wool naturally neutralizes unpleasant smells
              </p>
            </div>
            <div className="weaverz-ai-px-2">
              <img
                src={this.props.InformationImgs[2].imgUrl}
                alt="photo"
                style={{ width: "100%" }}
              />
              <h6 className="weaverz-ai-text-center weaverz-ai-my-4 weaverz-ai-text-gray-700">
                SOCKS ARE SO YESTERDAY!
              </h6>
              <p className="weaverz-ai-text-center  weaverz-ai-text-gray-700">
                Merino wool naturally neutralizes unpleasant smells
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InformationModule1;
