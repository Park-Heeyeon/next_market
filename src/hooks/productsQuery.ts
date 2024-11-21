import { fetchApi } from "@/app/api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

// 전체 상품 조회
const getProducts = async () => {
  const data = await fetchApi(process.env.NEXT_PUBLIC_PRODUCTS_SERVER_URL);
  if (!data) throw new Error("Failed to fetch products");
  return data;
};

// id에 해당하는 상품 조회
const getProduct = async (id: string) => {
  if (!id) throw new Error("Product ID is required");
  const data = await fetchApi(
    `${process.env.NEXT_PUBLIC_PRODUCTS_SERVER_URL}/${id}`
  );
  if (!data) throw new Error(`Failed to fetch product with id: ${id}`);
  return data;
};

// 카테고리별 상품 조회
const getProductsByCategory = async (category: string) => {
  if (!category) throw new Error("Category is required");

  const data = await fetchApi(
    `${process.env.NEXT_PUBLIC_PRODUCTS_SERVER_URL}/category/${category}`
  );
  if (!data) throw new Error("Failed to fetch products by category");
  return data;
};

// 전체 상품 조회 query
export const useProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

// id에 해당하는 상품 조회 query
export const useProductQuery = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    enabled: !!id, // id가 있을 때만 요청
  });
};

// 카테고리에 해당하는 상품 조회 query
export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => getProductsByCategory(category),
    enabled: !!category,
  });
};
