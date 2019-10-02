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

  type Mutation {
    register(username: String!, email: String!, instrument: String!, password: String!): Boolean!
  }
  `