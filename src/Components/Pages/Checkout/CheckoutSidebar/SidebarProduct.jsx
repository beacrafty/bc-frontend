import { placeHolderImage } from "@/Components/Widgets/Placeholder";
import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import Image from "next/image";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const SidebarProduct = ({ values }) => {
  const { t } = useTranslation("common");
  const { cartProducts } = useContext(CartContext);
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
    <div className="checkout-details">
      <div className="order-box">
        <div className="title-box">
          <h4>{t("SummaryOrder")}</h4>
          <p>{t("SummaryOrderDescription")}</p>
        </div>
        <ul className="qty">
          {cartProducts?.map((item, i) => (
            <li key={i}>
              {item && (
                <div className="cart-image">
                  <Image src={item?.variation && item?.variation?.variation_image ? item?.variation?.variation_image?.original_url : item?.product?.product_thumbnail ? item?.product?.product_thumbnail?.original_url : placeHolderImage} className="img-fluid" alt={getProductName(item?.product?.name) || "product"} width={70} height={70} />
                </div>
              )}
              <div className="cart-content">
                <div>
                  <h4>{item?.variation ? item?.variation?.name : getProductName(item?.product?.name)}</h4>
                  <h5 className="text-theme">
                    {item?.variation ? convertCurrency(item?.variation.sale_price) : convertCurrency(item?.product?.sale_price)} x {item.quantity}
                  </h5>
                </div>
                <span className="text-theme">{convertCurrency((item?.variation ? item?.variation.sale_price : item?.product?.sale_price) * item.quantity)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarProduct;
