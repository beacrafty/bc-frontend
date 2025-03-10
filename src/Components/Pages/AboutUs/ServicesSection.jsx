import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Container, Media, Row } from "reactstrap";

const ServicesSection = () => {
  const { themeOption } = useContext(ThemeOptionContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;  

  return (
    <Container className="container about-cls section-b-space ">
      <section className="service border-section small-section">
        <Row className="g-sm-4 g-4">
          {themeOption?.about_us?.about?.[currentLanguage]?.futures?.map((service, i) => (
            <div className="service-block col-md-3" key={i}>
              <Media>
                <img src={service?.icon} alt={service?.title} />
                <div className="skeleton-img-box"></div>
                <Media body>
                  {/* <h4>{t(item?.name)}</h4> */}
                  <h4>{service?.title}</h4>
                  {/* <h4>{service?.title}</h4> */}
                  <h4 className="skeleton-content-h4"></h4>
                  <p>{service?.description}</p>
                  <p className="skeleton-content-p"></p>
                </Media>
              </Media>
            </div>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default ServicesSection;
