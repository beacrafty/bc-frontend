"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicyContent = () => {
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;


  const data = {
    en: `
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
          <h2>Politique de Confidentialité</h2>
          <br/>
          <br/>

          <p>Chez Bea Crafty, nous nous engageons à protéger la confidentialité et la sécurité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos plateformes de vente en ligne (Etsy, Amazon, etc.).
            En accédant à notre site ou en passant une commande, vous acceptez cette politique de confidentialité et nous autorisez à traiter vos données personnelles conformément à celle-ci.
          </p>

          <br/>
          <h3>Types de données collectées</h3>
          <p>Nous collectons différentes catégories de données personnelles lorsque vous interagissez avec notre site et nos plateformes :</p>
          <br/>
          <p>- <b>Données de contact :</b> Nom, adresse e-mail, numéro de téléphone, adresse de livraison.</p>
          <p>- <b>Données de commande :</b> Nom, adresse e-mail, numéro de téléphone, adresse de livraison.</p>
          <p>- <b>Données de navigation :</b> Informations sur votre utilisation du site (adresse IP, pages consultées, durée de visite).</p>
          <p>- <b>Données de retour et échange :</b> Motifs de retour, informations sur les produits échangés.</p>
          <br/>

          <h3>Finalité de la collecte des données</h3>
          <p>Nous collectons et traitons vos données personnelles pour les finalités suivantes :</p>
          <p>- <b>Traitement des commandes :</b> Gérer et exécuter vos commandes, y compris les paiements, la livraison et les retours.</p>
          <p>- <b>Amélioration de l'expérience client :</b> Améliorer notre service client, répondre à vos demandes et personnaliser votre expérience sur notre site.</p>
          <p>- <b>Marketing :</b> Nous pouvons utiliser vos informations pour vous envoyer des offres spéciales, des promotions, des newsletters et des informations sur nos produits (avec votre consentement).</p>
          <p>- <b>Sécurité et conformité légale :</b> Assurer la sécurité de notre site, prévenir la fraude et respecter les lois sur la protection des consommateurs et des données.</p>
          <br/>

          <h3>Partage des données</h3>
          <p>Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants :</p>
          <p>- <b>Prestataires de services :</b> Nous pouvons partager vos informations avec des prestataires tiers (ex : processeurs de paiement comme PayPal, services de livraison) pour le fonctionnement de notre activité.</p>
          <p>- <b>Conformité légale :</b> Divulgation obligatoire pour respecter des obligations légales, des procédures judiciaires ou des demandes gouvernementales.</p>
          <br/>

          <h3>Conservation des données</h3>
          <p>Nous conservons vos données personnelles pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, y compris pour répondre aux exigences légales, comptables ou fiscales.</p>
          <br/>

          <h3>Sécurité des données</h3>
          <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre la perte, l'accès non autorisé ou la divulgation. Cependant, aucune transmission de données sur Internet n'est totalement sécurisée.</p>
          <br/>

          <h3>Vos droits</h3>
          <p>En tant qu'utilisateur de nos services, vous disposez des droits suivants :</p>
          <p>- <b>Accès :</b> Obtenir une copie des données que nous détenons sur vous.</p>
          <p>- <b>Rectification :</b> Corriger les données inexactes ou incomplètes.</p>
          <p>- <b>Suppression :</b> Demander l'effacement de vos données sous certaines conditions.</p>
          <p>- <b>Désinscription :</b> Résilier les communications marketing à tout moment. Pour exercer ces droits, contactez-nous à contactbeacrafty@gmail.com.</p>
          <br/>

          <h3>Cookies</h3>
          <p>Nous utilisons des cookies et technologies similaires pour améliorer les fonctionnalités du site, personnaliser le contenu et analyser le trafic. Vous pouvez gérer les cookies via les paramètres de votre navigateur.</p>
          <br/>

          <h3>Modifications de la politique de confidentialité</h3>
          <p>Nous pouvons mettre à jour cette politique périodiquement. Les modifications seront publiées sur notre site avec une date de révision actualisée.</p>
          <br/>
  `,
    de: `
          <h2>Datenschutzerklärung</h2>
          <br/>
          <br/>

          <p>Bei Bea Crafty sind wir bestrebt, den Schutz und die Sicherheit Ihrer personenbezogenen Daten zu gewährleisten. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten erfassen, verwenden und schützen, wenn Sie unsere Website und unsere Online-Verkaufsplattformen (Etsy, Amazon usw.) nutzen.
            Durch den Zugriff auf unsere Website oder das Aufgeben einer Bestellung erklären Sie sich mit dieser Datenschutzerklärung einverstanden und autorisieren uns, Ihre personenbezogenen Daten gemäß dieser Richtlinie zu verarbeiten.
          </p>

          <br/>
          <h3>Art der erfassten Daten</h3>
          <p>Wir erfassen verschiedene Kategorien personenbezogener Daten, wenn Sie mit unserer Website und Plattformen interagieren:</p>
          <br/>
          <p>- <b>Kontaktdaten:</b> Name, E-Mail-Adresse, Telefonnummer, Lieferadresse.</p>
          <p>- <b>Bestelldaten:</b> Informationen zu gekauften Produkten, Zahlungsmethode, Bestellverlauf.</p>
          <p>- <b>Nutzungsdaten:</b> Informationen zur Website-Nutzung (IP-Adresse, besuchte Seiten, Verweildauer).</p>
          <p>- <b>Rücksende- und Umtauschdaten:</b> Gründe für Rücksendungen, Details zu umgetauschten Artikeln.</p>
          <br/>

          <h3>Zweck der Datenerfassung</h3>
          <p>Wir erfassen und verarbeiten Ihre Daten zu folgenden Zwecken:</p>
          <p>- <b>Bestellabwicklung:</b> Bearbeitung Ihrer Bestellungen, einschließlich Zahlung, Versand und Rücksendungen.</p>
          <p>- <b>Verbesserung des Kundenerlebnisses:</b> Personalisierung Ihrer Website-Erfahrung, Beantwortung von Anfragen und Optimierung unserer Dienstleistungen.</p>
          <p>- <b>Marketing:</b> Übersendung von Sonderangeboten, Newsletter und Produktinformationen (mit Ihrer Einwilligung).</p>
          <p>- <b>Sicherheit und gesetzliche Compliance:</b> Betrugsprävention, Einhaltung von Verbraucher- und Datenschutzgesetzen (z.B. DSGVO).</p>
          <br/>

          <h3>Weitergabe von Daten</h3>
          <p>Wir geben Ihre Daten nur in folgenden Fällen an Dritte weiter:</p>
          <p>- <b>Dienstleister:</b> Zahlungsabwickler (PayPal, Stripe), Logistikpartner (Paketdienste) oder IT-Dienstleister für den Betrieb unserer Plattformen.</p>
          <p>- <b>Gesetzliche Pflichten:</b> Weitergabe bei behördlichen Anfragen oder zur Erfüllung gerichtlicher Anordnungen.</p>
          <br/>

          <h3>Speicherdauer</h3>
          <p>Wir speichern Ihre Daten nur so lange, wie es für die ursprünglichen Zwecke oder gesetzliche Aufbewahrungspflichten (steuerrechtlich, handelsrechtlich) erforderlich ist.</p>
          <br/>

          <h3>Datensicherheit</h3>
          <p>Wir setzen technische und organisatorische Maßnahmen (z.B. Verschlüsselung, Zugriffskontrollen) ein, um Ihre Daten vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen. Ein vollständiger Schutz im Internet kann jedoch nicht garantiert werden.</p>
          <br/>

          <h3>Ihre Rechte</h3>
          <p>Gemäß der DSGVO haben Sie folgende Rechte:</p>
          <p>- <b>Auskunft:</b> Recht auf Einsicht in die gespeicherten Daten.</p>
          <p>- <b>Berichtigung:</b> Korrektur unrichtiger oder unvollständiger Daten.</p>
          <p>- <b>Löschung:</b> Löschung Ihrer Daten unter bestimmten Voraussetzungen („Recht auf Vergessenwerden“).</p>
          <p>- <b>Widerspruch:</b> Widerruf von Marketing-E-Mails jederzeit möglich. Kontaktieren Sie uns unter contactbeacrafty@gmail.com.</p>
          <br/>

          <h3>Cookies</h3>
          <p>Wir verwenden Cookies und Tracking-Technologien, um die Website-Funktionalität zu optimieren, Inhalte zu personalisieren und die Nutzung zu analysieren. Sie können Cookies in Ihren Browser-Einstellungen verwalten.</p>
          <br/>

          <h3>Änderungen der Datenschutzerklärung</h3>
          <p>Aktualisierungen dieser Richtlinie werden auf unserer Website veröffentlicht. Die überarbeitete Fassung tritt mit dem Datum der Veröffentlichung in Kraft.</p>
          <br/>
      `,
  };

  return (
    <>
      <WrapperComponent
        classes={{
          sectionClass: "about-page section-b-space ",
          fluidClass: "container",
        }}
        noRowCol={true}
      >
        <div dangerouslySetInnerHTML={{ "__html": data?.[currentLanguage] }}></div>
      </WrapperComponent>
    </>
  );
}

export default PrivacyPolicyContent;
