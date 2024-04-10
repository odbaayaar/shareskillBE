import { getAllFolders } from "@/services/folder-service";

export const folderQueries = {
  getAllFolders: () => getAllFolders(),
};
