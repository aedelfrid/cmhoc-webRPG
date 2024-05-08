const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');

const secret = "397A2859675EC4E447E66917F8BB8"

module.exports = {
    authMiddleware: function (req, res, next) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
    decodeToken: function (token) {
        return jwt_decode(token)
    }
};