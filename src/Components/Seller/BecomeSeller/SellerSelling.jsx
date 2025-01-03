import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const SellerSelling = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { t } = useTranslation("common");

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;
  
  return (
    themeOption?.seller?.start_selling?.[currentLanguage]?.status ? (
    <WrapperComponent classes={{ sectionClass: "start-selling section-b-space", fluidClass: "container" }} noRowCol={true}>
      <h4>{themeOption?.seller?.start_selling?.[currentLanguage]?.title}</h4>
      <p>{themeOption?.seller?.start_selling?.[currentLanguage]?.description}</p>
        {themeOption?.seller?.start_selling?.[currentLanguage]?.call_to_action ? (
          <a href={themeOption?.seller?.start_selling?.[currentLanguage]?.call_to_action} className='btn btn-solid btn-sm'>
          {t("StartSelling")}{" "}
        </a>
      ) : null}
      </WrapperComponent>
    ) : <></>
  );
};

export default SellerSelling;
