const typeDefs = `
    # Object types

    type User {
        _id: ID
        username: String
        membership: Membership
    }

    type Party {
        _id: ID
        name: String
    }

    type Membership {
        party: Party
        role: String
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

    # Queries & Mutations

    type Query {
        parties(): Party
    }

    type Mutation {
        japarty(japData: japInput): User
        registerParty(partyData: registerPartyInput): Party
    }

`;

module.exports = typeDefs;
