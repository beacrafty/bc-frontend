import { Col, Input, Label, Row } from 'reactstrap';
import { useTranslation } from "react-i18next";
import { Fragment, useContext, useEffect, useState } from 'react';
import { 
    RiBankCardLine, 
    RiPaypalLine, 
    RiWalletLine, 
    RiMoneyDollarCircleLine,
    RiExchangeDollarLine 
} from 'react-icons/ri';
import SettingContext from '@/Context/SettingContext';
import { ModifyString } from '@/Utils/CustomFunctions/ModifyString';

const PaymentSection = ({ values, setFieldValue }) => {
    const { t } = useTranslation('common');
    const { settingData } = useContext(SettingContext);
    const [initial, setInitial] = useState(0);

    // Get payment icon based on payment method name
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

    useEffect(() => {
        const firstActiveMethod = settingData?.payment_methods?.find(method => method.status);
        if (firstActiveMethod) {
            setFieldValue('payment_method', firstActiveMethod.name);
            const activeIndex = settingData?.payment_methods?.findIndex(method => method.status);
            setInitial(activeIndex);
        }
    }, [settingData?.payment_methods]);

    return (
        <div className="checkbox-main-box">
            <div className="checkout-title1">
                <h2>{'Payment Details'}</h2>
            </div>
            <Row className='g-sm-4 g-3'>
                {settingData?.payment_methods?.map((elem, i) => (
                    <Fragment key={i}>
                        {elem?.status && (
                            <Col xxl={6}>
                                <div className='payment-option'>
                                    <div className='payment-category w-100'>
                                        <div className='form-check custom-form-check gap-0 hide-check-box w-100'>
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
                                            <Label className='form-check-label' htmlFor={elem.name}>
                                                {getPaymentIcon(elem?.name)}
                                                {ModifyString(elem?.name, 'upper')}
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
    );
};

export default PaymentSection;
