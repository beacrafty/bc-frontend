import NoDataFound from "@/Components/Widgets/NoDataFound";
import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import Loader from "@/Layout/Loader";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ApplyCoupon from "./ApplyCoupon";
import PlaceOrder from "./PlaceOrder";
import PointWallet from "./PointWallet";
import { ImagePath } from "@/Utils/Constants";

function getVATPercentage(country, countryCode) {
  // Mapping of European countries to their standard VAT rates
  const vatRates = {
    // Country names
    "Austria": 20,
    "Belgium": 21,
    "Bulgaria": 20,
    "Croatia": 25,
    "Cyprus": 19,
    "Czech Republic": 21,
    "Denmark": 25,
    "Estonia": 20,
    "Finland": 24,
    "France": 20,
    "Germany": 19,
    "Greece": 24,
    "Hungary": 27,
    "Ireland": 23,
    "Italy": 22,
    "Latvia": 21,
    "Lithuania": 21,
    "Luxembourg": 17,
    "Malta": 18,
    "Netherlands": 21,
    "Poland": 23,
    "Portugal": 23,
    "Romania": 19,
    "Slovakia": 20,
    "Slovenia": 22,
    "Spain": 21,
    "Sweden": 25,
    // Country codes
    "43": 20,  // Austria
    "32": 21,  // Belgium
    "359": 20, // Bulgaria
    "385": 25, // Croatia
    "357": 19, // Cyprus
    "420": 21, // Czech Republic
    "45": 25,  // Denmark
    "372": 20, // Estonia
    "358": 24, // Finland
    "33": 20,  // France
    "49": 19,  // Germany
    "30": 24,  // Greece
    "36": 27,  // Hungary
    "353": 23, // Ireland
    "39": 22,  // Italy
    "371": 21, // Latvia
    "370": 21, // Lithuania
    "352": 17, // Luxembourg
    "356": 18, // Malta
    "31": 21,  // Netherlands
    "48": 23,  // Poland
    "351": 23, // Portugal
    "40": 19,  // Romania
    "421": 20, // Slovakia
    "386": 22, // Slovenia
    "34": 21,  // Spain
    "46": 25   // Sweden
  };

  // First try with country code if available
  if (countryCode && vatRates[countryCode]) {
    return vatRates[countryCode];
  }

  // If no country code or not found, try with country name
  if (!country) return null;

  // Convert the input to title case for consistency
  const formattedCountryName = country
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return vatRates[formattedCountryName] ?? null;
}

const BillingSummary = ({ country, data, values, setFieldValue, isLoading, mutate, storeCoupon, setStoreCoupon, errorCoupon, appliedCoupon, setAppliedCoupon, errors }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { cartProducts } = useContext(CartContext);
  const { t } = useTranslation("common");
  const access_token = Cookies.get("uat");

  const [vatPercentage, setVatPercentage] = useState('');

  useEffect(() => {
    const countryCode = values?.billing_address?.country_code || null;
    setVatPercentage(getVATPercentage(country, countryCode));
  }, [country, values?.billing_address?.country_code]);
  
  console.log(values)

  return (
    <div className="checkout-details">
      {cartProducts?.length > 0 ? (
        <div className="order-box">
          <div className="title-box">
            <h4>{t("BillingSummary")}</h4>
            {access_token && (
              <ApplyCoupon
                values={values}
                setFieldValue={setFieldValue}
                data={data}
                storeCoupon={storeCoupon}
                setStoreCoupon={setStoreCoupon}
                errorCoupon={errorCoupon}
                appliedCoupon={appliedCoupon}
                setAppliedCoupon={setAppliedCoupon}
                mutate={mutate}
                isLoading={isLoading}
              />
            )}
          </div>
          <div>
            <div className="custom-box-loader">
              {isLoading && (
                <div className="box-loader">
                  <Loader />
                </div>
              )}
              <ul className="sub-total">
                <li>
                  {t("Subtotal")}
                  <span className="count">
                    {data?.data?.total?.sub_total ? convertCurrency(data?.data?.total?.sub_total) : t("Notcalculatedyet")}
                  </span>
                </li>
                <li>
                  {t("Shipping")}
                  <span className="count">
                    {data?.data?.total?.shipping_total >= 0 ? convertCurrency(data?.data?.total?.shipping_total) : t("Notcalculatedyet")}
                  </span>
                </li>
                <li>
                  {t("Tax")}
                  <span className="count">
                    {data?.data?.total?.tax_total ? convertCurrency(data?.data?.total?.tax_total) : t("Notcalculatedyet")}
                  </span>
                </li>

                <PointWallet values={values} setFieldValue={setFieldValue} data={data} />
              </ul>
              <ul className="total">
                {appliedCoupon === "applied" && data?.data?.total?.coupon_total_discount && (
                  <li className="list-total">
                    {t("YouSave")}
                    <span className="count">
                      {data?.data?.total?.coupon_total_discount ? convertCurrency(data?.data?.total?.coupon_total_discount - data?.data?.total?.tax_total) : ""}
                    </span>
                  </li>
                )}
                <li className="list-total">
                  {t("Total")}
                  <span className="count">
                    {data?.data?.total?.total ? convertCurrency(data?.data?.total?.total) : t("Notcalculatedyet")}
                  </span>
                </li>
              </ul>
              {vatPercentage && (
                <span>{`%${vatPercentage} ${t("TVAIncluded")}`}</span>
              )}
              <PlaceOrder values={values} errors={errors} />
            </div>
          </div>
        </div>
      ) : (
        <NoDataFound
          customClass="no-data-added"
          height={156}
          width={180}
          imageUrl={`${ImagePath}/empty-items.svg`}
          title="EmptyCart"
        />
      )}
    </div>
  );
};

export default BillingSummary;
