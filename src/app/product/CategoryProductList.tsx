"use client";

import { useProductsByCategory } from "@/hooks/productsQuery";
import { useSearchParams } from "next/navigation";
import ProductList from "../(productList)/ProductList";
import { useEffect } from "react";

const CategoryProductList = () => {
  const searchParams = useSearchParams();
  const categoryName = searchParams.get("category");
  const { isLoading, data: products } = useProductsByCategory(
    categoryName || ""
  );

  useEffect(() => {
    console.log("gmldus", products);
  }, [products]);

  return <ProductList isLoading={isLoading} products={products} />;
};
export default CategoryProductList;
