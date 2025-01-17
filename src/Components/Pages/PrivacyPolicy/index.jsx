"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const PrivacyPolicyContent = () => {
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  const { themeOption, isLoading } = useContext(ThemeOptionContext);

  const data = {en: `
          <h2>Privacy Policy.</h2>
          <br/>
          <br/>

          <p>At Bea Crafty, we are committed to protecting the privacy and security of your personal data. This privacy policy explains how we collect, use, and protect your personal information when you use our website and our online selling platforms (Etsy, Amazon, etc.).
            By accessing our website or placing an order, you agree to this privacy policy and authorize us to process your personal data in accordance with this policy.
          </p>
          
          <br/>
          <h3>Types of Data Collected</h3>
          <p>We collect various categories of personal data when you interact with our website and online platforms:</p>
          <br/>
          <p>- <b>Contact Data:</b> Name, email address, phone number, delivery address.</p>
          <p>- <b>Order Data:</b> Name, email address, phone number, delivery address.</p>
          <p>- <b>Browsing Data:</b></p>
          <p>- <b>Return and Exchange Data:</b></p>
          <br/>

          <h3>Purpose of Data Collection</h3>
          <p>We collect and process your personal data for the following purposes:</p>
          <p>- <b>Order processing:</b> To manage and execute your orders, including payments, shipping, and returns.</p>
          <p>- <b>Customer Experience Improvement:</b> To enhance our customer service, respond to your inquiries, and personalize your experience on our website and platforms.</p>
          <p>- <b>Marketing:</b> We may use your information to send you special offers, promotions, newsletters, and information about our products and services if you consent.</p>
          <p>- <b>Security and Legal Compliance:</b> To ensure the security of our website, prevent fraud, and comply with consumer protection and data protection laws.</p>
          <br/>

          <h3>Data Sharing</h3>
          <p>We do not share your personal data with third parties, except in the following cases:</p>
          <p>- <b>Service Providers</b>: We may share your information with third-party service providers who assist in running our business, such as payment processors (PayPal, Stripe), delivery providers (couriers, postal services), or website management services.</p>
          <p>- <b>Legal Compliance</b>: We may disclose your information if required to comply with legal obligations, legal processes, or governmental requests.</p>
          <br/>

          <h3>Data Retention</h3>
          <p>We retain your personal data for the duration necessary to fulfill the purposes for which it was collected, including legal, accounting, and tax requirements.</p>
          <br/>

          <h3>Data Security</h3>
          <p>We implement technical and organizational security measures to protect your personal data against loss, unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet can be guaranteed to be completely secure.</p>
          <br/>

          <h3>Your Rights</h3>
          <p>As a user of our services, you have the following rights:</p>
          <p>- <b>Access</b>: You have the right to access the personal data we hold about you.</p>
          <p>- <b>Correction</b>: You have the right to correct any inaccurate or incomplete data.</p>
          <p>- <b>Deletion</b>: You can request that your personal data be deleted, subject to certain conditions.</p>
          <p>- <b>Opt-Out</b>: You can unsubscribe from marketing communications at any time. To exercise these rights, please contact us at contactbeacrafty@gmail.com.</p>
          <br/>

          <h3>Cookies</h3>
          <p>We use cookies and similar technologies to improve the functionality and performance of our website. Cookies help us personalize content and advertisements, analyze website traffic, and enhance the user experience. You can manage cookie preferences through your browser settings.</p>
          <br/>

          <h3>Modifications to Privacy Policy</h3>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated date of revision.</p>
          <br/>
  `, 
      fr: `
          <h2>Politique de Confidentialité de Bea Crafty</h2>
          <br/>
          <br/>

          <p>Chez Bea Crafty, nous nous engageons à protéger la confidentialité et la sécurité de vos données personnelles. La présente politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site internet, ainsi que nos plateformes de vente en ligne (Etsy, Amazon, etc.).
En accédant à notre site web ou en passant une commande, vous acceptez cette politique de confidentialité et nous autorisez à traiter vos données personnelles conformément à cette politique.
</p>
          
          <br/>
          <h3>Types de données collectées</h3>
          <p>Nous collectons différentes catégories de données personnelles lorsque vous interagissez avec notre site web et nos plateformes de vente en ligne :</p>
          <br/>
          <p>- <b>Données de contact:</b> Name, email address, phone number, delivery address.</p>
          <p>- <b>Données de commande:</b> Name, email address, phone number, delivery address.</p>
          <p>- <b>Données de navigation:</b></p>
          <p>- <b>Données relatives aux retours et échanges:</b></p>
          <br/>

          <h3>Finalités de la collecte des données</h3>
          <p>We collect and process your personal data for the following purposes:</p>
          <p>- <b>Order processing:</b> To manage and execute your orders, including payments, shipping, and returns.</p>
          <p>- <b>Customer Experience Improvement:</b> To enhance our customer service, respond to your inquiries, and personalize your experience on our website and platforms.</p>
          <p>- <b>Marketing:</b> We may use your information to send you special offers, promotions, newsletters, and information about our products and services if you consent.</p>
          <p>- <b>Security and Legal Compliance:</b> To ensure the security of our website, prevent fraud, and comply with consumer protection and data protection laws.</p>
          <br/>

          <h3>Partage des données</h3>
          <p>We do not share your personal data with third parties, except in the following cases:</p>
          <p>- <b>Service Providers</b>: We may share your information with third-party service providers who assist in running our business, such as payment processors (PayPal, Stripe), delivery providers (couriers, postal services), or website management services.</p>
          <p>- <b>Legal Compliance</b>: We may disclose your information if required to comply with legal obligations, legal processes, or governmental requests.</p>
          <br/>

          <h3>Conservation des données</h3>
          <p>We retain your personal data for the duration necessary to fulfill the purposes for which it was collected, including legal, accounting, and tax requirements.</p>
          <br/>

          <h3>Sécurité des données</h3>
          <p>We implement technical and organizational security measures to protect your personal data against loss, unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet can be guaranteed to be completely secure.</p>
          <br/>

          <h3>Vos droits</h3>
          <p>As a user of our services, you have the following rights:</p>
          <p>- <b>Access</b>: You have the right to access the personal data we hold about you.</p>
          <p>- <b>Correction</b>: You have the right to correct any inaccurate or incomplete data.</p>
          <p>- <b>Deletion</b>: You can request that your personal data be deleted, subject to certain conditions.</p>
          <p>- <b>Opt-Out</b>: You can unsubscribe from marketing communications at any time. To exercise these rights, please contact us at contactbeacrafty@gmail.com.</p>
          <br/>

          <h3>Cookies</h3>
          <p>We use cookies and similar technologies to improve the functionality and performance of our website. Cookies help us personalize content and advertisements, analyze website traffic, and enhance the user experience. You can manage cookie preferences through your browser settings.</p>
          <br/>

          <h3>Modifications de la politique de confidentialité</h3>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated date of revision.</p>
          <br/>
      `,
      de: `
          <h2>Datenschutzerklärung</h2>
          <br/>
          <br/>

          <p>Bei Bea Crafty setzen wir uns dafür ein, die Privatsphäre und Sicherheit Ihrer persönlichen Daten zu schützen. Diese Datenschutzerklärung erklärt, wie wir Ihre persönlichen Daten erheben, verwenden und schützen, wenn Sie unsere Website und unsere Online-Verkaufsplattformen (Etsy, Amazon usw.) nutzen.
Indem Sie auf unsere Website zugreifen oder eine Bestellung aufgeben, stimmen Sie dieser Datenschutzerklärung zu und ermächtigen uns, Ihre persönlichen Daten in Übereinstimmung mit dieser Erklärung zu verarbeiten.
</p>
          
          <br/>
          <h3>Erhobene Daten</h3>
          <p>We collect various categories of personal data when you interact with our website and online platforms:</p>
          <br/>
          <p>- <b>Kontaktdaten:</b> Name, email address, phone number, delivery address.</p>
          <p>- <b>Zahlungsinformationen:</b> Name, email address, phone number, delivery address.</p>
          <p>- <b>Bestellinformationen:</b></p>
          <br/>

          <h3>Verwendung Ihrer Daten</h3>
          <p>We collect and process your personal data for the following purposes:</p>
          <p>- <b>Order processing:</b> To manage and execute your orders, including payments, shipping, and returns.</p>
          <p>- <b>Customer Experience Improvement:</b> To enhance our customer service, respond to your inquiries, and personalize your experience on our website and platforms.</p>
          <p>- <b>Marketing:</b> We may use your information to send you special offers, promotions, newsletters, and information about our products and services if you consent.</p>
          <p>- <b>Security and Legal Compliance:</b> To ensure the security of our website, prevent fraud, and comply with consumer protection and data protection laws.</p>
          <br/>

          <h3>Datenweitergabe an Dritte</h3>
          <p>We do not share your personal data with third parties, except in the following cases:</p>
          <p>- <b>Service Providers</b>: We may share your information with third-party service providers who assist in running our business, such as payment processors (PayPal, Stripe), delivery providers (couriers, postal services), or website management services.</p>
          <p>- <b>Legal Compliance</b>: We may disclose your information if required to comply with legal obligations, legal processes, or governmental requests.</p>
          <br/>

          <h3>Sicherheit Ihrer Daten</h3>
          <p>We retain your personal data for the duration necessary to fulfill the purposes for which it was collected, including legal, accounting, and tax requirements.</p>
          <br/>

          <h3>Data Security</h3>
          <p>We implement technical and organizational security measures to protect your personal data against loss, unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet can be guaranteed to be completely secure.</p>
          <br/>

          <h3>Ihre Rechte</h3>
          <p>As a user of our services, you have the following rights:</p>
          <p>- <b>Access</b>: You have the right to access the personal data we hold about you.</p>
          <p>- <b>Correction</b>: You have the right to correct any inaccurate or incomplete data.</p>
          <p>- <b>Deletion</b>: You can request that your personal data be deleted, subject to certain conditions.</p>
          <p>- <b>Opt-Out</b>: You can unsubscribe from marketing communications at any time. To exercise these rights, please contact us at contactbeacrafty@gmail.com.</p>
          <br/>

          <h3>Cookies</h3>
          <p>We use cookies and similar technologies to improve the functionality and performance of our website. Cookies help us personalize content and advertisements, analyze website traffic, and enhance the user experience. You can manage cookie preferences through your browser settings.</p>
          <br/>

          <h3>Änderungen der Datenschutzerklärung</h3>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated date of revision.</p>
          <br/>
      `,
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

export default PrivacyPolicyContent;
