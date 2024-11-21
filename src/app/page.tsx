"use client";
import { useProductsQuery } from "@/hooks/productsQuery";
import ProductList from "./(productList)/ProductList";

export interface ProductType {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default function Home() {
  const { isLoading, data: products } = useProductsQuery();
  const filterProducts = products?.filter(
    (product: ProductType) => product.category !== "electronics"
  );
  return (
    <div className="flex flex-col min-h-screen w-full mb-20">
      <main className="flex flex-col items-center sm:items-start w-full px-4 sm:px-8 lg:px-16">
        {/* 비디오 컨테이너 */}
        <div className="relative w-full pt-[56.25%] sm:pt-[50%] lg:pt-[40%] mb-10">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            controls={false}
            muted
            loop
            autoPlay
          >
            <source src="/videos/main_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <ProductList isLoading={isLoading} products={filterProducts} />
      </main>
    </div>
  );
}
