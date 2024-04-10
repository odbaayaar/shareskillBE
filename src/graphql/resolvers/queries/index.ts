import { categoryQueries } from "./category-queries";
import { folderQueries } from "./folder-queries";
import { userQueries } from "./user-queries";
import { videoQueries } from "./video-queries";

export const Query = {
  ...userQueries,
  ...videoQueries,
  ...categoryQueries,
  ...folderQueries,
};
