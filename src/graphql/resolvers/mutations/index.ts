import { categoryMutations } from "./category-mutations";
import { folderMutations } from "./folder-mutation";
import { userMutations } from "./user-mutations";
import { videoMutations } from "./video-mutations";

export const Mutation = {
  ...userMutations,
  ...videoMutations,
  ...categoryMutations,
  ...folderMutations,
};
