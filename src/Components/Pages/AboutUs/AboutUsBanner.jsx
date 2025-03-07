import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Image from "next/image";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const AboutUsBanner = () => {
  const { t } = useTranslation("common");
  const { themeOption } = useContext(ThemeOptionContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;  

  return (
    <div className="mt-4" style={{width: "100%"}}>
        <Image src={`public/assets/about_us_banner_${currentLanguage}.png`} loader={({src, width, quality}) => src} width={200} height={200} style={{width: "100%", height: "auto", borderRadius: 18}}/>
    </div>
  )
};

export default AboutUsBanner;
