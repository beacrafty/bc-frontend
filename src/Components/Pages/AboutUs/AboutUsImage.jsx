import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { storageURL } from "@/Utils/Constants";
import Image from "next/image";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const AboutUsImage = () => {
  const { themeOption } = useContext(ThemeOptionContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;  

  return <div className="banner-section mt-2">{themeOption?.about_us?.about?.[currentLanguage]?.content_bg_image_url && <Image src={themeOption?.about_us?.about?.[currentLanguage]?.content_bg_image_url	} className="img-fluid w-100" height={385} width={1370} alt="about-us-1" />}</div>;
};

export default AboutUsImage;
