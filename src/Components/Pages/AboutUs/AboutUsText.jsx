import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const AboutUsText = () => {
  const { t } = useTranslation("common");
  const { themeOption } = useContext(ThemeOptionContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;  

  return (
    <div className="mt-4">
      <h3>{themeOption?.about_us?.about?.[currentLanguage]?.title}</h3>
      {themeOption?.about_us?.about?.[currentLanguage]?.description?.split("\n").map((paragraph, index) =>
        paragraph.trim() ? (
          <p key={index}>{paragraph}</p>
        ) : (
          <br key={index} />
        )
      )}
    </div>
  );
};

export default AboutUsText;
