// model Category {
//   id       String   @id @default("thisisanid") @map("_id")
//   type     String
//   videos   Video[]  @relation(fields: [videoIds], references: [id])
//   videoIds String[]
// }
import gql from "graphql-tag";

export const categoryTypeDefs = gql`
  type Category {
    id: String!
    type: String!
    videos: [Video]
    videoIds: [String]
  }
  input CreateCategoryInput {
    id: String!
    type: String!
  }
  type Query {
    getAllCategories: [Category]!
  }
  type Mutation {
    createCategory(input: CreateCategoryInput!): Category!
  }
`;
