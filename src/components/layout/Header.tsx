"use client";
import { useCategoryQuery } from "@/hooks/categoryQuery";
import Link from "next/link";

const Header = () => {
  const { data: category } = useCategoryQuery();
  const filterCategory = category?.filter(
    (item: string) => item !== "electronics"
  );

  return (
    <div className="navbar bg-base-100 p-4 sm:p-5 md:p-6">
      {/* 모바일 환경에서만 보이는 햄버거 메뉴 */}
      <div className="block lg:hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* 노트북 이상 환경에서만 보이는 로고, 네비게이션 */}
      <div className="flex-1 hidden lg:flex">
        <Link
          href="/"
          className="btn btn-ghost sm:text-lg md:text-xl font-semibold"
        >
          Next-Mini-Market
        </Link>

        <div className="ml-10 flex space-x-8">
          <Link href="/" className="text-base">
            Home
          </Link>

          {/* Shop 항목과 하위 카테고리 */}
          <div className="relative group">
            <div className="text-base cursor-pointer">Shop</div>
            <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white shadow-lg group-hover:block w-48 p-4 rounded-md z-10 group-focus-within:block">
              {filterCategory?.map((item: string, idx: number) => (
                <li key={idx}>
                  <Link href={`/product/${item}`} className="block text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <a href="#" className="text-base">
            Contact
          </a>
        </div>
      </div>

      {/* 검색창과 장바구니 */}
      <div className="flex-none flex items-center justify-end space-x-2 ml-auto">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 sm:w-36 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <Link href={"/cart"}>
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
