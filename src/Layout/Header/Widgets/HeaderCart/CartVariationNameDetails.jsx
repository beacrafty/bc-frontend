import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const CartVariationNameDetails = ({ cloneVariation }) => {
  const { t } = useTranslation("common");
  const { convertCurrency } = useContext(SettingContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  const getProductName = (name) => {
    try {
      const productNameObject = JSON.parse(name);
      return productNameObject[currentLanguage] || productNameObject.en;
    } catch (error) {
      console.error("Failed to parse product name:", error);
      return name;
    }
  };

  return (
    <div className="product-right product-page-details variation-title">
      <h2 className="main-title">
        <Link href={`/product/${cloneVariation?.product?.slug}`}> {getProductName(cloneVariation?.product?.name)}</Link>
      </h2>
      <h3 className="price-detail">
        {cloneVariation?.variation?.sale_price ? convertCurrency(cloneVariation?.variation?.sale_price) : convertCurrency(cloneVariation?.product?.sale_price)}
        <span>
          {cloneVariation?.variation?.discount ?? cloneVariation?.product?.discount}% {t("off")}
        </span>
      </h3>
    </div>
  );
};

export default CartVariationNameDetails;
