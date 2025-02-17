"use client";;
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext, useEffect } from "react";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import AboutUsText from "./AboutUsText";
import Loader from "@/Layout/Loader";
import BrowserFaq from "../Faq";

import '@/Components/Themes/Furniture/assets/css/style.css';
import '@/Components/Themes/Furniture/assets/css/flaticon.css';
import '@/Components/Themes/Furniture/assets/css/line-awesome.min.css';
import '@/Components/Themes/Furniture/assets/css/fontAwesomePro.css';
import AboutStats from "./components/about-stats";
import WhyChooseUs from "@/Components/Themes/Furniture/components/why-choose-us";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useTranslation } from "react-i18next";

const AboutUsContent = () => {
  const { themeOption, isLoading } = useContext(ThemeOptionContext);
  const { data, refetch } = useCustomDataQuery({ params: "furniture_two" });

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);
  console.log(data);



  if (isLoading) return <Loader />;
  return (
    <>
      <Breadcrumbs title={"AboutUs"} subNavigation={[{ name: "AboutUs" }]} />

      {/* <AboutUsImage /> */}

      <AboutUsText contentData={themeOption?.about_us?.about?.[currentLanguage]} />


      <AboutStats contentData={themeOption?.about_us?.about_stats?.[currentLanguage]} />

      <WhyChooseUs contentData={data?.home_why_choose_us?.[currentLanguage]} imageData={data?.home_why_choose_us?.image} />



      <div className="client-section mt-4 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="client-wrap d-flex flex-wrap justify-content-center align-items-center">
              <div className="col-3 clients-img-inner text-center">
                <img src="assets/assets/img/client/AMAZON.png" alt="" className="img-fluid" />
              </div>
              <div className="col-3 clients-img-inner text-center">
                <img src="assets/assets/img/client/EBAY.png" alt="" className="img-fluid" />
              </div>
              <div className="col-3 clients-img-inner text-center">
                <img src="assets/assets/img/client/ETSY.png" alt="" className="img-fluid" />
              </div>
              <div className="col-3 clients-img-inner text-center">
                <img src="assets/assets/img/client/PWL.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* <AboutUsBanner /> */}

      <BrowserFaq contentData={data?.faq?.[currentLanguage]} />

      {/* {themeOption?.about_us?.testimonial?.status && themeOption?.about_us?.testimonial?.reviews?.length && <ClientSection />}
      {themeOption?.about_us?.team?.status && themeOption?.about_us?.team?.members?.length && <CreativeTeam />}
      {themeOption?.about_us?.about?.futures && <ServiceSection />} */}
    </>
  );
};

export default AboutUsContent;
