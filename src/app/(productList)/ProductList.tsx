"use client";
import { useProductsQuery } from "@/hooks/productsQuery";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";

export interface ProductType {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const ProductList = () => {
  const { isLoading, data: products } = useProductsQuery();
  const filterProducts = products?.filter(
    (product: ProductType) => product.category !== "electronics"
  );

  return (
    <div className="mx-auto">
      <h2 className="pb-10 text-center font-bold text-xl sm:text-lg md:text-2xl lg:text-3xl">
        Product List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="w-full">
                <ProductCardSkeleton />
              </div>
            ))
          : filterProducts?.map((product: ProductType) => (
              <div key={product.id} className="w-full">
                <ProductCard product={product} />
              </div>
            ))}
      </div>
    </div>
  );
};
export default ProductList;
