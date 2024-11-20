import { fetchApi } from "@/app/api";
import { useQuery } from "@tanstack/react-query";

const getCategory = async () => {
  try {
    const data = await fetchApi(
      `${process.env.NEXT_PUBLIC_PRODUCTS_SERVER_URL}/categories`
    );
    return data || [];
  } catch (error) {
    console.log(error);
  }
};

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });
};
