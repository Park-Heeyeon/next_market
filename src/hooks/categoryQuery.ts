import { useQuery } from "@tanstack/react-query";

const getCategory = async () => {
  const response = await fetch("api/categories");
  const data = await response.json();
  return data;
};

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });
};
