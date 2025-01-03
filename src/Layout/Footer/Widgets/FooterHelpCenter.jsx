import NoDataFound from "@/Components/Widgets/NoDataFound";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Link from "next/link";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const FooterHelpCenter = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { t } = useTranslation("common");

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;  


  return (
    <div className="footer-content">
      {themeOption?.footer?.our_policies?.length ? (
        <ul>
          {themeOption?.footer?.our_policies?.map((item, i) => (
            <li key={i}>
              <Link href={item?.value?.charAt(0) == "/" ? item?.value : `/${item?.value}`} className="text-content">
                {t(item?.name)}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <NoDataFound customClass={"no-data-footer"} title={"No Link Found"} />
      )}
    </div>
  );
};

export default FooterHelpCenter;
