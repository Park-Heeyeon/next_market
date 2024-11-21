import { ProductType } from "../page";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";

interface ProductListProps {
  isLoading: boolean;
  products: ProductType[];
}

const ProductList = ({ isLoading, products }: ProductListProps) => {
  return (
    <div className="mx-auto pt-8 pb-20">
      <h2 className="pb-12 text-center font-bold text-xl sm:text-lg md:text-2xl lg:text-3xl">
        Product List
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="w-full">
                <ProductCardSkeleton />
              </div>
            ))
          : products?.map((product: ProductType, idx: number) => (
              <div key={idx} className="w-full">
                <ProductCard product={product} />
              </div>
            ))}
      </div>
    </div>
  );
};
export default ProductList;
