import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Btn from "@/Elements/Buttons/Btn";
import { useContext , useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AboutUsText = ({ contentData }) => {
  const { t } = useTranslation("common");
  const { themeOption } = useContext(ThemeOptionContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;
  const [banners, setBanners] = useState([]);
  const [about, setAbout] = useState({}); // Initialize hero state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // Fetch data from the corresponding JSON file based on the current language
      const fetchData = async () => {
        try {
          const response = await fetch(`/locales/${currentLanguage}/common.json`);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
  
          // Set banners and features from the fetched data
          if (data.parallax_banner?.banners) {
            const filteredBanners = data.parallax_banner[currentLanguage]?.banners.filter((item) => item?.status);
            setBanners(filteredBanners || []); // Fallback to an empty array if undefined
          }
  
          // Set hero data
          setAbout(data.about || {}); // Fallback to an empty object if undefined
  
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setAbout({}); // Fallback to an empty object on error
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [currentLanguage]);
  
  
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
              <img src="assets/assets/img/about/About 1.png" className="rounded-image" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-content-wrap">
              <div className="section-title">
                <h6>{contentData?.sub_title}</h6>
                <div className="heading-animation">
                  <h2>{contentData?.title}</h2>
                </div>
              </div>
              {contentData?.description?.split("\n").map((paragraph, index) =>
                paragraph.trim() ? (
                  <p key={index}>{paragraph}</p>
                ) : (
                  <br key={index} />
                )
              )}
              
              <div class="about-list-item">
                            <ul>
                                <li><i class="fa-solid fa-circle-check"></i>{about.title1} </li>
                                <li><i class="fa-solid fa-circle-check"></i>{about.title4}</li>
                                <li><i class="fa-solid fa-circle-check"></i>{about.title3}</li>
                                <li><i class="fa-solid fa-circle-check"></i>{about.title2}</li>
                            </ul>
                </div>

              <Btn className="btn-solid mt-20">{t("ShopNow")}</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsText;
