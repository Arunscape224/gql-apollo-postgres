import { gql } from 'apollo-server-express'

export default gql`
type Channel {
    id: Int!
    name: String!
    messages: [Message!]!
    users: [User!]!
  }
  type Mutation {
    createChannel(bandId: Int!, name: String!): Boolean!
  }
`