"use client";
import ProductDetailSkeleton from "@/components/skeleton/ProductDetailSkeleton";
import { useProductQuery } from "@/hooks/productsQuery";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const ProductDetail = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const { isLoading, data: productInfo } = useProductQuery(productId || "");

  if (isLoading) return <ProductDetailSkeleton />;
  const {
    image,
    title,
    price,
    description,
    category,
    rating: { rate, count },
  } = productInfo;
  return (
    <div className="container mx-auto px-4 py-10 md:py-14">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
        {/* 상품 이미지 */}
        <div className="md:w-1/2 p-5 flex items-center justify-center bg-gray-200">
          <Image
            src={image}
            alt={title}
            layout="intrinsic"
            width={300}
            height={300}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        {/* 상품 정보 */}
        <div className="md:w-1/2 p-6 flex flex-col space-y-4 bg-gray-50">
          <h2 className="text-3xl font-bold text-black">{title}</h2>
          <p className="text-xl font-semibold text-gray-800">
            ${price.toFixed(2)}
          </p>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          <div className="text-gray-500 text-sm">
            Category:{" "}
            <span className="font-medium text-gray-800">{category}</span>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <div className="flex items-center text-yellow-500">
              {[...Array(Math.round(rate))].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-gray-600 text-sm">
              {rate} ({count} reviews)
            </span>
          </div>

          <button className="mt-6 w-full md:w-auto bg-black text-white px-6 py-2 rounded-md shadow-lg hover:bg-gray-900 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
