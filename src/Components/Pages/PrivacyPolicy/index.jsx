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
              Politique de Confidentialité de Bea Crafty<br/>
Chez Bea Crafty, nous nous engageons à protéger la confidentialité et la sécurité de vos données personnelles. La présente politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site internet, ainsi que nos plateformes de vente en ligne (Etsy, Amazon, etc.).<br/>
En accédant à notre site web ou en passant une commande, vous acceptez cette politique de confidentialité et nous autorisez à traiter vos données personnelles conformément à cette politique.<br/>
1- Types de données collectées<br/>
Nous collectons différentes catégories de données personnelles lorsque vous interagissez avec notre site web et nos plateformes de vente en ligne :<br/>
Données de contact :<br/>
Nom<br/>
Adresse email<br/>
Numéro de téléphone<br/>
Adresse de livraison<br/>
Données de commande :<br/>
Produits achetés<br/>
Quantité et prix des produits<br/>
Informations sur le paiement (notez que nous ne stockons pas les informations sensibles de paiement,  elles sont traitées par des prestataires de paiement externes, comme PayPal, Stripe, etc.)<br/>
Données de navigation :<br/>
Adresse IP<br/>
Type et version du navigateur<br/>
Données de connexion (heure de visite, pages visitées)<br/>
Informations concernant l’utilisation de notre site via des cookies ou des technologies similaires<br/>
Données relatives aux retours et échanges :<br/>
Informations sur les retours de produits (raison du retour, date du retour, etc.)<br/>
<br/>
2- Finalités de la collecte des données<br/>
Nous collectons et traitons vos données personnelles pour les finalités suivantes :<br/>
Traitement des commandes : Pour gérer et exécuter vos commandes, y compris la gestion des paiements, l’expédition et la gestion des retours.<br/>
Amélioration de l'expérience client : Pour améliorer notre service à la clientèle, répondre à vos demandes, et personnaliser votre expérience sur notre site et sur nos plateformes de vente en ligne.<br/>
Marketing : Nous pouvons utiliser vos informations pour vous envoyer des offres spéciales, des promotions, des newsletters, et des informations concernant nos produits et services, si vous y avez consenti.<br/>
Sécurité et conformité légale : Pour assurer la sécurité de notre site web, prévenir la fraude, et se conformer aux exigences légales en matière de protection des consommateurs et des données.<br/>
3- Partage des données<br/>
Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants :<br/>
Fournisseurs de services : Nous pouvons partager vos informations avec des prestataires de services tiers qui nous aident à exécuter nos activités commerciales, tels que les prestataires de services de paiement (PayPal, Stripe), de livraison (transporteurs, services postaux), ou de gestion de site web.<br/>
Conformité légale : Nous pouvons divulguer vos informations si cela est nécessaire pour se conformer à des obligations légales, des procédures judiciaires, ou des demandes gouvernementales.<br/>
4- Conservation des données<br/>
Nous conservons vos données personnelles pendant la durée nécessaire pour atteindre les objectifs pour lesquelles elles ont été collectées, y compris pour satisfaire aux exigences légales, comptables et fiscales.<br/>
Les données relatives au marketing et aux communications promotionnelles sont conservées tant que vous n'avez pas demandé à vous désabonner ou à retirer votre consentement.<br/>
5- Sécurité des données<br/>
Nous mettons en place des mesures de sécurité techniques et organisationnelles pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction.<br/>
Cela inclut l'utilisation de protocoles de cryptage sécurisés pour protéger les informations sensibles pendant la transmission (notamment les informations de paiement).<br/>
6- Vos droits<br/>
En vertu du RGPD, vous disposez des droits suivants concernant vos données personnelles :<br/>
Droit d'accès : Vous pouvez demander une copie des données personnelles que nous détenons à votre sujet.<br/>
Droit de rectification : Vous pouvez demander la correction ou la mise à jour de vos données personnelles.<br/>
Droit à l'effacement : Vous pouvez demander l'effacement de vos données personnelles, sous certaines conditions.<br/>
Droit d'opposition et de limitation : Vous pouvez vous opposer au traitement de vos données personnelles ou demander une limitation du traitement.<br/>
Droit de retirer votre consentement : Si vous avez consenti à l'utilisation de vos données pour des finalités spécifiques (par exemple, pour le marketing), vous pouvez retirer ce consentement à tout moment.<br/>
7- Cookies<br/>
Notre site utilise des cookies pour améliorer votre expérience de navigation, personnaliser le contenu, analyser le trafic et permettre l'utilisation de certaines fonctionnalités (comme les paniers d'achats). <br/>
8- Modifications de la politique de confidentialité<br/>
Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera publiée..<br/>
      `,
      de: `
Datenschutzerklärung (German)<br/>
Bei Bea Crafty setzen wir uns dafür ein, die Privatsphäre und Sicherheit Ihrer persönlichen Daten zu schützen. Diese Datenschutzerklärung erklärt, wie wir Ihre persönlichen Daten erheben, verwenden und schützen, wenn Sie unsere Website und unsere Online-Verkaufsplattformen (Etsy, Amazon usw.) nutzen.<br/>
Indem Sie auf unsere Website zugreifen oder eine Bestellung aufgeben, stimmen Sie dieser Datenschutzerklärung zu und ermächtigen uns, Ihre persönlichen Daten in Übereinstimmung mit dieser Erklärung zu verarbeiten.<br/>
Erhobene Daten<br/>
Wir erheben verschiedene Kategorien von persönlichen Daten, wenn Sie mit unserer Website und Online-Plattformen interagieren:<br/>
Kontaktdaten: Name, E-Mail-Adresse, Telefonnummer, Lieferadresse.<br/>
Zahlungsinformationen: Kreditkarten- oder Bankdaten, je nach verwendeter Zahlungsmethode.<br/>
Bestellinformationen: Bestellhistorie, Präferenzen und Anfragen.<br/>
Verwendung Ihrer Daten<br/>
Wir verwenden Ihre Daten, um:<br/>
Bestellungen zu bearbeiten und zu versenden.<br/>
Mit Ihnen in Bezug auf Bestellungen, Anfragen oder Support zu kommunizieren.<br/>
Marketing und Werbung durchzuführen, wenn Sie dies zugelassen haben.<br/>
Unsere Website und Dienste zu verbessern.<br/>
Datenweitergabe an Dritte<br/>
Bea Crafty gibt Ihre Daten nur an Dritte weiter, wenn dies notwendig ist, um Ihre Bestellung zu erfüllen oder gesetzlich erforderlich ist (z.B. an Versanddienstleister oder Steuerbehörden).<br/>
Sicherheit Ihrer Daten<br/>
Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten vor Verlust oder unbefugtem Zugriff zu schützen. Allerdings kann keine Methode der Datenübertragung über das Internet oder der elektronischen Speicherung zu 100% sicher garantiert werden.<br/>
Ihre Rechte<br/>
Als Nutzer unserer Dienste haben Sie folgende Rechte:<br/>
Zugang: Sie haben das Recht, auf die persönlichen Daten zuzugreifen, die wir über Sie speichern.<br/>
Berichtigung: Sie haben das Recht, unrichtige oder unvollständige Daten zu berichtigen.<br/>
Löschung: Sie können die Löschung Ihrer persönlichen Daten anfordern, vorbehaltlich bestimmter Bedingungen.<br/>
Abmeldung: Sie können sich jederzeit von Marketing-Kommunikationen abmelden.<br/>
Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter contactbeacrafty@gmail.com.<br/>
Cookies<br/>
Wir verwenden Cookies und ähnliche Technologien, um die Funktionalität und Leistung unserer Website zu verbessern. Cookies helfen uns, Inhalte und Werbung zu personalisieren, den Web-Traffic zu analysieren und die Benutzererfahrung zu optimieren. Sie können Ihre Cookie-Einstellungen über Ihren Browser verwalten.<br/>
Änderungen der Datenschutzerklärung<br/>
Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Änderungen werden auf unserer Website veröffentlicht und sind ab dem Datum der Veröffentlichung gültig.<br/>
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
