import React from 'react'
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const Features = () => {

    const { themeOption } = useContext(ThemeOptionContext);
    const { i18n } = useTranslation("common");
    const currentLanguage = i18n.resolvedLanguage;

    return (
        <div className="feature-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-feature-item">
                            <div className="feature-icon">
                                <img src="assets/assets/img/feature/1.png" alt="" />
                            </div>
                            <div className="feature-content">
                                <h5>
                                    {themeOption?.about_us?.about?.[currentLanguage]?.futures[0]?.title || 'Years Experiences'}
                                </h5>
                                <p>
                                    {themeOption?.about_us?.about?.[currentLanguage]?.futures[0]?.description || 'With years of craftsmanship behind us, we bring expertise and passion to every piece we create, ensuring timeless quality.'} 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-feature-item">
                            <div className="feature-icon">
                                <img src="assets/assets/img/feature/2.png" alt="" />
                            </div>
                            <div className="feature-content">
                                <h5>
                                    {themeOption?.about_us?.about?.[currentLanguage]?.futures[1]?.title || 'Premium Woods'}
                                </h5>
                                <p>
                                    {themeOption?.about_us?.about?.[currentLanguage]?.futures[1]?.description || 'We source only the finest woods, known for their durability, beauty, and natural elegance.'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="single-feature-item">
                            <div className="feature-icon">
                                <img src="assets/assets/img/feature/3.png" alt="" />
                            </div>
                            <div className="feature-content">
                                <h5></h5>
                                <h5>
                                    {themeOption?.about_us?.about?.[currentLanguage]?.futures[2]?.title || 'Modern Equipment'}
                                </h5>
                                <p>
                                    {themeOption?.about_us?.about?.[currentLanguage]?.futures[2]?.description || 'We use modern equipment to ensure precise cuts and flawless finishes.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features