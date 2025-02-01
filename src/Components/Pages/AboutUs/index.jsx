"use client";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import AboutUsImage from "./AboutUsImage";
import AboutUsText from "./AboutUsText";
import AboutUsBanner from "./AboutUsBanner";
import ClientSection from "./ClientSection";
import CreativeTeam from "./CreativeTeam";
import ServiceSection from "./ServicesSection";
import Loader from "@/Layout/Loader";
import BrowserFaq from "../Faq";

import '@/Components/Themes/Furniture/assets/css/style.css';
import '@/Components/Themes/Furniture/assets/css/flaticon.css';
import '@/Components/Themes/Furniture/assets/css/line-awesome.min.css';
import '@/Components/Themes/Furniture/assets/css/fontAwesomePro.css';
import Btn from "@/Elements/Buttons/Btn";

const AboutUsContent = () => {
  const { themeOption, isLoading } = useContext(ThemeOptionContext);
  if (isLoading) return <Loader />;
  return (
    <>
      <Breadcrumbs title={"AboutUs"} subNavigation={[{ name: "AboutUs" }]} />
   
        {/* <AboutUsImage /> */}

      <AboutUsText />
      
      
      <div className="counter-section counter-two dark-bg section-padding">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-6 col-lg-6">
              <div className="counter-intro-wrap">
                <div className="section-title">
                  <h6>How We Work</h6>
                  <div className="heading-animation">
                    <h2 className="text-white">Discover the charm of <span>handcrafted</span> wooden treasures with Bea Crafty</h2>
                  </div>
                </div>
                <p className="text-white">At Bea Crafty, we combine tradition, artistry, and sustainability to create timeless wooden products. From elegant kitchenware to stylish decor, our pieces bring warmth and character into your home.</p>
                <Btn className="btn-solid mt-20">Shop Now</Btn>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 align-content-end">
              <div className="counter-item-wrap">
                <div className="single-counter-box">
                  <p className="counter-number">114</p><span>+</span>
                  <h6>Unique Products Designed</h6>
                </div>
                <div className="single-counter-box">
                  <p className="counter-number">100</p><span>+</span>
                  <h6>Satisfied Clients and Counting</h6>
                </div>
                <div className="single-counter-box">
                  <p className="counter-number">12</p><span>+</span>
                  <h6>Skilled Artisans Dedicated to Excellence</h6>
                </div>
                <div className="single-counter-box">
                  <p className="counter-number">2</p><span>+</span>
                  <h6>Years of Expertise in Handcrafted Excellence</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="choose-us-section section-padding gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="section-title">
                <h6>Why Choose Us</h6>
                <div className="heading-animation">
                  <h2>Craftsmanship, Quality, and Care You Can Rely On</h2>
                </div>
              </div>
              <div className="choose-item-wrap mt-60">
                <div className="single-choose-item wow fadeInUp" data-wow-delay=".2s">
                  <div className="choose-icon">
                    <i className="las la-adjust"></i>
                  </div>
                  <div className="choose-content">
                    <h5>Years Experiences</h5>
                    <p>Our extensive experience guarantees exceptional craftsmanship and attention to detail in every piece.</p>
                  </div>
                </div>
                <div className="single-choose-item wow fadeInUp" data-wow-delay=".4s">
                  <div className="choose-icon">
                    <i className="las la-user-check"></i>
                  </div>
                  <div className="choose-content">
                    <h5>Professional Staffs</h5>
                    <p>Our dedicated team ensures a seamless experience, from the initial design to the final product.</p>
                  </div>
                </div>
                <div className="single-choose-item wow fadeInUp" data-wow-delay=".6s">
                  <div className="choose-icon">
                    <i className="las la-crop-alt"></i>
                  </div>
                  <div className="choose-content">
                    <h5>Affordable Price</h5>
                    <p>We provide top-quality wooden products at competitive prices, ensuring great value for your money.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="choose-us-img-wrap wow fadeInRight" data-wow-delay=".2s">
                <img src="assets/assets/img/choose-us.jpg" className="rounded-image" alt="" />
                <div className="info-founder">
                  <i className="flaticon-carpenter-5"></i>
                  <p>Since 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="client-section mt-5 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="client-wrap d-flex flex-wrap justify-content-center align-items-center">
              <div className="col-3 clients-img-inner text-center">
                <img src="assets/assets/img/client/1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-3 clients-img-inner text-center">
                <img src="assets/assets/img/client/2.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-3 clients-img-inner text-center">
                <img src="assets/assets/img/client/3.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-3 clients-img-inner text-center">
                <img src="assets/assets/img/client/4.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* <AboutUsBanner /> */}

      <BrowserFaq heading={true} />

      {/* {themeOption?.about_us?.testimonial?.status && themeOption?.about_us?.testimonial?.reviews?.length && <ClientSection />}
      {themeOption?.about_us?.team?.status && themeOption?.about_us?.team?.members?.length && <CreativeTeam />}
      {themeOption?.about_us?.about?.futures && <ServiceSection />} */}
    </>
  );
};

export default AboutUsContent;
