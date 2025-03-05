"use client";;
import NoDataFound from "@/Components/Widgets/NoDataFound";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import Btn from "@/Elements/Buttons/Btn";
import Loader from "@/Layout/Loader";
import request from "@/Utils/AxiosUtils";
import { CouponAPI, ProductAPI } from "@/Utils/AxiosUtils/API";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { ToastNotification } from "@/Utils/CustomFunctions/ToastNotification";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Col } from "reactstrap";
import HomeProduct from "@/Components/Themes/Widgets/HomeProduct";
import TitleBox from "@/Components/Themes/Widgets/HomeTitle";
import { useContext, useEffect } from "react";
import ProductIdsContext from "@/Context/ProductIdsContext";
import Link from "next/link";

const Offer = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { setGetProductIds } = useContext(ProductIdsContext);
  
  const { data, isLoading } = useQuery([CouponAPI], () => request({ url: CouponAPI, params: { status: 1 } }, router), {
    enabled: true,
    refetchOnWindowFocus: false,
    select: (data) => data.data.data,
  });

  const { data: productsData, isLoading: productsLoading } = useQuery(
    ["allProducts"],
    () => request({ 
      url: ProductAPI, 
      params: { 
        status: 1, 
        is_sale_enable: 1,
        sale_active: 1
      } 
    }, router),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      select: (data) => {
        const products = data.data.data;
        // Filter products where sale_price is lower than regular price
        return products.filter(product => 
          product.sale_price && 
          product.price && 
          parseFloat(product.sale_price) < parseFloat(product.price)
        );
      },
    }
  );

  useEffect(() => {
    if (productsData?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(productsData.map(product => product.id))).join(",") });
    }
  }, [productsData]);

  const onCopyCode = (couponData) => {
    try {
      navigator.clipboard.writeText(couponData);
      ToastNotification("success", "Code Copied To Clipboard");
    } catch (err) {
      ToastNotification("error", err);
    }
  };

  if (isLoading || productsLoading) {
    return (
      <>
        <Breadcrumbs title={"Offer"} subNavigation={[{ name: "Offer" }]} />
        <WrapperComponent classes={{ sectionClass: "section-t-space", fluidClass: "container" }} noRowCol={true}>
          <div className="row">
            <div className="col-12">
              <Loader />
            </div>
          </div>
        </WrapperComponent>
      </>
    );
  }

  return (
    <>
      <Breadcrumbs title={"Offer"} subNavigation={[{ name: "Offer" }]} />
      {/* Products on Sale Section */}
      <WrapperComponent classes={{ sectionClass: "section-t-space", fluidClass: "container" }} noRowCol={true}>
        <TitleBox title={{ title: t("ProductsOnSale") }} space={false} type="basic" />
        {productsData?.length > 0 ? (
          <HomeProduct productIds={productsData.map(product => product.id)} style="vertical" slider={true} sliderOptions={(length) => ({
            infinite: length > 5,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                },
              },
            ],
          })} />
        ) : (
          <NoDataFound 
            customClass='no-data-added text-center'
            title={t('NoSaleProductsAvailable')}
            imageUrl="/assets/svg/sale-empty.svg"
            description={t('NoCurrentSaleDescription')}
            height='350'
            width='350'
          >
            <div className="mt-4">
              <Link href="/shop" className="btn btn-solid">
                {t('ContinueShopping')}
              </Link>
            </div>
          </NoDataFound>
        )}
      </WrapperComponent>
      {/* Offers Section */}
      <WrapperComponent classes={{ sectionClass: "section-t-space section-b-space offer-section", row: "g-md-4 g-3", fluidClass: "container" }} customCol={true}>
        {data?.length ? (
          data?.map((coupon, i) => (
            <Col lg={4} sm={6} key={i}>
              <div className='coupon-box'>
                <div className='coupon-name'>
                  <div className='card-name'>
                    <div>
                      <h5 className='fw-semibold dark-text'>{coupon.title}</h5>
                    </div>
                  </div>
                </div>
                <div className='coupon-content'>
                  <p className='p-0'>{coupon.description}</p>
                  <div className='coupon-apply'>
                    <h6 className='coupon-code success-color'>#{coupon.code}</h6>
                    <Btn color='transparent' className='theme-btn border-btn copy-btn mt-0' onClick={() => onCopyCode(coupon.code)}>
                      {t("CopyCode")}
                    </Btn>
                  </div>
                </div>
              </div>
            </Col>
          ))
        ) : (
          <NoDataFound customClass='no-data-added' title='No Offers Found' imageUrl={"/assets/svg/empty-items.svg"} description='I regret to inform you that the offer is currently unavailable.' height='300' width='300' />
        )}
      </WrapperComponent>
    </>
  );
};

export default Offer;
