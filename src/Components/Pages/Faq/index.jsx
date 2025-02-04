"use client";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import Loader from "@/Layout/Loader";
import request from "@/Utils/AxiosUtils";
import { FaqAPI } from "@/Utils/AxiosUtils/API";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useQuery } from "@tanstack/react-query";
import { useEffect,useState } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "reactstrap";

const BrowserFaq = ({ heading = false }) => {
  const { t, i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;
  const [open, setOpen] = useState(null); // State to manage open accordion item
  const [banners, setBanners] = useState([]);
  const [faq, setFaq] = useState({}); 
  const [isDataLoading, setIsDataLoading] = useState(true);
  useEffect(() => {
      // Fetch data from the corresponding JSON file based on the current language
      const fetchData = async () => {
        try {
          const response = await fetch(`/locales/${currentLanguage}/common.json`);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
  
          // Set banners and features from the fetched data
          if (data.parallax_banner?.banners) {
            const filteredBanners = data.parallax_banner[currentLanguage]?.banners.filter((item) => item?.status);
            setBanners(filteredBanners || []); // Fallback to an empty array if undefined
          }
  
          // Set hero data
          setFaq(data.faq || {}); // Fallback to an empty object if undefined
  
          setIsDataLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setFaq({}); // Fallback to an empty object on error
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [currentLanguage]);
  
  const toggle = (id) => {
    if (open === id) {
      setOpen(null); // Close the accordion if it's already open
    } else {
      setOpen(id); // Open the clicked accordion item
    }
  };

  const { data, isLoading } = useQuery([FaqAPI], () => request({ url: FaqAPI, params: { status: 1 } }), {
    enabled: true,
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data,
  });

  const getTitle = (faq) => {
    try {
      return JSON.parse(faq?.title)?.[currentLanguage];
    } catch (err) {
      return faq?.title;
    }
  };

  const getDescription = (faq) => {
    try {
      return JSON.parse(faq?.description)?.[currentLanguage];
    } catch (err) {
      return faq?.description;
    }
  };

  if (isDataLoading) return <Loader />;

  return (
    <>
      {data?.length > 0 ? (
        <div className="faq-section section-padding pb-60">
          <div className="container">
            <div className="row">
              {/* Image Section */}
              <div className="col-xl-6 col-lg-6 wow fadeInUp d-flex align-items-center justify-content-center" data-wow-delay=".8s">
                <div className="faq-img-wrap">
                  <img src="assets/assets/img/faq.jpg" alt="FAQ Background" className="img-fluid faq-image" />
                </div>
              </div>

              {/* FAQ Content Section */}
              <div className="col-xl-6 col-lg-6">
                <div className="faq-content-wrap">
                  <div className="section-title">
                    <h6>FAQ's</h6>
                    <div className="heading-animation">
                      <h2>{faq.title || "Default Title"}</h2>
                    </div>
                  </div>
                  <div className="cp-custom-accordion">
                    <div className="accordions" id="accordionExample">
                      {data?.map((faq, i) => (
                        <div className="accordion-items" key={i}>
                          <h2 className="accordion-header" id={`heading${i + 1}`}>
                            <button
                              className={`accordion-buttons ${open === i + 1 ? "" : "collapsed"}`}
                              type="button"
                              onClick={() => toggle(i + 1)}
                              aria-expanded={open === i + 1 ? "true" : "false"}
                              aria-controls={`collapse${i + 1}`}
                            >
                              {getTitle(faq)}
                            </button>
                          </h2>
                          <div
                            id={`collapse${i + 1}`}
                            className={`accordion-collapse collapse ${open === i + 1 ? "show" : ""}`}
                            aria-labelledby={`heading${i + 1}`}
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>{getDescription(faq)}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className="section-b-space">
          <Container>
            <NoDataFound
              customClass="no-data-added"
              imageUrl={'/assets/svg/empty-items.svg'}
              title="NoFAQFound"
              description="NoFAQDescription"
              height="300"
              width="300"
            />
          </Container>
        </section>
      )}
    </>
  );
};

export default BrowserFaq;