import React, { useRef } from "react";
import Slider from "react-slick";
import { storageURL } from "@/Utils/Constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WrapperComponent from "@/Components/Widgets/WrapperComponent"

const VideoCarousel = ({ videoSources = [], height = "400px", width = "100%" }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    swipe: true,
    customPaging: () => (
      <button
        style={{
          width: "14px",
          height: "14px",
          backgroundColor: "rgba(200, 200, 200, 0.7)",
          borderRadius: "50%",
          border: "2px solid transparent",
          cursor: "pointer",
          transition: "0.3s",
        }}
      ></button>
    ),
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <WrapperComponent classes={{ sectionClass: "p-0 overflow-hidden" }}>
      <div className="slide-1 home-slider">
        <div
          style={{
            width: width,
            height: height,
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f8f8f8",
            padding: "10px",
          }}
        >
          {videoSources.length > 0 ? (
            <Slider ref={sliderRef} {...settings}>
              {videoSources.map((videoSrc, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    height: height,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "18px",
                      objectFit: "cover",
                    }}
                  >
                    <source src={storageURL + videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </Slider>
          ) : (
            <p style={{ textAlign: "center", padding: "20px", color: "#555" }}>No videos available</p>
          )}
        </div>
      </div>
    </WrapperComponent>
  );
};

export default VideoCarousel;
