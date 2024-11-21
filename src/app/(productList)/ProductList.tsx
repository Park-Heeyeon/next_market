import { useEffect, useRef } from "react";
import { ProductType } from "../page";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";

interface ProductListProps {
  isLoading: boolean;
  products: ProductType[];
  fetchNextPage?: () => void; // 다음 페이지를 가져오는 함수 (옵션)
  hasNextPage?: boolean; // 다음 페이지 존재 여부 (옵션)
  isFetching?: boolean; // 추가 데이터를 가져오는 중인지 여부 (옵션)
}

const ProductList = ({
  isLoading,
  products,
  fetchNextPage = () => {},
  hasNextPage = false,
  isFetching = false,
}: ProductListProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current || !hasNextPage || isFetching) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage(); // 다음 페이지 데이터를 요청
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect(); // Observer 해제
  }, [hasNextPage, fetchNextPage, isFetching]);

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
      {/* 무한 스크롤을 위한 관찰 대상 */}
      <div ref={observerRef} className="h-10" />
      {isFetching && !isLoading && (
        <div className="text-center mt-4">Loading more...</div>
      )}
    </div>
  );
};
export default ProductList;
