"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const ReturnPolicyContent = () => {
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  const { themeOption, isLoading } = useContext(ThemeOptionContext);

  const data = {en: `
          <h2>Return Policy.</h2>
          <br/>
          <br/>

          <h3>Return Period</h3>
          <p>You have 14 days from the receipt of your order to initiate a return. If the 14-day period has passed, we unfortunately cannot offer a refund or exchange.</p>
          <br/>

          <h3>Return Conditions</h3>
          <p>To be eligible for a return, the item must:</p>
          <p>- Be unused and in its original condition, with all tags and original packaging.</p>
          <p>- Not be personalized, as customized items are non-refundable.</p>
          <p>- Be returned with all accessories, manuals, and documents included in the original packaging.</p>
          <br/>

          <h3>Non-Eligible Items</h3>
          <p>The following items cannot be returned:</p>
          <p>- Sale or discounted items.</p>
          <p>- Items that have been used or damaged by the customer.</p>
          <p>- Personalized or made-to-order items.</p>
          <br/>

          <h3>Return Process</h3>
          <p>To initiate a return, please follow these steps:</p>
          <p>1. We will provide you with a return authorization and the return address.</p>
          <p>2. Items that have been used or damaged by the customer.</p>
          <p>3. Carefully pack the item in its original packaging and include all necessary accessories and documents.</p>
          <p>4. Ship the item to the provided address. Return shipping costs are the responsibility of the buyer unless the item is defective or incorrect.</p>
          <br/>

          <h3>Refunds</h3>
          <p>Once we have received and inspected your return, we will notify you via email whether your refund is approved or denied. If the return is approved:</p>
          <p>- The refund will be processed and credited to your original payment method.
Please note that processing times may vary depending on your financial institution, and this may take 5-10 business days.</p>
          <br/>

          <h3>Exchanges</h3>
          <p>We do not offer exchanges for items. If you wish for a different product, we recommend returning the unwanted item and placing a new order for the desired item.</p>
          <br/>

          <h3>Damaged or Defective Returns</h3>
          <p>If you receive a damaged or defective item:</p>
          <p>- Contact us immediately within 48 hours of receipt.</p>
          <p>- We will ask for photos of the damaged product and packaging.</p>
          <p>- We will arrange for a return and either an exchange or refund, depending on the case.</p>
          <br/>

          <h3>Return Tracking</h3>
          <p>It is advised to retain the tracking number for your return package. We are not responsible for lost or stolen packages during the return process.</p>
          <br/>

          <h3>Return Shipping Costs</h3>
          <p>Return shipping costs are the responsibility of the buyer, unless the product is defective or our mistake. We recommend using a tracked shipping service to ensure your return arrives safely.</p>
          <br/>

          <h3>Policy Changes</h3>
          <p>We reserve the right to modify this return policy at any time. Changes will be posted on our website. It is advised to review this policy regularly for updates.</p>
          <br/>
  `, 
      fr: "French",
      de: "Deutsh",
  };

  if (isLoading) return <Loader />;

  return (
      <>
        <WrapperComponent
          classes={{
            sectionClass: "about-page section-b-space ",
            fluidClass: "container",
          }}
          noRowCol={true}
        >
            <div dangerouslySetInnerHTML={{"__html": data?.[currentLanguage] || data?.en}}></div>
        </WrapperComponent>
      </>
  );
}

export default ReturnPolicyContent;
