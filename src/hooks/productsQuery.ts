import { fetchApi } from "@/app/api";
import { useQuery } from "@tanstack/react-query";

const getProducts = async () => {
  try {
    const data = await fetchApi(process.env.NEXT_PUBLIC_PRODUCTS_SERVER_URL);
    return data || [];
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (id: string) => {
  try {
    if (!id) return;
    const data = await fetchApi(
      `${process.env.NEXT_PUBLIC_PRODUCTS_SERVER_URL}/${id}`
    );
    return data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
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
