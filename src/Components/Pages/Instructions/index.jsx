"use client";;
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import '@/Components/Themes/Furniture/assets/css/style.css';
import '@/Components/Themes/Furniture/assets/css/flaticon.css';
import '@/Components/Themes/Furniture/assets/css/line-awesome.min.css';
import '@/Components/Themes/Furniture/assets/css/fontAwesomePro.css';
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import Loader from "@/Layout/Loader";

const InstructionsContent = () => {
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;
  const { isLoading } = useContext(ThemeOptionContext);

  const features = {
    en: [
      {
        title: "Gentle Cleaning",
        description: "Use mild soap and lukewarm water to clean wooden items. Avoid soaking or abrasive scrubbers.",
      },
      {
        title: "Dry Quickly",
        description: "After washing, dry wooden products with a soft cloth to prevent moisture absorption.",
      },
      {
        title: "Regular Oiling",
        description: "Apply food-safe oil (e.g., maize or cottonseed oil) with a soft cloth to maintain shine and prevent drying.",
      },
      {
        title: "Avoid Water",
        description: "Never leave wooden items (e.g., bowls, cups) with water inside to prevent warping or cracking.",
      },
      {
        title: "Protect Wood",
        description: "Keep away from direct sunlight, high humidity, or extreme heat to avoid damage.",
      },
      {
        title: "Proper Storage",
        description: "Store in a cool, dry place with proper airflow to prevent mold or mildew.",
      },
    ],
    fr: [
      {
        title: "Nettoyage Doux",
        description: "Utilisez du savon doux et de l'eau tiède pour nettoyer les articles en bois.",
      },
      {
        title: "Séchage Rapide",
        description: "Après lavage, séchez les produits en bois avec un chiffon doux pour éviter l'absorption d'humidité.",
      },
      {
        title: "Huilage Régulier",
        description: "Appliquez une huile alimentaire (ex. huile de maïs ou de coton) avec un chiffon doux pour protéger et faire briller le bois.",
      },
      {
        title: "Éviter l'Eau",
        description: "Ne laissez pas d'eau dans les bols ou tasses en bois pour éviter les fissures ou déformations.",
      },
      {
        title: "Protéger Bois",
        description: "Protégez du soleil direct, de l'humidité élevée ou de la chaleur excessive pour prévenir les dommages.",
      },
      {
        title: "Rangez Correct",
        description: "Conservez dans un endroit frais et sec avec une bonne circulation d'air pour éviter la moisissure.",
      },
    ],
    de: [
      {
        title: "Sanft Reinigen",
        description: "Verwenden Sie milde Seife und lauwarmes Wasser zur Reinigung von Holzprodukten.",
      },
      {
        title: "Sofort Trocknen",
        description: "Trocknen Sie Holzprodukte nach dem Waschen mit einem weichen Tuch, um Feuchtigkeit zu vermeiden.",
      },
      {
        title: "Regelmäßig Ölen",
        description: "Tragen Sie lebensmittelechtes Öl (z.B. Mais- oder Baumwollsaatöl) mit einem weichen Tuch auf, um den Glanz zu erhalten.",
      },
      {
        title: "Wasser Vermeiden",
        description: "Lassen Sie keine Flüssigkeit in Holzschüsseln oder -bechern stehen, um Verformungen zu vermeiden.",
      },
      {
        title: "Holz Schützen",
        description: "Schützen Sie vor direkter Sonne, hoher Luftfeuchtigkeit oder extremer Hitze, um Schäden zu verhindern.",
      },
      {
        title: "Richtig Lagern",
        description: "Lagern Sie an einem kühlen, trockenen Ort mit guter Belüftung, um Schimmelbildung zu vermeiden.",
      },
    ],
  };

  const currentFeatures = features[currentLanguage] || features.en;

  return (
    <>
    {isLoading && <Loader />}
    <Breadcrumbs title={"Instructions"} subNavigation={[{ name: "Instructions" }]} />
    <section className="p-0">

        <div className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <iframe 
                src="https://www.youtube.com/embed/6vdpxZHoxJE?si=r7oGUZ6Q8F2GexOj&autoplay=1&loop=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  width: '100%',
                  height: '680px',
                  objectFit: 'cover',
                  borderRadius: '18px',
                }}
              />
            </div>
          </div>
        </div>
      </div>


      <div className="py-3">
        <div className="container">
          <div className="row">
            {currentFeatures.slice(0, 3).map((feature, index) => (
              <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay={`${0.2 * index}s`} key={index}>
                <div className="single-feature-wrap">
                  <div className="feat-num">
                    <span>{`0${index + 1}`}</span>
                  </div>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-4">
            {currentFeatures.slice(3, 6).map((feature, index) => (
              <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay={`${0.2 * index}s`} key={index + 3}>
                <div className="single-feature-wrap">
                  <div className="feat-num">
                    <span>{`0${index + 4}`}</span>
                  </div>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default InstructionsContent;
