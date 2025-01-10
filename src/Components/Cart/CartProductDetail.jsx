import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Avatar from "../Widgets/Avatar";
import { placeHolderImage } from "../Widgets/Placeholder";
import { useState, useEffect } from "react";

const CartProductDetail = ({ elem }) => {
  const { t } = useTranslation("common");
  const { convertCurrency } = useContext(SettingContext);

  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;
  const [productName, setProductName] = useState({});

  useEffect(() => {
    if (elem.product.name) {
      if (typeof elem?.product?.name === "string") {
        try {
          setProductName(JSON.parse(elem.product.name));
        } catch (error) {
          console.error("Failed to parse values.name:", error);
        }
      }

    }
  }, [elem]);

  return (
    <td>
      <Link href={`/product/${elem?.product?.slug}`} className="product-image">
        <Avatar customeClass="product-image" customImageClass={"img-fluid"} data={elem?.variation?.variation_image ?? elem?.product?.product_thumbnail} placeHolder={placeHolderImage} name={productName?.[currentLanguage]} />
      </Link>
    </td>
  );
};

export default CartProductDetail;
