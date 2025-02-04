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

const HomeBlog = ({ blogIds, type }) => {
  const { blogState } = useContext(BlogContext);
  const router = useRouter();
  const { t, i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;

  const {
    data: blogs,
    refetch,
    isLoading: queryLoading,
  } = useQuery([BlogAPI, blogIds], () => request({ url: BlogAPI, params: { ids: blogIds?.join(","), status: 1 } }, router), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data,
  });
  const [banners, setBanners] = useState([]);
  const [blog, setBlogs] = useState({}); // Initialize hero state
  const [isLoading, setIsLoading] = useState(true);

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
        setBlogs(data.blog || {}); // Fallback to an empty object if undefined

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        
        setBlogs({}); // Fallback to an empty object on error
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentLanguage]);


  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  // Slice the blogs array to show only the latest 3 blogs
  const latestBlogs = blogs?.slice(0, 3);

  console.log("latest blog", latestBlogs)

  return (
    <div className="blog-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="section-title">
              <h6>{blog?.title || 'Default'}</h6>
              <div className="heading-animation">
                <h2>{blog?.subtitle || 'Default'}</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 text-lg-end">
            <Btn className="btn-solid">{blog?.btn || 'Default'}</Btn>
          </div>
        </div>
        <div className="row gx-4 mt-30">
          {latestBlogs?.length ? (
            latestBlogs.map((blog, index) => (
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`} key={index}>
                <Link href={`/blogs/${blog?.slug}`} className="single-blog-item rounded-blog-card">
                  <div className="blog-img rounded-blog-img">
                    <img src={blog.blog_thumbnail.original_url} alt={blog.title} />
                  </div>
                  <div className="blog-content rounded-blog-content">
                    <div className="blog-meta">
                      <span>{new Date(blog?.created_at).toLocaleString("en-US", { day: "2-digit", month: "short", year: "numeric" })}</span>
                    </div>
                    <div className="blog-title">
                      <h4>{blog.title}</h4>
                    </div>
                    {/* <p>{blog.excerpt || "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."}</p> */}
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