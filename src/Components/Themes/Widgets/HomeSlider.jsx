"use client";;
import ImageLink from "@/Components/Widgets/ImageLink";
import { homeBannerSettings } from "@/Data/SliderSetting";
import Slider from "react-slick";

const HomeSlider = ({ bannerData, height, width, sliderClass }) => {
  return (
    <>
      <div className="position-relative">
          <Slider {...homeBannerSettings} className={sliderClass ? sliderClass : ""}>
            {bannerData?.banners?.map((banner, index) => {
              return (
                <div key={index}>
                  <ImageLink imgUrl={banner} link={banner} height={height} width={width} homeBanner={true} />
                </div>
              );
            })}
          </Slider>
      </div>
    </>
  );
};

export default HomeSlider;
