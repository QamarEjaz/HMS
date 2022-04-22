const adminDoctorMiddleware = (req, res, next) => {
  if (req.user.role === 'admin' || req.user.role === 'doctor') {
    next();
  } else {
   return res.status(401).json({ error: 'Unauthorized' });
  }
  next()
};
module.exports = adminDoctorMiddleware;
