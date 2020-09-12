import React from "react";

class Content extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className=" md:weaverz-ai-py-10">
          <div className="weaverz-ai-text-center weaverz-ai-text-4xl">
            {this.props.icon}
          </div>
          <p className="weaverz-ai-text-center  ">{this.props.content}</p>
        </div>
      </>
    );
  }
}

export default Content;
