import { createCategory } from "@/services/category-service";
import { CreateCategoryInput } from "@/graphql/generated";

export const categoryMutations = {
  createCategory: (_: unknown, { input }: { input: CreateCategoryInput }) => createCategory(input),
};
