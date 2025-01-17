"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const TermsAndConditionsContent = () => {
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  const { themeOption, isLoading } = useContext(ThemeOptionContext);

  const data = {en: `
          <h2>Terms And Conditions.</h2>
          <br/>
          <br/>

          <h3>Preamble</h3>
          <p>These Terms and Conditions of Sale (T&Cs) govern the sale of products offered by Bea Crafty, a company specializing in the sale of handmade olive wood products and other artisan goods. By placing an order on our website or through online platforms such as Etsy, Amazon, etc., the customer acknowledges and accepts these T&Cs without reservation.</p>

          <br/>
          <h3>Products</h3>
          <p>The products offered by Bea Crafty are handmade items, mainly made from olive wood, but also other natural materials. Each product is unique and may have variations in shape, color, and texture due to the natural characteristics of wood. These variations are not considered defects but are a guarantee of the authenticity and craftsmanship of the products.</p>

          <br/>
          <h3>Orders</h3>
          <p>Orders can be placed on our website or on online platforms such as Etsy, Amazon, or any other platform where Bea Crafty is present. By placing an order, the customer confirms that they have read and accepted these T&Cs.
          <br/><br/>

          <p><b>Product Availability:</b> In case of a stock shortage, Bea Crafty will inform the customer as soon as possible. The customer may then choose between a refund or an exchange for a similar product.</p>
          <br/>
          <p><b>Order Modifications:</b> Any order modification must be made before shipment. Once the order has been shipped, it cannot be modified.</p>
          <br/>

          <h3>Prices</h3>
          <p>The prices of products are listed in euros (€) and include the applicable VAT in Germany. Shipping costs will be calculated based on the delivery method and address and will be shown before confirming the order.</p>
          <br/>

          <h3>Payment Methods</h3>
          <p>Payment must be made at the time of order. Accepted payment methods are:<br>
            - Credit card (Visa, MasterCard, etc.)<br>
            - PayPal<br>
            - Bank transfer<br>
            - Other payment methods available on our website and online platforms.</br>
            Payment must be completed in full before the products are shipped. The order will only be considered valid once payment is confirmed.</p>

          <br/>

          <h3>Delivery</h3>
          <p>Products are delivered to the address provided by the customer during the order. Delivery times will vary based on the delivery method chosen.</p>
          <br/>
          <p><b>Delivery Modes:</b> Standard and express delivery options are available, depending on availability and destination. Delivery costs will be added to the order and calculated before confirming the order.</p>
          <br/>
          <p><b>Responsibility:</b> The customer is responsible for ensuring that the delivery address is correct and complete.</p>
          <br/>

          <h3>Right of Withdrawal and Returns</h3>
          <p>In accordance with German law, the customer has a 14-day right of withdrawal from the receipt of the products to return items without providing a reason. The customer may request a refund or exchange of the products provided they are returned in their original condition and packaging.</p>
          <br/>
          <p><b>Return Conditions:</b> The customer must notify Bea Crafty of their intention to return the products within 14 days of receiving the items by email at contactbeacrafty@gmail.com. Return shipping costs are the responsibility of the customer, unless the product is defective or not in accordance with the order.</p>
          <br/>

          <h3>Guarantees</h3>
          <p>The products offered by Bea Crafty are guaranteed against manufacturing defects in accordance with applicable law.</p>
          <br/>
          <p><b>Legal Conformity Guarantee:</b> The customer benefits from the legal conformity guarantee and can request an exchange or refund if the product is found to be defective.</p>
          <br/>
          <p><b>Guarantee Against Hidden Defects:</b> Products are also covered by a guarantee against hidden defects in accordance with German law.</p>
          <br/>

          <h3>Liability</h3>
          <p>Bea Crafty makes every effort to provide quality products. However, Bea Crafty’s liability will not be engaged in the event of force majeure (strikes, natural disasters, etc.) or improper use of the products. Bea Crafty is not liable for indirect damages, such as loss of profit or data.</p>
          <br/>

          <h3>Protection of Personal Data</h3>
          <p>Bea Crafty is committed to protecting the confidentiality of customers’ personal data. Personal data collected is only used for processing orders, delivery, and customer relationship management. Bea Crafty does not sell or share personal data with third parties, except where required by law.</p>
          <br/>

          <h3>Modifications of T&Cs</h3>
          <p>Bea Crafty reserves the right to modify these T&Cs at any time. Changes will be published on the website and will take effect immediately upon publication. If an order was placed before the modification, the previous version of the T&Cs will apply.</p>
          <br/>

          <h3>Applicable Law and Dispute Resolution</h3>
          <p>These T&Cs are governed by German law. In case of a dispute, we encourage you to contact us directly to find an amicable solution.</p>
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

export default TermsAndConditionsContent;
