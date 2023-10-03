const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function (req,res,next) {
    
    let token = req.headers.authorization;

    
    if (token) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return res.send("Unauthorized")
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      return next();
    } catch {
      return res.send("Internal Error")
    }
  },
  signToken: function (payload) {
  
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
