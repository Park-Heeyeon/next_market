"use client";

import { useProductsByCategory } from "@/hooks/productsQuery";
import { useSearchParams } from "next/navigation";
import ProductList from "../(productList)/ProductList";

const CategoryProductList = () => {
  const searchParams = useSearchParams();
  const categoryName = searchParams.get("category");
  const { isLoading, data: products } = useProductsByCategory(
    categoryName || ""
  );
  return (
    <div className="flex justify-center py-8 sm:py-8 md:py-10 lg:py-12">
      <ProductList isLoading={isLoading} products={products} />)
    </div>
  );
};
export default CategoryProductList;
