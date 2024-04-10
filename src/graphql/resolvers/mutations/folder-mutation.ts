import { FolderCreateInput } from "@/graphql/generated";
import { createFolder } from "@/services/folder-service";

export const folderMutations = {
  createFolder: (_: unknown, { input }: { input: FolderCreateInput }) => createFolder(input),
};
