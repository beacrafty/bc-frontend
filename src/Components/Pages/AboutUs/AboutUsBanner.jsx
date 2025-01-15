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
        <Image src={`/assets/about_us_banner_${currentLanguage}.png`} loader={({src, width, quality}) => src} width={200} height={200} style={{width: "100%", height: "auto"}}/>
    </div>
  )
  return (
    <div className="mt-4 bg-indigo" style={{display: 'grid', gridTemplateColumns: "1fr 1fr 1fr", width: "100%", padding: "3rem", gap: "2rem", textAlign: "center"}}>
        <div>
            <h4>{t("AboutUsBanner1")}</h4>
            <p style={{fontSize: 14}}>We exclusively use olive wood sourced from trees that no longer bear olives, ensuring responsible and ethical utilization of natural resources. This practice allows us to honor the life cycle of these trees, reducing waste and promoting biodiversity.</p>
        </div>
        <div>
            <h4>{t("AboutUsBanner2")}</h4>
            <p style={{fontSize: 14}}>We exclusively use olive wood sourced from trees that no longer bear olives, ensuring responsible and ethical utilization of natural resources. This practice allows us to honor the life cycle of these trees, reducing waste and promoting biodiversity.</p>
        </div>
        <div>
            <h4>{t("AboutUsBanner3")}</h4>
            <p style={{fontSize: 14}}>We exclusively use olive wood sourced from trees that no longer bear olives, ensuring responsible and ethical utilization of natural resources. This practice allows us to honor the life cycle of these trees, reducing waste and promoting biodiversity.</p>
        </div>
    </div>
  );
};

export default AboutUsBanner;
