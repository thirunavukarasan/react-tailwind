import React from "react";
import img1 from "../../assets/img/LogoPlusCollection/logo1.jpg";
import img2 from "../../assets/img/LogoPlusCollection/addidas.jpg";
import img3 from "../../assets/img/LogoPlusCollection/nike.jpg";
import img4 from "../../assets/img/LogoPlusCollection/logo3.jpeg";
import img5 from "../../assets/img/LogoPlusCollection/nikelogo.jpg";
import img6 from "../../assets/img/LogoPlusCollection/Reeboklogo.jpg";

class LogoPlusCollection extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/*container for layout */}
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-1">
          <div className="">
            <img src={img1} alt="photo" style={{ width: "100%" }} />
          </div>
          <div ClassName="">
            <img src={img2} alt="photo" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-1  md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1">
          <div className="weaverz-ai-textArea">
            <ul className="weaverz-ai-text-center">
              <li className=" weaverz-ai-font-bold weaverz-ai-text-4xl">ADDIDAS 4D RUN SIGNAL CORAL,</li>
              <li className="weaverz-ai-text-xl">Collection:Signal Coral</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default LogoPlusCollection;
