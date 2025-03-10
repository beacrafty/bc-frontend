import RatingBox from "@/Components/Collection/CollectionSidebar/RatingBox";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import CompareContext from "@/Context/CompareContext";
import SettingContext from "@/Context/SettingContext";
import { CompareSlider, compareSlider } from "@/Data/SliderSetting";
import Btn from "@/Elements/Buttons/Btn";
import { CompareAPI } from "@/Utils/AxiosUtils/API";
import { ModifyString } from "@/Utils/CustomFunctions/ModifyString";
import useDelete from "@/Utils/Hooks/useDelete";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import Slider from "react-slick";
import EmptyImage from "../../../../public/assets/images/svg/empty-items.svg";
import CompareAction from "./CompareAction";
import CompareWrapper from "./CompareWrapper";
import { RiCloseLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const CompareData = () => {
  const { setCompareState, compareState, refetch } = useContext(CompareContext);
  const { convertCurrency } = useContext(SettingContext);
  const { data, mutate: compareMutate, isLoading: compareLoading } = useDelete(CompareAPI, `/compare`);
  useEffect(() => {
    if (data?.status == 200 || data?.status == 201) {
      refetch();
    }
  }, [compareLoading]);
  const removeFromCompare = (productObj) => {
    compareMutate(productObj.id);
    setCompareState((prevState) => prevState.filter((elem) => elem.id !== productObj?.id));
  };
  let settings = compareSlider(compareState.length)

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
      {compareState?.length > 0 ? (
        <div className="slide-4 no-arrow compare-box">
          <Slider {...settings}>
            {compareState?.map((product, i) => (
              <div className="compare-part" key={i}>
                <Btn color="primary" onClick={() => removeFromCompare(product)} className="close-btn ">
                  <RiCloseLine />
                </Btn>
                <div className="img-section">
                  <div>{product.product_thumbnail.original_url && <Image src={product.product_thumbnail ? product.product_thumbnail.original_url : placeHolderImage} className="img-fluid" alt={product.name} height={156} width={156} />}</div>
                  <Link href={`/product/${product?.slug}`}>
                    <h5 className="text-title">{getProductName(product?.name)}</h5>
                  </Link>
                </div>
                <CompareWrapper data={{ title: "Discount", value: product?.discount ? product?.discount : "-" }} />
                <CompareWrapper data={{ title: "Price", value: convertCurrency(product?.sale_price) }} />
                <CompareWrapper data={{ title: "Availability", value: ModifyString(product?.stock_status) }} />
                <CompareWrapper data={{ title: "Rating" }}>
                  <div className="compare-rating">
                    <RatingBox totalRating={product?.rating_count || 0} />
                    <span className="text-content rating-text">{`(${product?.rating_count?.toFixed(2) || 0} Rating)`}</span>
                  </div>
                </CompareWrapper>
                <CompareWrapper data={{ title: "Weight", value: product?.weight ? product?.weight : "-" }} />
                <CompareAction product={product} compareMutate={compareMutate} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <NoDataFound customClass="no-data-added" imageUrl={EmptyImage} title="NoItemsAdded" description="NoCompareItemsAddedDescription" height="230" width="270" />
      )}
    </>
  );
};

export default CompareData;
