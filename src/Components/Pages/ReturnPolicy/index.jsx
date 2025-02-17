"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const ReturnPolicyContent = () => {
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

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
        <h2>Politique de Retour.</h2>
          <br/>
          <br/>

          <h3>Délai de Retour</h3>
          <p>Vous disposez de 14 jours à compter de la réception de votre commande pour initier un retour. Si ce délai est dépassé, nous ne pourrons malheureusement pas offrir de remboursement ou d'échange.</p>
          <br/>

          <h3>Conditions de Retour</h3>
          <p>Pour être éligible à un retour, l'article doit :</p>
          <p>- Être inutilisé et dans son état d'origine, avec toutes les étiquettes et l'emballage d'origine.</p>
          <p>- Ne pas être personnalisé, car les articles sur mesure ne sont pas remboursables.</p>
          <p>- Être retourné avec tous les accessoires, manuels et documents inclus dans l'emballage d'origine.</p>
          <br/>

          <h3>Articles Non Éligibles</h3>
          <p>Les articles suivants ne peuvent pas être retournés :</p>
          <p>- Les articles soldés ou en promotion.</p>
          <p>- Les articles qui ont été utilisés ou endommagés par le client.</p>
          <p>- Les articles personnalisés ou faits sur commande.</p>
          <br/>

          <h3>Processus de Retour</h3>
          <p>Pour initier un retour, veuillez suivre ces étapes :</p>
          <p>1. Contactez-nous à contactbeacrafty@gmail.com pour obtenir une autorisation de retour et l'adresse de retour.</p>
          <p>2. Emballez soigneusement l'article dans son emballage d'origine, en incluant tous les accessoires et documents nécessaires.</p>
          <p>3. Expédiez l'article à l'adresse fournie. Les frais de retour sont à la charge de l'acheteur, sauf si l'article est défectueux ou incorrect.</p>
          <br/>

          <h3>Remboursements</h3>
          <p>Une fois que nous aurons reçu et inspecté votre retour, nous vous informerons par e-mail si votre remboursement est approuvé ou refusé. Si le retour est approuvé :</p>
          <p>- Le remboursement sera traité et crédité sur votre méthode de paiement d'origine.
          Veuillez noter que les délais de traitement peuvent varier selon votre institution financière, et cela peut prendre 5 à 10 jours ouvrables.</p>
          <br/>

          <h3>Échanges</h3>
          <p>Nous n'offrons pas d'échanges pour les articles. Si vous souhaitez un produit différent, nous vous recommandons de retourner l'article non désiré et de passer une nouvelle commande pour l'article souhaité.</p>
          <br/>

          <h3>Retours d'Articles Endommagés ou Défectueux</h3>
          <p>Si vous recevez un article endommagé ou défectueux :</p>
          <p>- Contactez-nous immédiatement dans les 48 heures suivant la réception.</p>
          <p>- Nous vous demanderons des photos du produit endommagé et de son emballage.</p>
          <p>- Nous organiserons un retour et un échange ou un remboursement, selon le cas.</p>
          <br/>

          <h3>Suivi des Retours</h3>
          <p>Il est conseillé de conserver le numéro de suivi de votre colis de retour. Nous ne sommes pas responsables des colis perdus ou volés pendant le processus de retour.</p>
          <br/>

          <h3>Frais de Retour</h3>
          <p>Les frais de retour sont à la charge de l'acheteur, sauf si le produit est défectueux ou en cas d'erreur de notre part. Nous recommandons d'utiliser un service de livraison suivi pour garantir que votre retour arrive en toute sécurité.</p>
          <br/>

          <h3>Modifications de la Politique</h3>
          <p>Nous nous réservons le droit de modifier cette politique de retour à tout moment. Les modifications seront publiées sur notre site web. Il est conseillé de consulter régulièrement cette politique pour prendre connaissance des mises à jour.</p>
          <br/>
      `,
      de: `
          <h2>Rückgaberecht.</h2>
          <br/>
          <br/>

          <h3>Rückgabefrist</h3>
          <p>Sie haben 14 Tage ab Erhalt Ihrer Bestellung, um eine Rückgabe zu veranlassen. Sollte die 14-tägige Frist abgelaufen sein, können wir leider keine Rückerstattung oder einen Umtausch anbieten.</p>
          <br/>

          <h3>Bedingungen für die Rückgabe</h3>
          <p>Damit ein Artikel zurückgegeben werden kann, muss er folgende Bedingungen erfüllen:</p>
          <p>- Unbenutzt und in originalem Zustand sein, mit allen Etiketten und der Originalverpackung.</p>
          <p>- Nicht personalisiert sein, da individuell angefertigte Artikel nicht rückerstattungsfähig sind.</p>
          <p>- Mit allen Zubehörteilen, Handbüchern und Dokumenten, die in der Originalverpackung enthalten waren, zurückgesendet werden.</p>
          <br/>

          <h3>Nicht rückgabefähige Artikel</h3>
          <p>Folgende Artikel können nicht zurückgegeben werden:</p>
          <p>- Artikel aus dem Sale oder mit Rabatt.</p>
          <p>- Artikel, die vom Kunden benutzt oder beschädigt wurden.</p>
          <p>- Personalisierte oder auf Bestellung angefertigte Artikel.</p>
          <br/>

          <h3>Rückgabeprozess</h3>
          <p>Um eine Rückgabe zu veranlassen, befolgen Sie bitte diese Schritte:</p>
          <p>1. Wir stellen Ihnen eine Rückgabeautorisierung und die Rücksendeadresse zur Verfügung.</p>
          <p>2. Verpacken Sie den Artikel sorgfältig in der Originalverpackung und fügen Sie alle notwendigen Zubehörteile und Dokumente bei.</p>
          <p>3. Senden Sie den Artikel an die angegebene Adresse. Die Rücksendekosten trägt der Käufer, es sei denn, der Artikel ist defekt oder fehlerhaft.</p>
          <br/>

          <h3>Rückerstattungen</h3>
          <p>Sobald wir Ihre Rücksendung erhalten und überprüft haben, werden wir Sie per E-Mail benachrichtigen, ob Ihre Rückerstattung genehmigt oder abgelehnt wurde. Wenn die Rückgabe genehmigt wird:</p>
          <p>- Die Rückerstattung wird bearbeitet und auf Ihre ursprüngliche Zahlungsmethode gutgeschrieben.
          Bitte beachten Sie, dass die Bearbeitungszeiten je nach Ihrer Bank variieren können und dies 5-10 Werktage in Anspruch nehmen kann.</p>
          <br/>

          <h3>Umtausch</h3>
          <p>Wir bieten keinen Umtausch von Artikeln an. Wenn Sie ein anderes Produkt wünschen, empfehlen wir, den unerwünschten Artikel zurückzusenden und eine neue Bestellung für den gewünschten Artikel aufzugeben.</p>
          <br/>

          <h3>Rückgabe von beschädigten oder defekten Artikeln</h3>
          <p>Wenn Sie einen beschädigten oder defekten Artikel erhalten:</p>
          <p>- Kontaktieren Sie uns bitte umgehend innerhalb von 48 Stunden nach Erhalt.</p>
          <p>- Wir werden Sie um Fotos des beschädigten Produkts und der Verpackung bitten.</p>
          <p>- Wir werden eine Rückgabe sowie einen Umtausch oder eine Rückerstattung veranlassen, je nach Fall.</p>
          <br/>

          <h3>Sendungsverfolgung bei Rückgaben</h3>
          <p>Es wird empfohlen, die Sendungsverfolgungsnummer für Ihr Rücksendepaket aufzubewahren. Wir übernehmen keine Verantwortung für verlorene oder gestohlene Pakete während des Rückgabeprozesses.</p>
          <br/>

          <h3>Rücksendekosten</h3>
          <p>Die Rücksendekosten trägt der Käufer, es sei denn, der Artikel ist defekt oder es liegt ein Fehler unsererseits vor. Wir empfehlen die Nutzung eines versicherten Versanddienstes, um sicherzustellen, dass Ihre Rücksendung sicher ankommt.</p>
          <br/>

          <h3>Änderungen der Richtlinie</h3>
          <p>Wir behalten uns das Recht vor, diese Rückgaberichtlinie jederzeit zu ändern. Änderungen werden auf unserer Website veröffentlicht. Es wird empfohlen, diese Richtlinie regelmäßig auf Aktualisierungen zu überprüfen.</p>
          <br/>
`
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
            <div dangerouslySetInnerHTML={{"__html": data?.[currentLanguage]}}></div>
        </WrapperComponent>
      </>
  );
}

export default ReturnPolicyContent;
