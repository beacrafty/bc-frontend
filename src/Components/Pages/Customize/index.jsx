"use client";

import SingleProduct from "@/Components/Themes/SingleProduct";
import HomeProduct from "@/Components/Themes/Widgets/HomeProduct";
import ImageLink from "@/Components/Widgets/ImageLink";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import Btn from "@/Elements/Buttons/Btn";
import {baseURL, storageURL} from "@/Utils/Constants";
import Image from "next/image";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "reactstrap";

const CustomizeContent = () => {
    const { t, i18n } = useTranslation("common");
    const currentLanguage = i18n.resolvedLanguage;

    return (
        <>
            <section className="p-0 height-85 single-home bg-size">
              <Container>
                <div className="home-content">
                  <h2 style={{lineHeight: 1.4}}>{t('CustomizeTitle1')}</h2>
                  <p style={{color: "#888"}}>{t('CustomizeDescription1')}</p>
                </div>
                <div className="home-img d-md-flex d-none">
                  <img src={storageURL + `assets/customize_banner_${currentLanguage}.png`} className="img-fluid" alt="" />
                </div>
              </Container>
            </section>

          <WrapperComponent classes={{ sectionClass: "single-about-us", fluidClass: "container", row: "g-3" }} customCol={true}>
            <Col lg="6">
              <div className="about-left-box" style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h2 style={{color: "black"}}>{t('CustomizeHowItWorks')}</h2>
              </div>
            </Col>

            <Col lg="6">
              <ul className="about-right-box">
                <li className="right-box">
                  {/*<div className="about-img">
                    <img src={storageURL + ""} className="img-fluid" alt="" />
                  </div>*/}
                  <div className="about-content">
                    <h4 style={{color: "black"}}>{t('CustomizeChooseYourItem')}</h4>
                    <p style={{color: "#888"}}>{t('CustomizeChooseYourItemDescription')}</p>
                  </div>
                </li>
                <li className="right-box">
                  <div className="about-content">
                    <h4 style={{color: "black"}}>{t('CustomizeRequestPersonalization')}</h4>
                    <p style={{color: "#888"}}>{t('CustomizeRequestPersonalizationDescription')}</p>
                  </div>
                </li>
                <li className="right-box">
                  <div className="about-content">
                    <h4 style={{color: "black"}}>{t('CustomizePrecisionCraftmanship')}</h4>
                    <p style={{color: "#888"}}>{t('CustomizePrecisionCraftmanshipDescription')}</p>
                  </div>
                </li>
              </ul>
            </Col>
          </WrapperComponent>

          <WrapperComponent classes={{ sectionClass: "single-banner-section", fluidClass: "container", row: "row g-sm-4 g-3" }} customCol={true}>
            <Col md="6">
              <Image src={storageURL + `/assets/customize_banner_2_${currentLanguage}.png`} className="bg-img w-100 img-fluid" alt="banner" height={640} width={676} />
            </Col>
            <Col md="6">
              <Row className=" g-sm-4 g-3">
                <Col xs="12">
                  <Image src={storageURL + `/assets/customize_banner_3_${currentLanguage}.png`} className="bg-img w-100 img-fluid" alt="banner" height={366} width={676} />
                </Col>
              </Row>
            </Col>
          </WrapperComponent>

          <WrapperComponent classes={{ sectionClass: "deal-section", fluidClass: "container" }} className="mb-4">
            <Row>
                <Col md="4" style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <Image src={baseURL + "/storage/4030/Kitchen.png"} className="bg-img" alt="banner" height={250} width={300} />
                </Col>
                <Col md="8">
                    <h2>{t('CustomizeReadyToPersonalize')}</h2>
                    <p style={{fontSize: 16, lineHeight: 1.4}}>{t('CustomizeReadyToPersonalizeDescription')}</p>
                    <Btn className="gradient-btn mt-2">{t('CustomizeReadyToPersonalizeCTA')}</Btn>
                </Col>
            </Row>
          </WrapperComponent>
        </>
    );
}

export default CustomizeContent;
