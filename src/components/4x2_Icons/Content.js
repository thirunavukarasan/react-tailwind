import React from "react";

class Content extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-1  md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1">
          <div className=" md:weaverz-ai-py-10  md:weaverz-ai-mt-8 ">
             <div className="weaverz-ai-text-center weaverz-ai-text-2xl">
            {this.props.icon}
            </div>
            <p className="weaverz-ai-text-center">
              {this.props.content}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Content;
