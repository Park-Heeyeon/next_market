"use client";
import AlertModal from "@/components/modal/AlertModal";
import ConfirmModal from "@/components/modal/ConfirmModel";
import ProductDetailSkeleton from "@/components/skeleton/ProductDetailSkeleton";
import useModalStore from "@/hooks/modalStore";
import { useProductQuery } from "@/hooks/productsQuery";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const { isLoading, data: productInfo } = useProductQuery(productId || "");
  const { open, allClose } = useModalStore();

  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const storageItem = localStorage.getItem("cart");
    setCartItems(storageItem ? JSON.parse(storageItem) : []);
  }, []);

  /** 로컬스토리지에 "cart" 키값이나 cart 내에 해당 상품 id가 없으면 장바구니에 추가 있으면 '장바구니에 이미 있는 상품이에요' 모달 표시 */
  const onClickAddCart = () => {
    if (!productId) {
      return;
    }
    open(AlertModal, {
      content: "장바구니에 추가하시겠습니까?",
      clickEvent: addCartHandler,
    });
  };

  const addCartHandler = () => {
    if (!productId) {
      return; // productId가 빈 문자열인 경우 함수 종료
    }
    // 장바구니에 해당 상품 아이디가 있는 경우
    if (cartItems?.some((item) => item === productId)) {
      open(ConfirmModal, {
        content: "이미 장바구니에 추가된 상품이에요.",
        clickEvent: allClose,
      });
    } else {
      const updatedCartItems = [...(cartItems || []), productId];
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
      open(ConfirmModal, {
        content: "장바구니에 추가되었습니다.",
        clickEvent: allClose,
      });
    }
  };

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
    <div className="container w-[70%] md:w-[50%] h-[100%] mx-auto py-10 md:py-14">
      <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center md:flex-row bg-gray-200">
        {/* 상품 이미지 */}
        <div className="w-full flex items-center justify-center p-10 md:p-0">
          <Image
            src={image}
            alt={title}
            layout="intrinsic"
            width={200}
            height={200}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        {/* 상품 정보 */}
        <div className="md:w-1/2 p-6 flex flex-col space-y-4 bg-gray-50">
          <h2 className="text-lg lg:text-xl font-bold text-black">{title}</h2>
          <p className="text-lg lg:text-xl font-semibold text-gray-800">
            ${price.toFixed(2)}
          </p>
          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
            {description}
          </p>

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

          <button
            className="mt-6 w-full md:w-auto bg-black text-white px-6 py-2 rounded-md shadow-lg hover:bg-gray-900 transition"
            onClick={onClickAddCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
