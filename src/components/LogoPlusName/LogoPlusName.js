import React from "react";
import img1 from "../../assets/img/LogoPlusCollection/logo1.jpg";
import img2 from "../../assets/img/LogoPlusCollection/addidas.jpg";
import img3 from "../../assets/img/LogoPlusCollection/nike.jpg";
import img4 from "../../assets/img/LogoPlusCollection/logo3.jpeg";
import img5 from "../../assets/img/LogoPlusCollection/nikelogo.jpg";
import img6 from "../../assets/img/LogoPlusCollection/Reeboklogo.jpg";
import logo from "../../assets/img/LogoPlusName/NikeLogo.png";

class LogoPlusCollection extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/*container for layout */}
      <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto">
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-1">
          <div className="">
            <img src={logo} alt="photo" style={{ width: "100%" }} />
          </div>
          <div className=" md:weaverz-ai-py-16 weaverz-ai-p-4 md:weaverz-ai-p-0">
            <p className="weaverz-ai-font-bold weaverz-ai-text-center weaverz-ai-text-3xl">
              Nike Air Zoom Type Submit White
            </p>
          </div>

        </div>
      </div>
      </>
    );
  }
}

export default LogoPlusCollection;
