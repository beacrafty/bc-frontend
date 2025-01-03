import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";

const FooterStoreInformation = ({ icon }) => {
  const { t } = useTranslation("common");
  const { themeOption } = useContext(ThemeOptionContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage; 


  return (
    <ul className={icon ? "contact-list" : "contact-details"}>
      {themeOption?.footer?.[currentLanguage]?.about_address && (
        <li>
          {icon && <RiMapPinLine />}
          {themeOption?.footer?.[currentLanguage]?.about_address}
        </li>
      )}
      {themeOption?.footer?.[currentLanguage]?.support_number && (
        <li>
          {icon && <RiPhoneLine />}
          {t("CallUs")}: {themeOption?.footer?.[currentLanguage]?.support_number}
        </li>
      )}
      {themeOption?.footer?.[currentLanguage]?.about_email && (
        <li>
          {icon && <RiMailLine />}
          {t("EmailUs")}: {themeOption?.footer?.[currentLanguage]?.about_email}
        </li>
      )}
    </ul>
  );
};

export default FooterStoreInformation;
