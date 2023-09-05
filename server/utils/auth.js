const jwt = require('jsonwebtoken');
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;
        
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        
        console.log(`token`, token);
        if (!token) {
            return req;
        }

        try {
            const { payload } = jwt.verify(token, secret, { maxAge: expiration });
            console.log(`payload`, payload)
            req.user = payload;
        }   catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        console.log(`payload`, payload)
        return jwt.sign({ payload }, secret, { expiresIn: expiration })
    },
};