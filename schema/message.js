import { gql } from 'apollo-server-express'

export default gql`

  type Message {
    id: Int!
    user: User!
    channel: Channel!
    text: String!
  }

  type Mutation {
    createMessage(channelId: Int!, text: String!): Boolean!
  }

  `