import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Link from "next/link";
import React, { useContext } from "react";
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import NoDataFound from "@/Components/Widgets/NoDataFound";

const FooterSocial = () => {
  const { themeOption } = useContext(ThemeOptionContext)

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage; 

  return (
    <>
      {themeOption?.footer?.[currentLanguage]?.social_media_enable ? (
        <div className="footer-social">
          <ul>
            {themeOption?.footer?.[currentLanguage]?.social_media?.facebook && (
              <li>
                <Link href={themeOption?.footer?.[currentLanguage]?.social_media?.facebook} target="_blank">
                  <RiFacebookFill />
                </Link>
              </li>
            )}
            {themeOption?.footer?.[currentLanguage]?.social_media?.instagram && (
              <li>
                <Link href={themeOption?.footer?.[currentLanguage]?.social_media?.instagram} target="_blank">
                  <RiInstagramFill />
                </Link>
              </li>
            )}
            {themeOption?.footer?.[currentLanguage]?.social_media?.linkedin && (
              <li>
                <Link href={themeOption?.footer?.[currentLanguage]?.social_media?.linkedin} target="_blank">
                  <RiLinkedinFill />
                </Link>
              </li>
            )}
              <li>
                <Link href="https://www.youtube.com/channel/UC4PzdpDfz2HpEFafKwVCjxA" target="_blank">
                  <RiYoutubeFill />
                </Link>
              </li>
          </ul>
        </div>
        ) : ( 
        <NoDataFound customClass={"no-data-footer"} title={"No Link Found"} /> )
      }
    </>
  );
};

export default FooterSocial;
