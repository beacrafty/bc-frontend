import ProductIdsContext from "@/Context/ProductIdsContext";
import { ImagePath } from "@/Utils/Constants";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseLine } from "react-icons/ri";
import { Media } from "reactstrap";

const RecentPurchase = () => {
  const { t, i18n } = useTranslation("common");
  const { filteredProduct } = useContext(ProductIdsContext);
  const [show, setShow] = useState(false);
  const [min, setMin] = useState(10);
  const [popupEnable, setPopupEnable] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let intervalId;
    if (popupEnable) {
      intervalId = setInterval(() => {
        setShow(true);
        setMin(Math.floor(Math.random() * 60) + 1);
        randomlySelectProduct();
        setTimeout(() => {
          setShow(false);
        }, 5000);
      }, 20000);
    }

    return () => {
      clearInterval(intervalId); // Cleanup the interval on unmount.
    };
  }, [popupEnable]);

  useEffect(() => {
    randomlySelectProduct();
  }, [filteredProduct]);

  const randomlySelectProduct = () => {
    if (!filteredProduct?.length) {
      ("");
    } else {
      const randomIndex = Math.floor(Math.random() * filteredProduct.length);
      setProduct(filteredProduct[randomIndex]);
    }
  };

  if (!popupEnable || !product) {
    return null; // Return null when the popup is not enabled or there's no product to display.
  }

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
    <Media className={`recently-purchase ${show ? "show" : ""}`}>
      <Image height={64} width={85} src={product?.product_thumbnail?.original_url ? product?.product_thumbnail?.original_url : `${ImagePath}/placeholder/product.png`} alt={getProductName(product?.name) || "product"} />
      <Media body>
        <div>
          <div className="title">{t("SomeoneRecentlyPurchased")}</div>
          {product?.name && (
            <Link href={`/product/${product?.slug}`}>
              <span className="product-name">{getProductName(product?.name)}</span>
            </Link>
          )}
          <small className="timeAgo">
            {min} {t("minutesago")}
          </small>
        </div>
      </Media>
      <RiCloseLine className="close-popup" onClick={() => setPopupEnable(false)} />
    </Media>
  );
};

export default RecentPurchase;
