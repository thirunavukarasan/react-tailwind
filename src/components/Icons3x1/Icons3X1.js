import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import IconModule from "./IconModule";

class IconsThreebyOne extends React.Component {
  render() {
    return (
      <>
        <div className=" md:weaverz-ai-container md:weaverz-ai-mx-auto">
          <h6 className="weaverz-ai-text-center weaverz-ai-mt-4">Icons 3x1</h6>
          <div className="weaverz-ai-grid weaverz-ai-grid-cols-3">
            <div ClassName="">
              <IconModule
                icon={<FontAwesomeIcon icon={faClock}> </FontAwesomeIcon>}
                content="The Fit Knit upper provides"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
            </div>
            <div className="">
              <IconModule
                icon={
                  <FontAwesomeIcon icon={faSpaceShuttle}> </FontAwesomeIcon>
                }
                content="We knitted a unique one-piece upper made"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
            </div>
            <div ClassName="">
              <IconModule
                icon={<FontAwesomeIcon icon={faDatabase}> </FontAwesomeIcon>}
                content="Optimized for cushion, stability, and energy return"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default IconsThreebyOne;
