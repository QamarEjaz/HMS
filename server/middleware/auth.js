const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const authMiddleware = async (req, res, next) => {
  
  const { authorization } = req.headers; //get token from header
  if (!authorization || !authorization.startsWith('Bearer ')) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: 'Missing or invalid token' });
  } else {
    const token = authorization.split(' ')[1];
    console.log(token);

    const user =  jwt.verify(token, process.env.JWT_KEY);
    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  }
//   const { token } = req.cookies;
//   if (!token)
//  return res.status(StatusCodes.UNAUTHORIZED)
//       .json({ error: 'Missing or invalid token' });
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
//   req.user = await Admin.findById(decoded.id);
//   next();
};
module.exports = authMiddleware;
