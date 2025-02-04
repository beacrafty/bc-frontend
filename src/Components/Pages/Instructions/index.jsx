"use client";
import Loader from "@/Layout/Loader";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '@/Components/Themes/Furniture/assets/css/style.css';
import '@/Components/Themes/Furniture/assets/css/flaticon.css';
import '@/Components/Themes/Furniture/assets/css/line-awesome.min.css';
import '@/Components/Themes/Furniture/assets/css/fontAwesomePro.css';

const InstructionsContent = () => {
  const { t, i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  const [banners, setBanners] = useState([]);
  const [features, setFeatures] = useState({}); // Initialize as an object
  const [hero, setHero] = useState({}); // Initialize hero state
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

        // Ensure features is an object
        setFeatures(data.features || {}); // Fallback to an empty object if undefined

        // Set hero data
        setHero(data.hero || {}); // Fallback to an empty object if undefined

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFeatures({}); // Fallback to an empty object on error
        setHero({}); // Fallback to an empty object on error
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentLanguage]);

  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  // Convert features object to an array for easier mapping
  const featureList = Object.keys(features).map((key) => ({
    id: key,
    ...features[key],
  }));

  return (
    <section className="p-0">
      {/* Hero Area */}
      <div id="home-3" className="homepage-slides owl-carousel">
        <div className="single-slide-item d-flex align-items-center" style={{ backgroundImage: "url('assets/assets/img/instructions/INST.png')" }}>
          <div className="overlay-5"></div>
          <div className="hero-area-content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8 col-md-8 wow fadeInUp animated" data-wow-delay=".2s">
                  <div className="section-title">
                    <h6 style={{color : "white"}}>{hero.title || "Default Title"}</h6> {/* Fallback to a default title if hero.title is missing */}
                    <h1 className="text-white">{hero.subtitle || "Default Subtitle"}</h1> {/* Fallback to a default subtitle */}
                  </div>
                  <p className="text-white">{hero.description || "Default Description"}</p> {/* Fallback to a default description */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="feature-section section-padding">
        <div className="container">
          {/* First Row of Features */}
          <div className="row">
            {featureList.slice(0, 3).map((feature, index) => (
              <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay={`${0.2 * index}s`} key={feature.id}>
                <div className="single-feature-wrap">
                  <div className="feat-num">
                    <span>{`0${index + 1}`}</span>
                  </div>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row of Features with Adjusted Spacing */}
          <div className="row" style={{ marginTop: "20px" }}> {/* Adjust margin-top as needed */}
            {featureList.slice(3, 6).map((feature, index) => (
              <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay={`${0.2 * index}s`} key={feature.id}>
                <div className="single-feature-wrap">
                  <div className="feat-num">
                    <span>{`0${index + 4}`}</span>
                  </div>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructionsContent;