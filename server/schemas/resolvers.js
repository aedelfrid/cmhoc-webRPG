const { User, Party } = require('../models');
const { signToken, decodeToken, AuthenticationError } = require('../utils/Auth');

const resolvers = {
    Query: {
        parties: async (_) => {
            return await Party.find()
        }
    },
    Mutation: {
        japarty: async (_, {username, party, role}) => {
            let user = await User.findOne({ username })

            if (!user) {
                return await User.create({ username, membership: {
                    party: await Party.findOne({ party }),
                    role
                }})
            }

           return user.updateOne({membership: {
                party: await Party.findOne(party),
                role
            }})
        },
        registerParty: async (_, { partyName }) => {
           return await Party.create({ name: partyName })
        }
    },
};


module.exports = resolvers;
