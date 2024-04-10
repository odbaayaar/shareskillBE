import gql from "graphql-tag";

export const videoTypeDefs = gql`
  type Video {
    id: String!
    creator: User!
    creatorId: String!
    file: String!
    thumbnail: String!
    categories: [Category]!
    categoryIds: [String]!
    title: String!
    description: String!
    folder: Folder
    folderId: String
  }

  input VideoCreateInput {
    id: String!
    creatorId: String!
    file: String!
    thumbnail: String!
    categoryIds: [String!]!
    title: String!
    description: String!
  }

  type Query {
    getAllVideos: [Video]!
    getAllVideosByUserId(creatorId: ID!): [Video]!
  }

  type Mutation {
    uploadVideo(input: VideoCreateInput!): Video!
  }
`;
