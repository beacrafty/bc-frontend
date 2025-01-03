import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { storageURL } from "@/Utils/Constants";
import Image from "next/image";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { RiCopyrightLine } from "react-icons/ri";
import { Col, Container, Row } from "reactstrap";

const SubFooter = ({ classes }) => {
  const { themeOption } = useContext(ThemeOptionContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  return (
    <div className={`sub-footer ${classes?.sectionClass ? classes?.sectionClass : ""}`}>
      <Container>
        <Row>
          {themeOption?.footer?.[currentLanguage]?.footer_copyright_enable && (
            <Col xl="6" md="6" sm="12">
              <div className="footer-end">
                <p>
                  {themeOption?.footer?.[currentLanguage]?.copyright_content}
                </p>
              </div>
            </Col>
          )}
          {themeOption?.footer?.payment_option_image_url && (
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="payment-card-bottom">
                <Image height={34} width={130} src={storageURL + themeOption?.footer?.payment_option_image_url} alt="payment options" />
              </div>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default SubFooter;
