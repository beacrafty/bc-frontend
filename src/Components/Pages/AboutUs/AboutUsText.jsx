import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Btn from "@/Elements/Buttons/Btn";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const AboutUsText = () => {
  const { t } = useTranslation("common");
  const { themeOption } = useContext(ThemeOptionContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  return (
    // <div className="mt-4">
    //   <h3>{themeOption?.about_us?.about?.[currentLanguage]?.title}</h3>
    //   {themeOption?.about_us?.about?.[currentLanguage]?.description?.split("\n").map((paragraph, index) =>
    //     paragraph.trim() ? (
    //       <p key={index}>{paragraph}</p>
    //     ) : (
    //       <br key={index} />
    //     )
    //   )}
    // </div>
    
    <div id="about-3" className="about-section section-padding pt-180">
      <div className="container">
        <div className="row gx-lg-5">
          <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="about-img-wrap">
              <img src="assets/assets/img/about/3.jpg" className="" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-content-wrap">
              <div className="section-title">
                <h6>About Bea Crafty</h6>
                <div className="heading-animation">
                  <h2>Handcrafted <span>elegance</span> for a sustainable lifestyle</h2>
                </div>
              </div>
              {themeOption?.about_us?.about?.[currentLanguage]?.description?.split("\n").map((paragraph, index) =>
                paragraph.trim() ? (
                  <p key={index}>{paragraph}</p>
                ) : (
                  <br key={index} />
                )
              )}
              <div className="about-list-item">
                <ul>
                  <li><i className="fa-solid fa-circle-check"></i>Sustainable Raw Materials </li>
                  <li><i className="fa-solid fa-circle-check"></i>Handcrafted </li>
                  <li><i className="fa-solid fa-circle-check"></i>Affordable Price</li>
                  <li><i className="fa-solid fa-circle-check"></i>Environmentally Responsible</li>
                </ul>
              </div>
              <Btn className="btn-solid mt-20">Learn More</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsText;
