import { fetchApi } from "@/app/api";
import { useQuery } from "@tanstack/react-query";

const getProducts = async () => {
  const data = await fetchApi(process.env.NEXT_PUBLIC_PRODUCTS_SERVER_URL);
  if (!data) throw new Error("Failed to fetch products");
  return data;
};

const getProduct = async (id: string) => {
  if (!id) throw new Error("Product ID is required");
  const data = await fetchApi(
    `${process.env.NEXT_PUBLIC_PRODUCTS_SERVER_URL}/${id}`
  );
  if (!data) throw new Error(`Failed to fetch product with id: ${id}`);
  return data;
};

const getProductsByCategory = async (category: string) => {
  if (!category) throw new Error("Category is required");

  const data = await fetchApi(
    `${process.env.NEXT_PUBLIC_PRODUCTS_SERVER_URL}/category?type=${category}`
  );
  if (!data) throw new Error("Failed to fetch products by category");
  return data;
};

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useProductQuery = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    enabled: !!id, // id가 있을 때만 요청
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => getProductsByCategory(category),
    enabled: !!category,
  });
};
