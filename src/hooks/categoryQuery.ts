import { fetchApi } from "@/app/api";
import { useQuery } from "@tanstack/react-query";

const getCategory = async () => {
  const data = await fetchApi(
    `${process.env.NEXT_PUBLIC_PRODUCTS_SERVER_URL}/categories`
  );
  if (!data) throw new Error("Failed to fetch getCategory");
  return data || [];
};

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });
};
