import ProductBox11 from "@/Components/Widgets/ProductBox/ProductBox11";
import ProductBox2 from "@/Components/Widgets/ProductBox/ProductBox2";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ListProductBox = ({ product, productBox, isOpen, onProductClick }) => {
  const [productState, setProductState] = useState({ product: product, attributeValues: [], productQty: 1, selectedVariation: "", variantIds: [] });
  const router = useRouter();

  useEffect(() => {
    if (product) {
      setProductState({ ...productState, product: product });
    }
  }, [product, isOpen]);

  const handleClick = () => {
    onProductClick?.();
    router.push(`/product/${product.slug}`);
  };

  return (
    <div onClick={handleClick}>
      {productBox == 2 ? <ProductBox2 productState={productState} setProductState={setProductState} /> : <ProductBox11 productState={productState} setProductState={setProductState} />}
    </div>
  );
};

export default ListProductBox;
