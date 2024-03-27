import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: String!
    firstName: String!
    lastName: String!
    emailAddress: String!
    profilePicture: String
    role: Number!
  }

  input UserCreateInput {
    id: String!
    firstName: String!
    lastName: String!
    emailAddress: String!
  }

  input UserUpdateInput {
    id: String!
    firstName: String
    lastName: String
    emailAddress: String
    profilePicture: String
    role: Number
  }

  type Query {
    getAllUsers: [User]!
    getUser(id: ID): User!
  }

  type Mutation {
    createUser(input: UserCreateInput!): User!
    updateUser(input: UserUpdateInput!): User!
  }
`;
