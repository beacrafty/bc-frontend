import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const FooterAbout = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;  

  return <p>{themeOption?.footer?.[currentLanguage]?.footer_about}</p>;
};

export default FooterAbout;
