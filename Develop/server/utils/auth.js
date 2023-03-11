const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (context) {
    // allows token to be sent via headers
    const authHeader = context.req.headers.authorization;
    if (!authHeader) {
      throw new Error('You have no token!');
    }

    // ["Bearer", "<tokenvalue>"]
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new Error('You have no token!');
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      context.user = data;
    } catch (err) {
      console.log('Invalid token:', err);
      throw new Error('Invalid token!');
    }
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
