import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import { Row } from "reactstrap";
import SellerSteps from "./SellerSteps";
import { useTranslation } from "react-i18next";


const SellerBusiness = () => {
  const { themeOption } = useContext(ThemeOptionContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  return (
    <WrapperComponent classes={{ sectionClass: "section-b-space become-vendor", fluidClass: "container" }} noRowCol={true}>
      <h4>{themeOption?.seller?.steps?.[currentLanguage]?.title}</h4>
      <div className="step-bg">
        {themeOption?.seller?.steps?.[currentLanguage]?.status &&
          <Row>
            <SellerSteps data={themeOption?.seller?.steps?.[currentLanguage]?.step_1} number={1} />
            <SellerSteps data={themeOption?.seller?.steps?.[currentLanguage]?.step_2} number={2} />
            <SellerSteps data={themeOption?.seller?.steps?.[currentLanguage]?.step_3} number={3} />
          </Row>
        }
      </div>
    </WrapperComponent>
  );
};

export default SellerBusiness;
