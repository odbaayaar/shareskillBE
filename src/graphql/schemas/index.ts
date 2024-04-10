import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { userTypeDefs } from "./User.schema";
import { videoTypeDefs } from "./Video.schema";
import { folderTypeDefs } from "./Folder.schema";
import { categoryTypeDefs } from "./Category.schema";
import { commonTypeDefs } from "./Common.schema";

export const typeDefs = mergeTypeDefs([userTypeDefs, videoTypeDefs, folderTypeDefs, categoryTypeDefs, commonTypeDefs]);
