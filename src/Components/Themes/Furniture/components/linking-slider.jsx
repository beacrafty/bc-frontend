import { useTranslation } from 'react-i18next';

const LinkingSlider = () => {
    const { t } = useTranslation('common')
    return (
        <div className="service_slider_wrap">
            <div className="slider_item">
                {/* <!-- Original Content --> */}
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("ProfessionalService")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("TrustedCompany")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("NaturalUniqueMaterials")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("AffordableCostRate")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("ProfessionalService")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("ModernDesign")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("FlexiblePricing")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("QualityCustomersService")}</h5>
                {/* <!-- Duplicate Content (First Copy) --> */}
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("ProfessionalService")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("TrustedCompany")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("NaturalUniqueMaterials")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("AffordableCostRate")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("ProfessionalService")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("ModernDesign")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("FlexiblePricing")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("QualityCustomersService")}</h5>
                {/* <!-- Duplicate Content (Second Copy) --> */}
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("ProfessionalService")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("TrustedCompany")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("NaturalUniqueMaterials")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("AffordableCostRate")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("ProfessionalService")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("ModernDesign")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("FlexiblePricing")}</h5>
                <h5><img src="public/assets/assets/img/asterisk.png" alt="star" />{t("QualityCustomersService")}</h5>
            </div>
        </div>
    )
}

export default LinkingSlider