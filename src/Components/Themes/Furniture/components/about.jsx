import Btn from "@/Elements/Buttons/Btn";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';


const About = ({ contentData, imageData }) => {

    const { t } = useTranslation('common')
    const router = useRouter();

    return (
        <div id="about-1" className="about-section gray-bg section-padding">
            <div className="container">
                <div className="row gx-lg-5">
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="about-img-wrap">
                            <img className="image-one" src={imageData?.image_1?.image_url} />
                            <img className="image-two" src={imageData?.image_2?.image_url} />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="about-content-wrap">
                            <div className="section-title">
                                <h6>{contentData?.tag || 'About Bea Crafty' }</h6>
                                <div className="heading-animation">
                                    <h2>{contentData?.title || 'Where Craftsmanship Meets Elegance' }</h2>
                                </div>
                            </div>
                            <p>{contentData?.description || 'At Bea Crafty, we blend timeless craftsmanship with modern designs to create unique wooden products that add charm to your daily life. From premium materials to precise detailing, every piece reflects our commitment to quality, sustainability, and elegance.'}</p>
                        </div>
                        <div className="row mt-60">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="single-counter-box">
                                    <p className="counter-number">{contentData?.number_1 || '125' }</p>
                                    <h6>{contentData?.label_1 || 'Materials Available' }</h6>
                                </div>
                            </div>
                            {/* <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="single-counter-box">
                                    <p className="counter-number">{contentData?.number_2 || '156' }</p>
                                    <h6>{contentData?.label_2 || 'Products Available' }</h6>
                                </div>
                            </div> */}
                        </div>
                        <div className="button-wrapper">
                            <Btn
                                onClick={() => {
                                    router.push('/collections');
                                }}
                                className="btn-solid">{t("ShopNow")}</Btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About





