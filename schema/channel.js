import { gql } from 'apollo-server-express'

export default gql`
  type Channel {
    id: Int!
    messages: [Message!]!
    owner: User!
    members: [User!]!
  }
  `