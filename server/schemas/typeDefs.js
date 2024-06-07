const typeDefs = `

  # Object types

  type User {
    _id: ID
    username: String!
    email: String!
    avatar: String
    messages: [Message]
    comments: [Comment]
  }

  type Message {
    _id: ID!
    messageAuthor: String!
    messageText: String!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Comment {
    _id: ID!
    content: String!
    commenter: String!
    createdAt: String!
  }

 # Input types

  input userInput {
    username: String!
    email: String!
    password: String!
  }

  input messageInput {
    messageText: String!
    messageAuthor: String!
  }

  input CommentInput {
    content: String!
    userID: ID!
  }

  # Queries & Mutations

  type Query {
    me: User
    user(username: String!): User
    lesson(id: ID!): Lesson
    problem(id: ID!): Problem
    commentsByUser(userId: ID!): [Comment]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    googleLogin(credential: String!): Auth
    addUser(userData: userInput!): Auth
    addMessage(messageData: messageInput): User
    addComment(commentData: CommentInput!): User
  }

`;

module.exports = typeDefs;
