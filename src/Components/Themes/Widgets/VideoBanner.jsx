import { storageURL } from "@/Utils/Constants";
import React from "react";

const VideoBanner = ({ videoBannerSrc, height, width }) => {

    console.log('video banner data', videoBannerSrc )

  return (
    <div id="block" style={{ width: width, height: height, position: "relative" }}>
      <div style={{ position: "absolute", zIndex: -1, inset: 0, overflow: "hidden", backgroundSize: "cover", borderRadius: "18px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", backgroundPosition: "0% 50%", backgroundImage: `url(${storageURL + videoBannerSrc})` }}>
        <video autoPlay loop muted style={{ margin: "auto", position: "absolute", zIndex: -1, top: "50%", left: "0%", transform: "translate(0%, -50%)", visibility: "visible", opacity: 1, width: "100%", height: "auto", borderRadius: "18px" }}>
          <source src={storageURL + videoBannerSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoBanner;
