"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import {useContext} from "react";
import {useTranslation} from "react-i18next";

const TermsAndConditionsContent = () => {
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

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
      fr: `
          <h2>Conditions Générales de Vente (CGV).</h2>
          <br/>
          <br/>

          <h3>Préambule</h3>
          <p>Les présentes Conditions Générales de Vente (CGV) régissent la vente des produits proposés par Bea Crafty, une entreprise spécialisée dans la vente de produits artisanaux en bois d'olivier et d'autres articles faits main. En passant une commande sur notre site ou via des plateformes en ligne telles qu'Etsy, Amazon, etc., le client reconnaît et accepte sans réserve ces CGV.</p>

          <br/>
          <h3>Produits</h3>
          <p>Les produits proposés par Bea Crafty sont des articles faits main, principalement en bois d'olivier, mais aussi en d'autres matériaux naturels. Chaque produit est unique et peut présenter des variations de forme, de couleur et de texture en raison des caractéristiques naturelles du bois. Ces variations ne sont pas considérées comme des défauts, mais comme une garantie de l'authenticité et du savoir-faire artisanal des produits.</p>

          <br/>
          <h3>Commandes</h3>
          <p>Les commandes peuvent être passées sur notre site ou sur des plateformes en ligne telles qu'Etsy, Amazon, ou toute autre plateforme où Bea Crafty est présente. En passant une commande, le client confirme avoir lu et accepté ces CGV.
          <br/><br/>

          <p><b>Disponibilité des produits :</b> En cas de rupture de stock, Bea Crafty informera le client dès que possible. Le client pourra alors choisir entre un remboursement ou un échange pour un produit similaire.</p>
          <br/>
          <p><b>Modifications de commande :</b> Toute modification de commande doit être effectuée avant l'expédition. Une fois la commande expédiée, elle ne pourra plus être modifiée.</p>
          <br/>

          <h3>Prix</h3>
          <p>Les prix des produits sont indiqués en euros (€) et incluent la TVA applicable en Allemagne. Les frais de livraison seront calculés en fonction du mode de livraison et de l'adresse, et seront affichés avant la confirmation de la commande.</p>
          <br/>

          <h3>Modes de Paiement</h3>
          <p>Le paiement doit être effectué au moment de la commande. Les modes de paiement acceptés sont :<br>
            - Carte bancaire (Visa, MasterCard, etc.)<br>
            - PayPal<br>
            - Virement bancaire<br>
            - Autres modes de paiement disponibles sur notre site et les plateformes en ligne.</br>
            Le paiement doit être intégralement effectué avant l'expédition des produits. La commande ne sera considérée comme valide qu'une fois le paiement confirmé.</p>

          <br/>

          <h3>Livraison</h3>
          <p>Les produits sont livrés à l'adresse indiquée par le client lors de la commande. Les délais de livraison varient en fonction du mode de livraison choisi.</p>
          <br/>
          <p><b>Modes de livraison :</b> Des options de livraison standard et express sont disponibles, selon la disponibilité et la destination. Les frais de livraison seront ajoutés à la commande et calculés avant la confirmation de celle-ci.</p>
          <br/>
          <p><b>Responsabilité :</b> Le client est responsable de la vérification de l'exactitude et de la complétude de l'adresse de livraison.</p>
          <br/>

          <h3>Droit de Rétractation et Retours</h3>
          <p>Conformément à la loi allemande, le client dispose d'un droit de rétractation de 14 jours à compter de la réception des produits pour retourner les articles sans avoir à justifier de raison. Le client peut demander un remboursement ou un échange des produits, à condition qu'ils soient retournés dans leur état et emballage d'origine.</p>
          <br/>
          <p><b>Conditions de retour :</b> Le client doit informer Bea Crafty de son intention de retourner les produits dans les 14 jours suivant la réception des articles par e-mail à contactbeacrafty@gmail.com. Les frais de retour sont à la charge du client, sauf si le produit est défectueux ou non conforme à la commande.</p>
          <br/>

          <h3>Garanties</h3>
          <p>Les produits proposés par Bea Crafty sont garantis contre les défauts de fabrication conformément à la législation en vigueur.</p>
          <br/>
          <p><b>Garantie de conformité légale :</b> Le client bénéficie de la garantie de conformité légale et peut demander un échange ou un remboursement si le produit s'avère défectueux.</p>
          <br/>
          <p><b>Garantie contre les vices cachés :</b> Les produits sont également couverts par une garantie contre les vices cachés conformément à la loi allemande.</p>
          <br/>

          <h3>Responsabilité</h3>
          <p>Bea Crafty met tout en œuvre pour fournir des produits de qualité. Cependant, la responsabilité de Bea Crafty ne pourra être engagée en cas de force majeure (grèves, catastrophes naturelles, etc.) ou d'utilisation inappropriée des produits. Bea Crafty n'est pas responsable des dommages indirects, tels que la perte de profits ou de données.</p>
          <br/>

          <h3>Protection des Données Personnelles</h3>
          <p>Bea Crafty s'engage à protéger la confidentialité des données personnelles des clients. Les données personnelles collectées ne sont utilisées que pour le traitement des commandes, la livraison et la gestion de la relation client. Bea Crafty ne vend ni ne partage les données personnelles avec des tiers, sauf si la loi l'exige.</p>
          <br/>

          <h3>Modifications des CGV</h3>
          <p>Bea Crafty se réserve le droit de modifier ces CGV à tout moment. Les modifications seront publiées sur le site et entreront en vigueur immédiatement après leur publication. Si une commande a été passée avant la modification, la version précédente des CGV s'appliquera.</p>
          <br/>

          <h3>Loi Applicable et Résolution des Litiges</h3>
          <p>Ces CGV sont régies par la loi allemande. En cas de litige, nous vous encourageons à nous contacter directement pour trouver une solution amiable.</p>
          <br/>
      `,
    de: `
          <h2>Allgemeine Geschäftsbedingungen (AGB).</h2>
          <br/>
          <br/>

          <h3>Präambel</h3>
          <p>Diese Allgemeinen Geschäftsbedingungen (AGB) regeln den Verkauf der von Bea Crafty angebotenen Produkte, einem Unternehmen, das sich auf den Verkauf von handgefertigten Olivenholzprodukten und anderen kunsthandwerklichen Artikeln spezialisiert hat. Durch die Bestellung auf unserer Website oder über Online-Plattformen wie Etsy, Amazon usw. erkennt der Kunde diese AGB ausdrücklich an und akzeptiert sie ohne Vorbehalt.</p>

          <br/>
          <h3>Produkte</h3>
          <p>Die von Bea Crafty angebotenen Produkte sind handgefertigte Artikel, hauptsächlich aus Olivenholz, aber auch aus anderen natürlichen Materialien. Jedes Produkt ist einzigartig und kann aufgrund der natürlichen Eigenschaften des Holzes Variationen in Form, Farbe und Textur aufweisen. Diese Variationen gelten nicht als Mängel, sondern sind ein Zeichen für die Authentizität und das handwerkliche Können der Produkte.</p>

          <br/>
          <h3>Bestellungen</h3>
          <p>Bestellungen können auf unserer Website oder auf Online-Plattformen wie Etsy, Amazon oder anderen Plattformen, auf denen Bea Crafty vertreten ist, aufgegeben werden. Mit der Bestellung bestätigt der Kunde, dass er diese AGB gelesen und akzeptiert hat.
          <br/><br/>

          <p><b>Produktverfügbarkeit:</b> Im Falle eines Lagerengpasses wird Bea Crafty den Kunden so schnell wie möglich informieren. Der Kunde kann dann zwischen einer Rückerstattung oder einem Umtausch gegen ein ähnliches Produkt wählen.</p>
          <br/>
          <p><b>Bestelländerungen:</b> Änderungen an der Bestellung müssen vor dem Versand vorgenommen werden. Sobald die Bestellung versandt wurde, kann sie nicht mehr geändert werden.</p>
          <br/>

          <h3>Preise</h3>
          <p>Die Preise der Produkte sind in Euro (€) angegeben und enthalten die in Deutschland gültige Mehrwertsteuer. Die Versandkosten werden basierend auf der gewählten Versandmethode und der Lieferadresse berechnet und vor der Bestellbestätigung angezeigt.</p>
          <br/>

          <h3>Zahlungsmethoden</h3>
          <p>Die Zahlung muss zum Zeitpunkt der Bestellung erfolgen. Akzeptierte Zahlungsmethoden sind:<br>
            - Kreditkarte (Visa, MasterCard usw.)<br>
            - PayPal<br>
            - Banküberweisung<br>
            - Andere auf unserer Website und den Online-Plattformen verfügbare Zahlungsmethoden.</br>
            Die Zahlung muss vollständig erfolgen, bevor die Produkte versandt werden. Die Bestellung gilt erst als gültig, sobald die Zahlung bestätigt ist.</p>

          <br/>

          <h3>Lieferung</h3>
          <p>Die Produkte werden an die vom Kunden während der Bestellung angegebene Adresse geliefert. Die Lieferzeiten variieren je nach gewählter Versandmethode.</p>
          <br/>
          <p><b>Lieferoptionen:</b> Standard- und Expresslieferungen sind verfügbar, abhängig von Verfügbarkeit und Zielort. Die Versandkosten werden der Bestellung hinzugefügt und vor der Bestellbestätigung berechnet.</p>
          <br/>
          <p><b>Verantwortung:</b> Der Kunde ist dafür verantwortlich, dass die Lieferadresse korrekt und vollständig ist.</p>
          <br/>

          <h3>Widerrufsrecht und Rückgaben</h3>
          <p>Gemäß deutschem Recht hat der Kunde ein 14-tägiges Widerrufsrecht ab Erhalt der Produkte, um Artikel ohne Angabe von Gründen zurückzugeben. Der Kunde kann eine Rückerstattung oder einen Umtausch der Produkte verlangen, sofern diese in ihrem Originalzustand und -verpackung zurückgesendet werden.</p>
          <br/>
          <p><b>Rückgabebedingungen:</b> Der Kunde muss Bea Crafty innerhalb von 14 Tagen nach Erhalt der Ware per E-Mail unter contactbeacrafty@gmail.com über seine Absicht zur Rückgabe informieren. Die Rücksendekosten trägt der Kunde, es sei denn, das Produkt ist defekt oder entspricht nicht der Bestellung.</p>
          <br/>

          <h3>Garantien</h3>
          <p>Die von Bea Crafty angebotenen Produkte sind gemäß geltendem Recht gegen Herstellungsfehler garantiert.</p>
          <br/>
          <p><b>Gesetzliche Gewährleistung:</b> Der Kunde genießt die gesetzliche Gewährleistung und kann bei einem festgestellten Mangel einen Umtausch oder eine Rückerstattung verlangen.</p>
          <br/>
          <p><b>Garantie gegen versteckte Mängel:</b> Die Produkte sind auch gemäß deutschem Recht gegen versteckte Mängel garantiert.</p>
          <br/>

          <h3>Haftung</h3>
          <p>Bea Crafty bemüht sich, qualitativ hochwertige Produkte anzubieten. Die Haftung von Bea Crafty wird jedoch nicht für Fälle höherer Gewalt (Streiks, Naturkatastrophen usw.) oder unsachgemäße Verwendung der Produkte übernommen. Bea Crafty haftet nicht für indirekte Schäden, wie z.B. entgangenen Gewinn oder Datenverlust.</p>
          <br/>

          <h3>Schutz personenbezogener Daten</h3>
          <p>Bea Crafty verpflichtet sich, die Vertraulichkeit der personenbezogenen Daten der Kunden zu schützen. Die erhobenen personenbezogenen Daten werden nur zur Bearbeitung der Bestellungen, der Lieferung und der Kundenbetreuung verwendet. Bea Crafty verkauft oder teilt personenbezogene Daten nicht an Dritte weiter, es sei denn, dies ist gesetzlich vorgeschrieben.</p>
          <br/>

          <h3>Änderungen der AGB</h3>
          <p>Bea Crafty behält sich das Recht vor, diese AGB jederzeit zu ändern. Änderungen werden auf der Website veröffentlicht und treten sofort nach der Veröffentlichung in Kraft. Wenn eine Bestellung vor der Änderung aufgegeben wurde, gilt die vorherige Version der AGB.</p>
          <br/>

          <h3>Anwendbares Recht und Streitbeilegung</h3>
          <p>Diese AGB unterliegen deutschem Recht. Im Falle eines Streits empfehlen wir Ihnen, sich direkt an uns zu wenden, um eine einvernehmliche Lösung zu finden.</p>
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
            <div dangerouslySetInnerHTML={{"__html": data?.[currentLanguage]}}></div>
        </WrapperComponent>
      </>
  );
}

export default TermsAndConditionsContent;
