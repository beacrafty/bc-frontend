"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import {useContext} from "react";

const InstructionsContent = () => {
  const { themeOption, isLoading } = useContext(ThemeOptionContext);
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
          <h2>Instructions for Proper Care and Use.</h2>
          <br/>
          <br/>

          <h3>Preamble</h3>
          <p>These Terms and Conditions of Sale (T&Cs) govern the sale of products offered by Bea Crafty, a company specializing in the sale of handmade olive wood products and other artisan goods. By placing an order on our website or through online platforms such as Etsy, Amazon, etc., the customer acknowledges and accepts these T&Cs without reservation.</p>

          <br/>
          <h3>Products</h3>
          <p>The products offered by Bea Crafty are handmade items, mainly made from olive wood, but also other natural materials. Each product is unique and may have variations in shape, color, and texture due to the natural characteristics of wood. These variations are not considered defects but are a guarantee of the authenticity and craftsmanship of the products.</p>

          <br/>
          <h3>Orders</h3>
          <p>Orders can be placed on our website or on online platforms such as Etsy, Amazon, or any other platform where Bea Crafty is present. By placing an order, the customer confirms that they have read and accepted these T&Cs.<br/><br/> <b>Product Availability:</b> In case of a stock shortage, Bea Crafty will inform the customer as soon as possible. The customer may then choose between a refund or an exchange for a similar product.</p>
          <br/>
          <h3>Prices</h3>
          <p>The prices of products are listed in euros (€) and include the applicable VAT in Germany. Shipping costs will be calculated based on the delivery method and address and will be shown before confirming the order.</p>
        </WrapperComponent>
      </>
  );
}

export default InstructionsContent;
