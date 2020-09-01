import React from 'react'

export default function Shoetemplate() {
    return (
        <div className="weaverz-ai-container weaverz-ai-px-32 weaverz-ai-mx-auto">
      <h1 className="weaverz-ai-text-center weaverz-ai-text-2xl weaverz-ai-text-indigo-dark">
        Template 4
      </h1>
      <br />

      <div
        className="weaverz-ai-flex weaverz-ai-flex-wrap  weaverz-ai-bg-gray-200"
        style={{ height: "250px", width: "100%",background:"#e2e4ed" }}
      >
        <div className=" weaverz-ai-w-1/2 " >
          <img
          className=" weaverz-ai-pt-4 weaverz-ai-h-56 weaverz-ai-w-56"
            src="https://images.pexels.com/photos/19090/pexels-photo.jpg"
            style={{margin:"auto", }}
            alt="shoe_image1"
          />
        </div>
        <div className="weaverz-ai-w-1/2 weaverz-ai-h-12 weaverz-ai-pt-16 weaverz-ai-pb-16 weaverz-ai-pl-8 weaverz-ai-pr-8 ">
          <div>
            <h1 className="weaverz-ai-text-left weaverz-ai-text-2xl weaverz-ai-font-semibold">
              Hello World
            </h1>
            <p style={{ width: "40%" }}>
              img elements must have an alt prop, either with meaningful text,
              or an empty string for decorative images
            </p>
          </div>
        </div>
      </div>
      <div
        className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-bg-black"
        style={{ height: "250px", width: "100%",background:"#393a3e" }}
      >
        <div className="weaverz-ai-w-1/2 weaverz-ai-h-12 weaverz-ai-pt-16 weaverz-ai-pb-16 weaverz-ai-pl-40 weaverz-ai-pr-8 ">
          <div>
            <h1 className="weaverz-ai-text-left weaverz-ai-text-2xl weaverz-ai-font-semibold weaverz-ai-text-white">
              Hello World
            </h1>
            <p className="weaverz-ai-text-white" style={{ width: "60%" }}>
              img elements must have an alt prop, either with meaningful text,
              or an empty string for decorative images
            </p>
          </div>
        </div>
        <div className="weaverz-ai-w-1/2">
          <img
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg"
            className=" weaverz-ai-pt-4 weaverz-ai-h-56 weaverz-ai-w-56 weaverz-ai-mx-auto"
            alt="shoe_image2"
          />
        </div>
      </div>
      <div
        className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-bg-black weaverz-ai-mb-4 "
        style={{ height: "250px", width: "100%" }}
      >
        <div className=" weaverz-ai-w-full">
          <img
            src="https://images.pexels.com/photos/1153838/pexels-photo-1153838.jpeg"
            style={{ display:"block",height: "250px", width: "100%" }}
            alt="shoe_image3"
          />
        </div>
      </div>
      <h1 className="weaverz-ai-text-center weaverz-ai-text-2xl weaverz-ai-text-indigo-dark">
        Lifestyle Product Image + ​ Headline
      </h1>
      <img
      className="weaverz-ai-p-8"
            src="https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg"
            style={{ height: "300px", width: "100%" }}
            alt="shoe_image4"
          />
    </div>
    )
}
