import { useQuery } from "@tanstack/react-query";

// 전체 상품 조회
const getProducts = async () => {
  const response = await fetch("api/products");
  const data = await response.json();
  return data;
};

// id에 해당하는 상품 조회
const getProduct = async (id: string) => {
  if (!id) throw new Error("Product ID is required");
  const response = await fetch(`api/products/product?id=${id}`);
  const data = await response.json();
  return data;
};

// 카테고리별 상품 조회
const getProductsByCategory = async (category: string) => {
  if (!category) throw new Error("Category is required");

  const response = await fetch(`api/products/category?category=${category}`);
  const data = await response.json();
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
