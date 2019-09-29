import { gql } from 'apollo-server-express'

export default gql`
 type Band {
     owner: User!
     members: [User!]!
     channels: [Channel!]!
 }

 type Mutation {
     createBand(name: String!): Boolean!
 }
`