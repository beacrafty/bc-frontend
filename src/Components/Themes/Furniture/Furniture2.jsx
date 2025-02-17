"use client";;
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider, horizontalProductSlider5 } from "@/Data/SliderSetting";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import { useContext, useEffect, useState } from "react";
import { Col } from "reactstrap";
import HomeProduct from "../Widgets/HomeProduct";
import HomeSlider from "../Widgets/HomeSlider";
import HomeSocialMedia from "../Widgets/HomeSocialMedia";
import BrowserFaq from "@/Components/Pages/Faq";
import { useTranslation } from "react-i18next";
import HomeBlog from "../Widgets/HomeBlog";

import './assets/css/style.css';
import './assets/css/flaticon.css';
import './assets/css/line-awesome.min.css';
import './assets/css/fontAwesomePro.css';
import './assets/css/owl.carousel.css';
import './assets/css/slick.css';
import Features from "./components/features";
import About from "./components/about";
import WhyChooseUs from "./components/why-choose-us";
import LinkingSlider from "./components/linking-slider";
import VideoCarousel from "../Widgets/VideoCarousel";
import Categories from "./components/categories";
import Partners from "./components/partners";


const Furniture2 = ({ slug }) => {
  const [banners, setBanners] = useState([]);
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBlogIds, isLoading: blogLoading } = useContext(BlogIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const videoType = ["mp4", "webm", "ogg"];
  const { data, isLoading: dataLoading, refetch } = useCustomDataQuery({ params: "furniture_two" });


  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;
  

  useEffect(() => {
    if (data?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
    }
    if (data?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({ ids: Array.from(new Set(data?.brands?.brand_ids))?.join(",") });
    }
  }, [data]);
  useEffect(() => {
    const bannersArray = [];
    if (data?.offer_banner?.banner_1?.status) {
      bannersArray.push(data?.offer_banner?.banner_1);
    }
    if (data?.offer_banner?.banner_2?.status) {
      bannersArray.push(data?.offer_banner?.banner_2);
    }
    if (data?.offer_banner?.banner_3?.status) {
      bannersArray.push(data?.offer_banner?.banner_3);
    }
    setBanners(bannersArray);

    if (data?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
    }
    if (data?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({ ids: Array.from(new Set(data?.brands?.brand_ids))?.join(",") });
    }
  }, [data]);

  useEffect(() => {
    dataLoading && refetch();
  }, [dataLoading]);

  useEffect(() => {
    document.body.classList.add("home", "header-style-light");
    return () => {
      document.body.classList.remove("home", "header-style-light");
    };
  }, []);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);

  return (
    <>
      {/* Home Banners */}
      <WrapperComponent classes={{ sectionClass: "p-0 overflow-hidden" }}>
        <div className="slide-1 home-slider">
          <HomeSlider bannerData={data?.home_banner?.[currentLanguage]} height={650} width={1920} />
        </div>
      </WrapperComponent>

      <Features />
      <About contentData={data?.home_about?.[currentLanguage]} imageData={data?.home_about} />


      <LinkingSlider />


      {/* Categories */}
      {/* <Container className="no-arrow">
        <section className="category-style-1">
          <HomeCategorySidebar style="simple" sliderOptions={categorySlider5} slider={true} categoryIds={data?.categories_icon_list?.category_ids || []} />
        </section>
      </Container> */}

      {/* Products List 1 */}
      {data?.products_list_1?.status && data?.products_list_1?.product_ids && (
        <>
          <TitleBox title={data?.products_list_1?.[currentLanguage]} type="basic" />
          <WrapperComponent classes={{ sectionClass: "section-b-space pt-0", fluidClass: "container" }}>
            {/* <HomeProduct productIds={data?.products_list_1?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} /> */}
            <HomeProduct productIds={data?.product_list_2?.products?.product_item?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
          </WrapperComponent>
        </>
      )}

      <WhyChooseUs contentData={data?.home_why_choose_us?.[currentLanguage]} imageData={data?.home_why_choose_us?.image} />

      {/* Video Banner
      {data?.video_banner?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "p-0 height-85 mt-5", fluidClass: "container" }}>
            <VideoBanner videoBannerSrc={data?.video_banner?.original_url} height={535} width={'auto'} />
            
          </WrapperComponent>
        </>
      )} */}

      {data?.video_banner?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "p-0 height-85 mt-5", fluidClass: "container" }}>
            {/* Replace VideoBanner with VideoCarousel */}
            <VideoCarousel
              videoSources={[
                data?.video_banner?.video_1?.original_url, 
                data?.video_banner?.video_2?.original_url,
                data?.video_banner?.video_3?.original_url,
              ]}
              height={'auto'}
              width={'auto'}
            />
          </WrapperComponent>
        </>
      )}

      {/* Products List 2 */}
      {data?.product_list_2?.status && (
        <WrapperComponent classes={{ fluidClass: "container", row: "g-4" }} customCol={true}>
          <div className={data?.product_list_2?.right_panel?.status ? "col-xl-9 col-lg-8" : "col-xl-12 col-lg-8"}>
            <div className="theme-tab">
              <div className="tab-content-cls">
                <HomeProduct productIds={data?.product_list_2?.products?.product_item?.product_ids || []} slider={true} sliderOptions={horizontalProductSlider} style="vertical" />
              </div>
              {/* {(data?.product_list_2?.products?.product_banner?.banner_1?.status || data?.product_list_2?.products?.product_banner?.banner_2?.status) && (
                <div className="banner-tools border-0 product_banner banner-section">
                  <div className="ratio2_1">
                    <Container className=" p-0">
                      <Row className="g-4">
                        {data?.product_list_2?.products?.product_banner?.banner_1?.status && (
                          <div className={data?.product_list_2?.products?.product_banner?.banner_2?.status ? "col-md-6" : "col-12"}>
                            <ImageLink imgUrl={data?.product_list_2?.products?.product_banner?.banner_1?.[currentLanguage]} bgImg={true} />
                          </div>
                        )}
                        {data?.product_list_2?.products?.product_banner?.banner_2?.status && (
                          <div className={data?.product_list_2?.products?.product_banner?.banner_1?.status ? "col-md-6" : "col-12"}>
                            <ImageLink imgUrl={data?.product_list_2?.products?.product_banner?.banner_2?.[currentLanguage]} bgImg={true} />
                          </div>
                        )}
                      </Row>
                    </Container>
                  </div>
                </div>
              )} */}
            </div>
          </div>
          {data?.product_list_2?.right_panel?.status && (
            <Col xl="3" lg="4" md="12" className="mb-0 images">
              <div className="theme-card">
                {/* <h5 className="title-border">{data?.product_list_2?.right_panel?.title}</h5> */}
                <div className="offer-slider ">
                  <HomeProduct productIds={data?.product_list_2?.right_panel?.product_ids || []} style="horizontal" />
                </div>
              </div>
            </Col>
          )}
        </WrapperComponent>
      )}


      {/* <Container className="no-arrow">
        <section className="category-style-1">
          <HomeCategorySidebar style="simple" sliderOptions={categorySlider5} slider={true} categoryIds={data?.categories_icon_list?.category_ids || []} />
        </section>
      </Container> */}




      <Categories />



      {/* Brands */}
      {/* {data?.brand?.status && (
        <WrapperComponent classes={{ sectionClass: "tools-brand" }}>
          <HomeBrand sliderOptions={brandSlider4} brandIds={data?.brand?.brand_ids || []} bgLight={true} />
        </WrapperComponent>
      )} */}

      {(data?.featured_blogs?.status || true) && (
        <WrapperComponent classes={{ sectionClass: "blog blog-2 section-b-space ratio3_2", fluidClass: "container" }} colProps={{ md: "12" }}>
          {/* <HomeTitle title={data?.featured_blogs || {title: "From the blog", tag: "From the blog"}} type="basic" space={false} /> */}
          <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
        </WrapperComponent>
      )}

      {/* <WrapperComponent classes={{ sectionClass: "section-b-space pt-0" }} noRowCol={true}>
        <HomeBrand brandIds={data?.brand?.brand_ids || []} />
      </WrapperComponent> */}

      <Partners />

      

      {data?.faq?.[currentLanguage]?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "section-b-space pt-0", fluidClass: "container" }}>
            <BrowserFaq contentData={data?.faq?.[currentLanguage]} />
          </WrapperComponent>
        </>
      )}

      {/* Social Media */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <section className="instagram ratio_square">
          <HomeSocialMedia media={data?.social_media || []} type="borderless" />
        </section>
      )}

    </>
  );
};

export default Furniture2;
