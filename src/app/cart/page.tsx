"use client";

import { useProductsQuery } from "@/hooks/productsQuery";
import { useEffect, useState } from "react";
import Image from "next/image";
import useModalStore from "@/hooks/modalStore";
import ConfirmModal from "@/components/modal/ConfirmModel";
import { ProductType } from "../page";

const DEILVERY_PRICE = 2.14;

const CartPage = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);
  const { data: products } = useProductsQuery();
  const { open } = useModalStore();

  useEffect(() => {
    const storageItems = localStorage.getItem("cart");
    setCartItems(storageItems ? JSON.parse(storageItems) : []);
  }, []);

  const cartItemDetails = products
    ? products.filter((product: ProductType) =>
        cartItems.includes(product.id.toString())
      )
    : [];

  const totalPrice = cartItemDetails.reduce(
    (sum: number, item: ProductType) => sum + item.price,
    0
  );

  const onClickDelBtn = (id: number) => {
    const productId = id.toString();
    if (!productId) return;
    const filteredCart = cartItems.filter((item) => item !== productId);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setCartItems(filteredCart);
  };

  const onClickPayBtn = () => {
    open(ConfirmModal, { content: "결제 서비스는 준비중이에요." });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 sm:p-8 flex flex-col items-center">
      <section className="bg-white shadow-md rounded-md p-6 mb-6 w-full sm:w-[80%]">
        <h2 className="text-lg font-semibold border-b pb-4 mb-4">장바구니</h2>

        {cartItemDetails.length === 0 ? (
          <p className="text-center text-gray-500">장바구니가 비어 있습니다.</p>
        ) : (
          cartItemDetails.map((product: ProductType) => {
            const { id, image, title, price } = product;
            return (
              <div
                key={id}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4 mb-4"
              >
                <div className="w-24 h-24 relative">
                  <Image src={image} alt={title} fill objectFit="contain" />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-semibold text-sm md:text-base lg:text-lg">
                    {title}
                  </h3>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm md:text-base lg:text-lg">
                    ${price}
                  </p>
                </div>
                <div className="w-full sm:w-auto flex justify-center">
                  <button
                    className="sm:w-auto text-red-500 hover:underline"
                    onClick={() => onClickDelBtn(id)}
                  >
                    x
                  </button>
                </div>
              </div>
            );
          })
        )}
      </section>

      <section className="bg-white shadow-md rounded-md p-6 w-full sm:w-[80%]">
        <h2 className="text-lg font-semibold border-b pb-4 mb-4">주문 요약</h2>
        <div className="flex justify-between mb-2">
          <p>총 상품금액</p>
          <p>${totalPrice}</p>
        </div>
        {totalPrice > 0 && (
          <div className="flex justify-between mb-2">
            <p>배송비</p>
            <p>${DEILVERY_PRICE}</p>
          </div>
        )}
        <div className="flex justify-between font-bold text-lg">
          <p>합계</p>
          <p>${totalPrice > 0 ? totalPrice + DEILVERY_PRICE : totalPrice}</p>
        </div>
        <button
          className="w-full bg-gray-800 text-white py-3 rounded mt-4 hover:bg-gray-900"
          onClick={onClickPayBtn}
        >
          결제하기
        </button>
      </section>
    </div>
  );
};

export default CartPage;
