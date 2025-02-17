import Btn from "@/Elements/Buttons/Btn";
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const Categories = () => {
    const router = useRouter();
    const { t, i18n } = useTranslation('common')
    const currentLanguage = i18n.resolvedLanguage;

    const data = {
        en: {
            title: "Our Categories",
            subtitle: "Explore our wide range of expertly crafted wooden products, tailored for every need",
        },
        fr: {
            title: "Nos Catégories",
            subtitle: "Découvrez notre large gamme de produits en bois conçus avec expertise ",
        },
        de: {
            title: "Unsere Kategorien",
            subtitle: "Entdecken Sie unser breites Sortiment an fachmännisch gefertigten Holzprodukten",
        }
    }

    return (
        <div className="project-section project-three section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-8 wow fadeInUp animated" data-wow-delay="200ms">
                        <div className="section-title mb-0">
                            <h6>{data?.[currentLanguage]?.title}</h6>
                            <div className="heading-animation">
                                <h2>{data?.[currentLanguage]?.subtitle}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-4 text-lg-end d-none d-lg-inline-block">
                        <Btn
                            onClick={() => {
                                router.push('/collections');
                            }}
                            className="btn-solid">{t("ShopNow")}</Btn>
                    </div>
                </div>
                <div className="row gy-4 mt-40">

                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <a href="category/kitchen" className="single-project-wrapper">
                            <div className="project-bg">
                                <img src="assets/assets/img/project/KITCHEN.jpg" alt="" />
                                <div className="project-details">
                                    <h4>{t("Kitchen") }</h4>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <a href="category/beauty" className="single-project-wrapper">
                            <div className="project-bg">
                                <img src="assets/assets/img/project/BEAUTY.jpg" alt="" />
                                <div className="project-details">
                                    <h4>{t("Beauty")}</h4>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <a href="category/deco" className="single-project-wrapper">
                            <div className="project-bg">
                                <img src="assets/assets/img/project/deco.jpg" alt="" />
                                <div className="project-details">
                                    <h4>{t("Deco")}</h4>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <a href="category/game" className="single-project-wrapper">
                            <div className="project-bg">
                                <img src="assets/assets/img/project/GAMES.jpg" alt="" />
                                <div className="project-details">
                                    <h4>{t("Game")}</h4>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories