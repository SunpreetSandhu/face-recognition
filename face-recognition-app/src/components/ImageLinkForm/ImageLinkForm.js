import React from "react";
const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {"This magic brain will detect faces in your pictures. Give it a try."}
      </p>
      <div>
        <input className="f4 pa2 w-70 center" type="text" />
        <button className="w-e0 grow f4 link ph3 pv2 dib white bg-light-purple">
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
