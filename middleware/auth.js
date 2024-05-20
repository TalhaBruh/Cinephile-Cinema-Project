const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token || req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

module.exports = authenticateToken;
