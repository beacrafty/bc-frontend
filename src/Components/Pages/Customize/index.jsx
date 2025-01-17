"use client";

import SellerSteps from "@/Components/Seller/BecomeSeller/SellerSteps";
import SingleProduct from "@/Components/Themes/SingleProduct";
import HomeBrand from "@/Components/Themes/Widgets/HomeBrand";
import HomeProduct from "@/Components/Themes/Widgets/HomeProduct";
import HomeSlider from "@/Components/Themes/Widgets/HomeSlider";
import HomeSocialMedia from "@/Components/Themes/Widgets/HomeSocialMedia";
import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ProductIdsContext from "@/Context/ProductIdsContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import {horizontalProductSlider5} from "@/Data/SliderSetting";
import Btn from "@/Elements/Buttons/Btn";
import Loader from "@/Layout/Loader";
import {baseURL, ImagePath, storageURL} from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import Image from "next/image";
import {useContext, useEffect} from "react";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "reactstrap";

const CustomizeContent = () => {
    const { t, i18n } = useTranslation("common");
    const currentLanguage = i18n.resolvedLanguage;

    const { data, isLoading, refetch } = useCustomDataQuery({ params: "furniture_two" });
    const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
    const { themeOption } = useContext(ThemeOptionContext);

    console.log('themeOption', themeOption)

    useEffect(() => {
      isLoading && refetch();
    }, [isLoading]);

    useEffect(() => {
      if (data?.products_ids?.length > 0) {
        setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
      }
    }, [data]);

    if (isLoading && document.body) return <Loader />;

    return (
        <>

            <WrapperComponent classes={{ sectionClass: "p-0 overflow-hidden" }}>
              <div className="slide-1 home-slider">
                <HomeSlider bannerData={{banners: [themeOption?.customize_page?.[currentLanguage]?.banner]}} height={650} width={1920} />
              </div>
            </WrapperComponent>

            {/* Offer Banner 1 */}
            <WrapperComponent classes={{ sectionClass: "pb-0 ratio2_1 banner-section", fluidClass: "container", row: "g-sm-4 g-3" }} customCol={true}>
              <div className={"col-6"}>
                <div className="position-relative">
                  <ImageLink imgUrl={themeOption?.customize_page?.[currentLanguage]?.banner_2} placeholder={`${ImagePath}/two_column_banner.png`} height={350} width={776} />
                  <div className="banner-skeleton">
                    <div className="skeleton-content">
                      <p className="card-text placeholder-glow row g-lg-3 g-0">
                        <span className="col-lg-7 col-9">
                          <span className="placeholder"></span>
                        </span>
                        <span className="col-lg-9 col-12">
                          <span className="placeholder"></span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-6"}>
                <div className="position-relative">
                  <ImageLink imgUrl={themeOption?.customize_page?.[currentLanguage]?.banner_3} placeholder={`${ImagePath}/two_column_banner.png`} height={350} width={776} />
                  <div className="banner-skeleton">
                    <div className="skeleton-content">
                      <p className="card-text placeholder-glow row g-lg-3 g-0">
                        <span className="col-lg-7 col-9">
                          <span className="placeholder"></span>
                        </span>
                        <span className="col-lg-9 col-12">
                          <span className="placeholder"></span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </WrapperComponent>

            {/* Products List 1 */}
            {data?.products_list_1?.status && data?.products_list_1?.product_ids && (
              <>
                <TitleBox title={data?.products_list_1} type="basic" />
                <WrapperComponent classes={{ sectionClass: "section-b-space pt-0", fluidClass: "container" }}>
                  <HomeProduct productIds={data?.products_list_1?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
                </WrapperComponent>
              </>
            )}

          <WrapperComponent classes={{ sectionClass: "section-b-space become-vendor", fluidClass: "container" }} noRowCol={true}>
            <h4>{t('CustomizeHowItWorks')}</h4>
            <div className="step-bg">
              <Row>
                <SellerSteps data={{title: t('CustomizeChooseYourItem'), description: t('CustomizeChooseYourItemDescription')}} number={1} />
                <SellerSteps data={{title: t('CustomizeRequestPersonalization'), description: t('CustomizeRequestPersonalizationDescription')}} number={2} />
                <SellerSteps data={{title: t('CustomizePrecisionCraftmanship'), description: t('CustomizePrecisionCraftmanshipDescription')}} number={3} />
              </Row>
            </div>
          </WrapperComponent>

          <WrapperComponent classes={{ sectionClass: "section-b-space pt-6" }} noRowCol={true}>
            <HomeBrand brandIds={data?.brand?.brand_ids || []} />
          </WrapperComponent>

          {/* Social Media */}
          {data?.social_media?.banners?.length && data?.social_media?.status && (
            <section className="instagram ratio_square">
              <HomeSocialMedia media={data?.social_media || []} type="borderless" />
            </section>
          )}
        </>
    );
}

export default CustomizeContent;
