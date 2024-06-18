const typeDefs = `
    # Object types

    type User {
        _id: ID
        username: String
        email: String
        password: String
        membership: Membership
        influence: Number

    }

    type Party {
        _id: ID
        name: String
    }

    type Membership {
        party: Party
        role: String
    }

    type Auth {
        token: ID!
        user: User
    }

    # input types

    input japInput {
        username: String
        party: String
        role: String
    }

    input registerPartyInput {
        partyName: String
    }

    # input types

    input userInput {
        username: String!
        email: String!
        password: String!
    }

    # Queries & Mutations

    type Query {
        me: User
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        signUp(userData: userInput)
    }

`;

module.exports = typeDefs;
