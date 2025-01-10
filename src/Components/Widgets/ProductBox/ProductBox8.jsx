import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import CartButton from "./Widgets/CartButton";
import QuickViewButton from "./Widgets/HoverButton/QuickViewButton";
import WishlistButton from "./Widgets/HoverButton/WishlistButton";
import ProductRatingBox from "./Widgets/ProductRatingBox";
import { useTranslation } from "react-i18next";

const ProductBox8 = ({ productState }) => {
  const { convertCurrency } = useContext(SettingContext);
  
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;
  const [productName, setProductName] = useState({});

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
  }, [productState.product.name]);

  return (
    <>
      <div className={`basic-product theme-product-7 ${productState?.product?.stock_status === "out_of_stock" ? "sold-out" : ""}`}>
        <div className="img-wrapper">
          <Link href={`/product/${productState?.product?.slug}`} className="img-fluid lazyload bg-img bg-top">
            <img src={productState?.product?.product_thumbnail?.original_url} className="img-fluid bg-img" alt="product-image" />
          </Link>
          <QuickViewButton product={productState?.product} className="quick-option" />
        </div>
        <div className="product-detail">
          <Link href={`/product/${productState?.product?.slug}`} className="product-title mb-2">
            {productName?.[currentLanguage]}
          </Link>
          <h4 className="price">{convertCurrency(productState?.product?.sale_price)}</h4>
          <div className="rating-w-count mb-0">
            <div className="rating">
              <ProductRatingBox ratingCount={productState?.rating_count} />
            </div>
            <span>({productState?.product?.reviews_count})</span>
          </div>
          <div className="product-action">
            <WishlistButton productstate={productState?.product} />
            <CartButton productState={productState} selectedVariation={productState.selectedVariation} text="Add to cart" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBox8;
