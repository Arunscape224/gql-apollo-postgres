import { gql } from 'apollo-server-express'

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
    instrument: String!
    bands: [Band!]!
  }

  type Query {
    getUser(id: Int!): User!
    allUsers: [User!]!
  }

  type RegisterResponse {
    ok: Boolean!
    user: User
    errors: [Error!]
  }

  type LoginResponse {
    ok: Boolean!
    token: String
    refreshToken: String
    errors: [Error!]
  }

  type Mutation {
    register(username: String!, email: String!, instrument: String!, password: String!): RegisterResponse!
    login(email: String!, password: String!): LoginResponse!
  }
  `