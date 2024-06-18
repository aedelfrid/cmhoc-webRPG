const { User, Party } = require('../models');
const { signToken, decodeToken, AuthenticationError } = require('../utils/Auth');

const resolvers = {
    Query: {
        me: async (_, __, context) => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        user: async (_, { username }) => {
            return await User.findOne({ username: username });
        },
    },
    Mutation: {
        signUp: async (_, { userData }) => {
            const { username, email, password } = userData;

            const user = await User.create({
                username,
                email,
                password
            });

            if (!user) {
                return res.status(400).json({ message: 'Something is wrong!' });
            }

            const token = signToken(user);
            return { token, user };
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        },
    },
};


module.exports = resolvers;
