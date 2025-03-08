import CheckoutCard from "./common/CheckoutCard";
import { Col, Input, Label, Row } from "reactstrap";
import { RiBankCardLine, RiPaypalLine, RiWalletLine, RiMoneyDollarCircleLine, RiExchangeDollarLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { Fragment, useContext, useEffect, useState } from "react";
import SettingContext from "@/Context/SettingContext";
import { ModifyString } from "@/Utils/CustomFunctions/ModifyString";

const PaymentOptions = ({ values, setFieldValue }) => {
  const { t } = useTranslation("common");
  const { settingData } = useContext(SettingContext);
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    // Find the first active payment method
    const firstActiveMethod = settingData?.payment_methods?.find(method => method.status);
    if (firstActiveMethod) {
      setFieldValue('payment_method', firstActiveMethod.name);
      // Find the index of first active method
      const activeIndex = settingData?.payment_methods?.findIndex(method => method.status);
      setInitial(activeIndex);
    }
  }, [settingData?.payment_methods]);

  const getPaymentIcon = (methodName) => {
    switch (methodName.toLowerCase()) {
      case 'stripe':
        return <RiBankCardLine className="me-2" />;
      case 'paypal':
        return <RiPaypalLine className="me-2" />;
      case 'wallet':
        return <RiWalletLine className="me-2" />;
      case 'cod':
        return <RiMoneyDollarCircleLine className="me-2" />;
      case 'moolie':
        return <RiExchangeDollarLine className="me-2" />;
      default:
        return <RiBankCardLine className="me-2" />;
    }
  };

  return (
    <CheckoutCard icon={<RiBankCardLine />}>
      <div className="checkout-title">
        <h4>{t("PaymentOption")}</h4>
      </div>
      <div className="checkout-detail">
        <Row className="g-sm-4 g-3">
          {settingData?.payment_methods?.length &&
            settingData?.payment_methods?.map((elem, i) => (
              <Fragment key={i}>
                {elem?.status && (
                  <Col xxl={6}>
                    <div className="payment-option">
                      <div className="payment-category w-100">
                        <div className="form-check custom-form-check hide-check-box w-100">
                          <Input
                            className='form-check-input'
                            id={elem?.name}
                            checked={i === initial}
                            type='radio'
                            name='payment_method'
                            onChange={() => {
                              setFieldValue('payment_method', elem.name);
                              setInitial(i);
                            }}
                          />
                          <Label className="form-check-label" htmlFor={elem.name}>
                            {getPaymentIcon(elem?.name)}
                            {ModifyString(elem?.name, "upper")}
                          </Label>
                        </div>
                      </div>
                    </div>
                  </Col>
                )}
              </Fragment>
            ))}
        </Row>
      </div>
    </CheckoutCard>
  );
};

export default PaymentOptions;
