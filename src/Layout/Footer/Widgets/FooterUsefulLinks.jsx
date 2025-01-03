import NoDataFound from "@/Components/Widgets/NoDataFound";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Link from "next/link";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const FooterUsefulLinks = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { t } = useTranslation("common");

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  return (
    <div className="footer-content">
      {themeOption?.footer?.[currentLanguage]?.our_shops_enable ? (
      <ul>
        <li>
          <Link href={`${themeOption?.footer?.[currentLanguage]?.our_shops.etsy}`}>{t('Etsy')}</Link>
        </li>
        <li>
          <Link href={`${themeOption?.footer?.[currentLanguage]?.our_shops.ebay}`}>{t('Ebay')}</Link>
        </li>
        <li>
          <Link href={`${themeOption?.footer?.[currentLanguage]?.our_shops.amazon}`}>{t('Amazon')}</Link>
        </li>
        <li>
          <Link href={`${themeOption?.footer?.[currentLanguage]?.our_shops.products_with_love}`}>{t('ProductsWithLove')}</Link>
        </li>
      </ul>) : (
        <NoDataFound customClass={"no-data-footer"} title={"No Link Found"} />
      )} 
    </div>
  );
};

export default FooterUsefulLinks;
