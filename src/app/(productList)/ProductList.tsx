import { ProductType } from "../page";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";

interface ProductListProps {
  isLoading: boolean;
  products: ProductType[];
}

const ProductList = ({ isLoading, products }: ProductListProps) => {
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
          : products?.map((product: ProductType) => (
              <div key={product.id} className="w-full">
                <ProductCard product={product} />
              </div>
            ))}
      </div>
    </div>
  );
};
export default ProductList;
