import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { storageURL } from "@/Utils/Constants";
import Image from "next/image";
import { useContext } from "react";
import { Col } from "reactstrap";
import { useTranslation } from "react-i18next";

const SellerPoster = () => {
  const { themeOption } = useContext(ThemeOptionContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;  
  return (
    <WrapperComponent classes={{ sectionClass: "about-page section-b-space", fluidClass: "container" }} customCol={true}>
      <Col lg={12}>
        <div className="banner-section">
          {themeOption?.seller?.about?.[currentLanguage]?.image_url && (
            <div style={{ position: 'relative', width: '100%', paddingTop: '28%' }}>
              <Image
                src={storageURL + themeOption?.seller?.about?.[currentLanguage]?.image_url}
                alt={themeOption?.seller?.about?.[currentLanguage]?.title || "B2B"}
                fill
                style={{ objectFit: 'cover' }}
                sizes="100vw"
              />
            </div>
          )}
        </div>
      </Col>
      <Col sm={12}>
        <h4>{themeOption?.seller?.about?.[currentLanguage]?.title?.toLowerCase()}</h4>
        <p>{themeOption?.seller?.about?.[currentLanguage]?.description}</p>
      </Col>
    </WrapperComponent>
  );
};

export default SellerPoster;
