//   id      String  @id @default("thisisanid") @map("_id")
//   videos  Video[]
//   creator String
import gql from "graphql-tag";

export const folderTypeDefs = gql`
  type Folder {
    id: String!
    title: String!
    videos: [Video]
    # creator: User!
    creatorId: String!
  }

  input FolderCreateInput {
    id: String!
    title: String!
    creatorId: String!
  }

  type Query {
    getAllFolders: [Folder]!
  }

  type Mutation {
    createFolder(input: FolderCreateInput!): Folder!
  }
`;
