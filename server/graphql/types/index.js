const typeDefs = `
type User {
  _id: ID!  
  firstName: String
  lastName: String
  username: String!
}

type Query {
  users: [User]
}

type Mutation {
  updateUsername (
    userId: ID!
    username: String!
  ): User
}
schema {
  query: Query
  mutation: Mutation
}
`;

export  {typeDefs};