import { getAllCategories } from "@/services/category-service";

export const categoryQueries = {
  getAllCategories: () => getAllCategories(),
};
