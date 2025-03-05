import Btn from "@/Elements/Buttons/Btn";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const AboutUsText = ({ contentData }) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div id="about-3" className="about-section section-padding pt-180">
      <div className="container">
        <div className="row gx-lg-5">
          <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="about-img-wrap">
              <img src="public/assets/assets/img/about/about-us.jpg" className="rounded-image" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-content-wrap mobile-text-center">
              <div className="section-title">
                <h6>{contentData?.sub_title}</h6>
                <div className="heading-animation">
                  <h2>{contentData?.title}</h2>
                </div>
              </div>
              {contentData?.description?.split("\n").map((paragraph, index) =>
                paragraph.trim() ? (
                  <p key={index}>{paragraph}</p>
                ) : (
                  <br key={index} />
                )
              )}

              <div className="about-list-item">
                <ul>
                  {contentData?.futures.map((item, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-circle-check"></i>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="button-wrapper">
                <Btn
                  onClick={() => {
                    router.push("/collections");
                  }}
                  className="btn-solid mt-20">{t("ShopNow")}</Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsText;
