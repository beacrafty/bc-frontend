import CategoryContext from "@/Context/CategoryContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import { useContext, useEffect, useState } from "react";
import CollectionLeftSidebar from "@/Components/Collection/CollectionLeftSidebar";

const SubCategoryMainPage = ({ params }) => {
  const { isLoading } = useContext(ThemeOptionContext);
  const category = params?.categorySlug;
  const subCategory = params?.subCategorySlug;
  const [filter, setFilter] = useState({ category: [category], brand: [], price: [], attribute: [], rating: [], page: 1, sortBy: "asc", field: "created_at" });
  const [brand, attribute, price, rating, sortBy, field, layout, page] = useCustomSearchParams(["brand", "attribute", "price", "rating", "sortBy", "field", "layout", "page"]);
  useEffect(() => {
    setFilter((prev) => {
      return {
        ...prev,
        page: page ? page?.page : 1,
        brand: brand ? brand?.brand?.split(",") : [],
        attribute: attribute ? attribute?.attribute?.split(",") : [],
        price: price ? price?.price?.split(",") : [],
        rating: rating ? rating?.rating?.split(",") : [],
        sortBy: sortBy ? sortBy?.sortBy : "asc",
        field: field ? field?.field : "created_at",
      };
    });
  }, [brand, attribute, price, rating, sortBy, field, page]);

  const { categoryIsLoading } = useContext(CategoryContext);
  if (categoryIsLoading) return <Loader />;
  return (
    <>
      <Breadcrumbs title={`${category} / ${subCategory}`} subNavigation={[{ name: category }]} />
      <CollectionLeftSidebar filter={filter} setFilter={setFilter} hideCategory categorySlug={subCategory} />
    </>
  );
};

export default SubCategoryMainPage;
