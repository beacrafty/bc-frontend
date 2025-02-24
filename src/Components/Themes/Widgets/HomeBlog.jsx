import NoDataFound from "@/Components/Widgets/NoDataFound";
import BlogContext from "@/Context/BlogContext";
import Btn from "@/Elements/Buttons/Btn";
import request from "@/Utils/AxiosUtils";
import { BlogAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect , useState} from "react";
import { useTranslation } from "react-i18next";

const HomeBlog = ({ blogIds }) => {
  const router = useRouter();
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  const {
    data: blogs,
    refetch,
    isLoading: isLoading,
  } = useQuery([BlogAPI, blogIds], () => request({ url: BlogAPI, params: { ids: blogIds?.join(","), status: 1 } }, router), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data,
  });

  const contentData = {
    en: {
      "title": "Blog & News",
      "subtitle": "Our Latest Articles",
      "btn": "Read More"
    },
    fr: {
      "title": "Blog & Actualités",
      "subtitle": "Nos Derniers Articles",
      "btn": "Lire la suite"
    },
    de: {
      "title": "Blog & News",
      "subtitle": "Unsere neuesten Artikel",
      "btn": "Mehr lesen"
    }
  }


  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const latestBlogs = blogs?.slice(0, isMobile ? 4 : 3);


  return (
    <div className="blog-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="section-title">
              <h6>{contentData?.[currentLanguage]?.title}</h6>
              <div className="heading-animation">
                <h2>{contentData?.[currentLanguage]?.subtitle}</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 text-lg-end button-wrapper">
            <Btn
              onClick={() => {
                router.push("/blogs");
              }}
              className="btn-solid">{contentData?.[currentLanguage]?.btn}</Btn>
          </div>
        </div>
        <div className="row g-sm-4 g-3 mt-3 mt-sm-4">
          {latestBlogs?.length ? (
            latestBlogs.map((blog, index) => (
              <div className="col-6 col-md-6 col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`} key={index}>
                <Link href={`/blogs/${blog?.slug}`} className="single-blog-item rounded-blog-card" style={{ height: "90%", display: "flex", flexDirection: "column" }}>
                  <div className="blog-img rounded-blog-img" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                    <img 
                      src={blog.blog_thumbnail.original_url} 
                      alt={blog.title}
                      style={{ 
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }} 
                    />
                  </div>
                  <div className="blog-content rounded-blog-content" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <div className="blog-meta">
                      <span>{new Date(blog?.created_at).toLocaleString("en-US", { day: "2-digit", month: "short", year: "numeric" })}</span>
                    </div>
                    <div className="blog-title">
                      <h4>{blog.title}</h4>
                    </div>
                    <span className="link_icon"><i className="las la-arrow-right"></i></span>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <NoDataFound customClass="no-data-added" title="NoBlogsFound" />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
