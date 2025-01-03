import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import SellerServiceBox from "./SellerServiceBox";
import { useTranslation } from "react-i18next";

const SellerService = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;  

  return (
    <WrapperComponent classes={{ sectionClass: "about-page service section-b-space pt-0", fluidClass: "container", row: "partition4" }} customCol={true}>
      <h4 className="mb-4">{themeOption?.seller?.services?.[currentLanguage]?.title?.toLowerCase()}</h4>
      <SellerServiceBox data={themeOption?.seller?.services?.[currentLanguage]?.service_1} />
      <SellerServiceBox data={themeOption?.seller?.services?.[currentLanguage]?.service_2} />
      <SellerServiceBox data={themeOption?.seller?.services?.[currentLanguage]?.service_3} />
      <SellerServiceBox data={themeOption?.seller?.services?.[currentLanguage]?.service_4} />
    </WrapperComponent>
  );
};

export default SellerService;
