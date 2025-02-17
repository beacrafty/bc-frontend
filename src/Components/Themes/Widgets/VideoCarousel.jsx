import React, { useRef } from "react";
import Slider from "react-slick";
import { storageURL } from "@/Utils/Constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WrapperComponent from "@/Components/Widgets/WrapperComponent"

const VideoCarousel = ({ videoSources = [], height = "400px", width = "100%" }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    swipe: true,
    dotsClass: "slick-dots slick-thumb",
  };

  return (
      <div className="slide-1 home-slider">
        <div
          style={{
            width: width,
            height: height,
            position: "relative",
            overflow: "hidden",
            borderRadius: "18px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f8f8f8",
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
  );
};

export default VideoCarousel;
