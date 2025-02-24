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
import Partners from "@/Components/Themes/Furniture/components/partners";

const AboutUsContent = () => {
  const { themeOption, isLoading } = useContext(ThemeOptionContext);
  const { data, refetch } = useCustomDataQuery({ params: "furniture_two" });

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  if (isLoading) return <Loader />;
  return (
    <>
      <Breadcrumbs title={"AboutUs"} subNavigation={[{ name: "AboutUs" }]} />
      <AboutUsText contentData={themeOption?.about_us?.about?.[currentLanguage]} />
      <AboutStats contentData={themeOption?.about_us?.about_stats?.[currentLanguage]} />
      <WhyChooseUs contentData={data?.home_why_choose_us?.[currentLanguage]} imageData={data?.home_why_choose_us?.image} />
      <div className="py-4">
        <Partners />
      </div>
      <BrowserFaq contentData={data?.faq?.[currentLanguage]} />
    </>
  );
};

export default AboutUsContent;
