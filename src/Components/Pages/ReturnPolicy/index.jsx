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
      fr: `
Politique de Retour<br/>
Délai de Retour :<br/>
Vous disposez de 14 jours à compter de la réception de votre commande pour initier un retour. Si le délai de 14 jours est écoulé, nous ne pourrons malheureusement pas vous offrir un remboursement ou un échange.<br/>
Conditions de Retour :<br/>
Pour être éligible à un retour, l'article doit :<br/>
Être non utilisé et dans son état d'origine, avec toutes les étiquettes et l'emballage d'origine.<br/>
Ne pas avoir été personnalisé, car les articles personnalisés ne sont pas remboursables.<br/>
Être retourné avec tous les accessoires, manuels et documents inclus dans l'emballage initial.<br/>
Articles Non Éligibles :<br/>
Les articles suivants ne peuvent pas être retournés :<br/>
Articles en promotion ou soldés.<br/>
Articles qui ont été utilisés ou endommagés par le client.<br/>
Articles personnalisés ou fabriqués sur commande.<br/>
Processus de Retour :<br/>
Pour initier un retour, veuillez suivre ces étapes :<br/>
Étape 1 : Contactez notre service client via nos contacts dans les 14 jours suivant la réception de votre commande. Fournissez votre numéro de commande et la raison du retour.<br/>
Étape 2 : Nous vous fournirons une autorisation de retour ainsi que l'adresse de retour.<br/>
Étape 3 : Emballez soigneusement l'article dans son emballage d'origine et incluez tous les accessoires et documents nécessaires.<br/>
Étape 4 : Expédiez l'article à l'adresse fournie. Les frais de retour sont à la charge de l'acheteur, sauf si l'article est défectueux ou incorrect.<br/>
Remboursements :<br/>
Une fois que nous aurons reçu et inspecté votre retour, nous vous informerons par e-mail de l'approbation ou du refus de votre remboursement. Si le retour est approuvé :<br/>
Le remboursement sera traité et crédité sur votre méthode de paiement initiale.<br/>
Veuillez noter que les délais de traitement peuvent varier en fonction de votre institution financière, mais cela peut prendre de 5 à 10 jours ouvrables.<br/>
<br/>
Échanges :<br/>
Nous n’effectuons pas d’échanges pour les articles. Si vous souhaitez un produit différent, nous vous conseillons de retourner l’article non désiré et de passer une nouvelle commande pour l’article souhaité.<br/>
Retours Endommagés ou Défectueux :<br/>
Si vous recevez un article endommagé ou défectueux :<br/>
Contactez-nous immédiatement dans les 48 heures suivant la réception.<br/>
Nous vous demanderons des photos du produit endommagé et de l'emballage.<br/>
Nous organiserons un retour et un échange ou un remboursement selon le cas.<br/>
Suivi des Retours :<br/>
Il est conseillé de conserver le numéro de suivi de votre colis de retour. Nous ne sommes pas responsables des colis perdus ou volés lors du retour.<br/>
Frais de Retour :<br/>
Les frais de retour sont à la charge de l'acheteur, sauf en cas de produit défectueux ou d'erreur de notre part. Nous vous recommandons d'utiliser un service d'expédition avec suivi pour vous assurer que votre retour arrive en toute sécurité.<br/>
Modifications de Politique :<br/>
Nous nous réservons< le droit de modifier cette politique de retour à tout moment. Les modifications seront publiées sur nos shops. Il est conseillé de consulter régulièrement cette politique pour être informé des mises à jour.<br/>
      `,
      de: `
Rückgabebedingungen (German)<br/>
Rückgabefrist<br/>
Sie haben 14 Tage ab Erhalt Ihrer Bestellung Zeit, eine Rückgabe einzuleiten. Wenn diese 14-Tage-Frist abgelaufen ist, können wir leider keine Rückerstattung oder einen Umtausch anbieten.<br/>
Rückgabebedingungen<br/>
Um für eine Rückgabe in Frage zu kommen, muss der Artikel:<br/>
Unbenutzt und in seinem ursprünglichen Zustand sein, mit allen Etiketten und der Originalverpackung.<br/>
Nicht personalisiert sein, da maßgeschneiderte Artikel nicht zurückgegeben werden können.<br/>
Mit allen Zubehörteilen, Handbüchern und Dokumenten in der Originalverpackung zurückgesendet werden.<br/>
Nicht Rückgabefähige Artikel<br/>
Die folgenden Artikel können nicht zurückgegeben werden:<br/>
Sale- oder Sonderpostenware.<br/>
Vom Kunden benutzte oder beschädigte Artikel.<br/>
Personalisierte oder auf Bestellung gefertigte Artikel.<br/>
Rückgabeprozess<br/>
Um eine Rückgabe einzuleiten, gehen Sie bitte wie folgt vor:<br/>
Kontaktieren Sie unseren Kundenservice innerhalb von 14 Tagen nach Erhalt Ihrer Bestellung. Geben Sie Ihre Bestellnummer und den Grund für die Rückgabe an.<br/>
Wir werden Ihnen eine Rücksendeautorisierung und die Rücksendeadresse mitteilen.<br/>
Verpacken Sie den Artikel sorgfältig in der Originalverpackung und legen Sie alle erforderlichen Zubehörteile und Dokumente bei.<br/>
Senden Sie den Artikel an die angegebene Adresse zurück. Die Rücksendekosten trägt der Käufer, es sei denn, der Artikel ist fehlerhaft oder wurde falsch geliefert.<br/>
Rückerstattungen<br/>
Sobald wir Ihre Rücksendung erhalten und geprüft haben, werden wir Sie per E-Mail darüber informieren, ob Ihre Rückerstattung genehmigt oder abgelehnt wurde. Wenn die Rücksendung genehmigt wird:<br/>
Die Rückerstattung wird bearbeitet und auf die ursprüngliche Zahlungsmethode gutgeschrieben.<br/>
Bitte beachten Sie, dass die Bearbeitungszeiten je nach Finanzinstitut variieren können und dies bis zu 5-10 Werktage dauern kann.<br/>
Umtausch<br/>
Wir bieten keine Umtauschmöglichkeiten an. Wenn Sie ein anderes Produkt wünschen, empfehlen wir, den unerwünschten Artikel zurückzusenden und eine neue Bestellung für das gewünschte Produkt aufzugeben.<br/>
Beschädigte oder Defekte Rücksendungen<br/>
Wenn Sie einen beschädigten oder fehlerhaften Artikel erhalten:<br/>
Kontaktieren Sie uns sofort innerhalb von 48 Stunden nach Erhalt.<br/>
Wir werden Sie bitten, Fotos des beschädigten Produkts und der Verpackung zu senden.<br/>
Wir werden eine Rücksendung arrangieren und entweder einen Umtausch oder eine Rückerstattung, je nach Fall, anbieten.<br/>
Rücksendungsverfolgung<br/>
Es wird empfohlen, die Sendungsverfolgungsnummer für Ihr Rücksendepaket aufzubewahren. Wir sind nicht verantwortlich für verlorene oder gestohlene Pakete während des Rückgabeprozesses.<br/>
Rücksendekosten<br/>
Die Rücksendekosten trägt der Käufer, es sei denn, das Produkt ist fehlerhaft oder es liegt ein Fehler unsererseits vor. Wir empfehlen, einen versicherten Versanddienst zu nutzen, um sicherzustellen, dass Ihre Rücksendung sicher ankommt.<br/>
Änderungen der Rückgabebedingungen<br/>
Wir behalten uns das Recht vor, diese Rückgabebedingungen jederzeit zu ändern. Änderungen werden auf unserer Website veröffentlicht. Es wird empfohlen, diese Bedingungen regelmäßig auf Updates zu überprüfen.<br/>
`
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
