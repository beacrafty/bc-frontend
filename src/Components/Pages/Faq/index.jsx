"use client";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import Loader from "@/Layout/Loader";
import request from "@/Utils/AxiosUtils";
import { FaqAPI } from "@/Utils/AxiosUtils/API";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from "reactstrap";

const BrowserFaq = ({ heading = false }) => {
  const { t, i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;
  const [open, setOpen] = useState(1);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const { data, isLoading } = useQuery([FaqAPI], () => request({ url: FaqAPI, params: { status: 1 } }), {
    enabled: true,
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data,
  });

  const getTitle = (faq) => {
    try {
        return JSON.parse(faq?.title)?.[currentLanguage]
    } catch(err) {
        return faq?.title;
    }
  }

  const getDescription = (faq) => {
    try {
        return JSON.parse(faq?.description)?.[currentLanguage]
    } catch(err) {
        return faq?.description;
    }
  }

  if (isLoading) return <Loader />;
  return (
    <>
      {/* <Breadcrumbs title={`FAQ's`} subNavigation={[{ name: `FAQ's` }]} /> */}
      {data?.length > 0 ? (
        <WrapperComponent classes={{ sectionClass: "faq-section", colClass: "col-sm-12" }}>
          {heading && <h3>{t("FrequentlyAskedQuestions")}</h3>}
          <Accordion className="faq-accordion" aria-expanded={toggle} open={open} toggle={toggle}>
            {data?.map((faq, i) => (
              <AccordionItem className="card" key={i}>
                <AccordionHeader className="card-header" targetId={i + 1}>
                  {
                      getTitle(faq)
                  }
                </AccordionHeader>
                <AccordionBody className="card-body" accordionId={i + 1}>
                  <p>{getDescription(faq)}</p>
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </WrapperComponent>
      ) : (
        <section className="section-b-space">
          <Container>
            <NoDataFound customClass="no-data-added" imageUrl={'/assets/svg/empty-items.svg'} title="NoFAQFound" description="NoFAQDescription" height="300" width="300" />
          </Container>
        </section>
      )}
    </>
  );
};

export default BrowserFaq;
