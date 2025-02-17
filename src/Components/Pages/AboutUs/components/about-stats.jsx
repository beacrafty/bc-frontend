import Btn from '@/Elements/Buttons/Btn'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation';

const AboutStats = ({contentData }) => {
  const { t } = useTranslation('common')
  const router = useRouter();
  return (
    <div className="counter-section counter-two dark-bg section-padding">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xl-6 col-lg-6">
              <div className="counter-intro-wrap">
                <div className="section-title">
                  <h6>{contentData?.sub_title || 'How We Work' }</h6>
                  <div className="heading-animation">
                    <h2 className="text-white">{contentData?.title || 'Discover the charm of handcrafted wooden treasures with Bea Crafty'}</h2>
                  </div>
                </div>
                <p className="text-white">{contentData?.description || 'We believe in quality, craftsmanship, and sustainability, ensuring that each piece is a masterpiece that reflects our commitment to excellence.'}</p>
              <Btn
                onClick={() => {
                  router.push("/collections");
                }}
                className="btn-solid mt-20">{t("ShopNow")}</Btn>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 align-content-end">
              <div className="counter-item-wrap">
                <div className="single-counter-box">
                  <p className="counter-number">{contentData?.stats_1 || '114'}</p><span>+</span>
                  <h6>{contentData?.stats_label_1 || 'Unique Products Designed' }</h6>
                </div>
                <div className="single-counter-box">
                  <p className="counter-number">{contentData?.stats_2 || '100' }</p><span>+</span>
                  <h6>{contentData?.stats_label_2 || 'Satisfied Clients and Counting' }</h6>
                </div>
                <div className="single-counter-box">
                  <p className="counter-number">{contentData?.stats_3 || '12' }</p><span>+</span>
                  <h6>{contentData?.stats_label_3 || 'Skilled Artisans Dedicated to Excellence' }</h6>
                </div>
                <div className="single-counter-box">
                  <p className="counter-number">{contentData?.stats_4 || '2' }</p><span>+</span>
                  <h6>{contentData?.stats_label_4 || 'Years of Expertise in Handcrafted Excellence' }</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AboutStats
