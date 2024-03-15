import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { userTypeDefs } from "./User.schema";

export const typeDefs = mergeTypeDefs([userTypeDefs]);
