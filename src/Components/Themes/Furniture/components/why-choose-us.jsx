const WhyChooseUs = ({ contentData, imageData }) => {

    return (
        <div className="choose-us-section section-padding gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section-title">
                            <h6>{contentData?.tag || 'Why Choose Us'}</h6>
                            <div className="heading-animation">
                                <h2>{contentData?.title || 'Craftsmanship, Quality, and Care You Can Rely On'}</h2>
                            </div>
                        </div>
                        <div className="choose-item-wrap mt-60">
                            <div className="single-choose-item wow fadeInUp" data-wow-delay=".2s">
                                <div className="choose-icon">
                                    <i className="las la-adjust"></i>
                                </div>
                                <div className="choose-content">
                                    <h5>{contentData?.feature_title_1 || 'Years Experiences' }</h5>
                                    <p>{contentData?.feature_description_1 || 'Our extensive experience guarantees exceptional craftsmanship and attention to detail in every piece.'}</p>
                                </div>
                            </div>
                            <div className="single-choose-item wow fadeInUp" data-wow-delay=".4s">
                                <div className="choose-icon">
                                    <i className="las la-user-check"></i>
                                </div>
                                <div className="choose-content">
                                    <h5>{contentData?.feature_title_2 || 'Professional Staffs'}</h5>
                                    <p>{contentData?.feature_description_2 || 'Our dedicated team ensures a seamless experience, from the initial design to the final product.'}</p>
                                </div>
                            </div>
                            <div className="single-choose-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="choose-icon">
                                    <i className="las la-crop-alt"></i>
                                </div>
                                <div className="choose-content">
                                    <h5>{contentData?.feature_title_3 || 'Affordable Price'}</h5>
                                    <p>{contentData?.feature_description_3 || 'We provide top-quality wooden products at competitive prices, ensuring great value for your money.'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="choose-us-img-wrap wow fadeInRight" data-wow-delay=".2s">
                            <img src={imageData?.image_url} className="rounded-image" alt="" />
                            <div className="info-founder">
                                <i className="flaticon-carpenter-5"></i>
                                <p>{contentData?.year_founded || 'Since 2024' }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs