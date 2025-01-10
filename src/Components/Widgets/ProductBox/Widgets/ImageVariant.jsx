import { ImagePath } from "@/Utils/Constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const ImageVariant = ({ item, variant = "image_zoom", thumbnail, gallery_images, product, width, height }) => {

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
    <>
      {variant === "image_slider" ? (
        <Slider {...customOptions} onMouseLeave={stopAutoplay} onMouseEnter={startAutoplay}>
          {product.product_galleries?.map((image, index) => (
            <Image src={thumbnail?.original_url ? thumbnail?.original_url : `${ImagePath}/placeholder.png`} className="img-fluid bg-img" alt={getProductName(product.name)} />
          ))}
        </Slider>
      ) : variant === "image_flip" ? (
        <div className="flip">
          {flipImage?.slice(0, 2)?.map((image, index) => (
            <div key={index} className={i == 0 ? "front" : "back"}>
              <Link href={`/product/${product.slug}`}>
                <Image src={thumbnail?.original_url ? thumbnail?.original_url : `${ImagePath}/placeholder.png`} className="img-fluid bg-img" alt={getProductName(product.name)} />
              </Link>
            </div>
          ))}
        </div>
      ) : variant === "image_zoom" ? (
        <div className="zoom">
          <Link href={`/product/${product?.slug}`}>
            <Image src={thumbnail?.original_url ? thumbnail?.original_url : `${ImagePath}/placeholder.png`} className="img-fluid bg-img" alt={getProductName(product?.name)} width={width} height={height} />
          </Link>
        </div>
      ) : (
        <Link href={`/product/${product.slug}`}>
          <Image src={thumbnail?.original_url ? thumbnail?.original_url : `${ImagePath}/placeholder.png`} className="img-fluid bg-img" alt={getProductName(product?.name)}/>
        </Link>
      )}
    </>
  );
};

export default ImageVariant;
