import { useContext, useEffect, useState } from "react";
import ProductBox1Rating from "@/Components/Widgets/ProductBox/ProductBox1/ProductBox1Rating";
import SettingContext from "@/Context/SettingContext";
import { useTranslation } from "react-i18next";

const ProductDetails = ({ productState }) => {
  const { t, i18n } = useTranslation("common");
  const { convertCurrency } = useContext(SettingContext);
  const [productName, setProductName] = useState({});

  const currentLanguage = i18n.resolvedLanguage;

  useEffect(() => {
    if (productState.product.name) {
      if (typeof productState?.product?.name === "string") {
        try {
          setProductName(JSON.parse(productState.product.name));
        } catch (error) {
          console.error("Failed to parse values.name:", error);
        }
      }

    }
  }, [productState?.product?.name]);

  return (
    <>
      <h2 className="name">{productName?.[currentLanguage]}</h2>
      <div className="price-rating">
        <h3 className="theme-color price">
          {productState?.selectedVariation?.sale_price ? convertCurrency(productState?.selectedVariation?.sale_price) : convertCurrency(productState?.product?.sale_price)}
          {productState?.selectedVariation?.discount || productState?.product?.discount ? <del className="text-content">{productState?.selectedVariation ? convertCurrency(productState?.selectedVariation?.price) : convertCurrency(productState?.product?.price)}</del> : null}
          {productState?.selectedVariation?.discount || productState?.product?.discount ? <del className="text-content">{productState?.selectedVariation ? convertCurrency(productState?.selectedVariation?.price) : convertCurrency(productState?.product?.price)}</del> : null}{" "}
          {productState?.selectedVariation?.discount || productState?.product?.discount ? (
            <span className="offer-top">
              {productState?.selectedVariation ? productState?.selectedVariation?.discount : productState?.product?.discount}% {t("Off")}
            </span>
          ) : null}
        </h3>
        <div className="product-rating custom-rate">
          <ProductBox1Rating totalRating={productState?.selectedVariation?.rating_count ?? productState?.product?.rating_count} />
          <span className="review">
            {productState?.selectedVariation?.reviews_count || productState?.product?.reviews_count || 0} {t("Review")}
          </span>
        </div>
      </div>
      <div className="product-contain">
        <p>{productState?.selectedVariation?.short_description ?? productState?.product?.short_description}</p>
      </div>
    </>
  );
};

export default ProductDetails;
