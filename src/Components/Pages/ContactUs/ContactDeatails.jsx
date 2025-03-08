import React from "react";
import { useContext } from "react";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useTranslation } from "react-i18next";
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";

const ContactDetails = () => {
  const { t } = useTranslation("common");
  const { themeOption } = useContext(ThemeOptionContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  return (
    <div className="contact-title">
      <h2>{t("GetInTouch")}</h2>
      <p>{themeOption?.contact_us?.[currentLanguage]?.description}</p>
      <div className="footer-social">
        <ul>
          {themeOption?.footer?.[currentLanguage]?.social_media?.facebook && (
            <li>
              <a target="_blank" href={themeOption?.footer?.[currentLanguage]?.social_media?.facebook}>
                <RiFacebookFill />
              </a>
            </li>
          )}
          {themeOption?.footer?.[currentLanguage]?.social_media?.instagram && (
            <li>
              <a target="_blank" href={themeOption?.footer?.[currentLanguage]?.social_media?.instagram}>
                <RiInstagramFill />
              </a>
            </li>
          )}
          {themeOption?.footer?.[currentLanguage]?.social_media?.linkedin && (
            <li>
              <a target="_blank" href={themeOption?.footer?.[currentLanguage]?.social_media?.linkedin}>
                <RiLinkedinFill />
              </a>
            </li>
          )}
            <li>
              <a target="_blank" href="https://www.youtube.com/channel/UC4PzdpDfz2HpEFafKwVCjxA">
                <RiYoutubeFill />
              </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
