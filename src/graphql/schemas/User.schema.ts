import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: String!
    firstName: String!
    lastName: String!
    emailAddress: String!
    profilePicture: String
  }

  input UserCreateInput {
    id: String!
    firstName: String!
    lastName: String!
    emailAddress: String!
  }

  type Query {
    getAllUsers: [User]!
  }

  type Mutation {
    createUser(input: UserCreateInput!): User!
  }
`;
