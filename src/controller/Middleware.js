const jwt = require('jsonwebtoken');
const { UsersService } = require('../service');

const decodeClientToken = async (req, res, next) => {
  if (req.headers.token) {
    req.decodedJwt = jwt.verify(req.headers.token, 'key');
    const userId = req.decodedJwt.userId;
    const userToken = await UsersService.fetchToken(userId);

    if (userToken.token === req.headers.token) {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: 'Webtoken is not match',
      });
    }
  } else {
    res.status(401).json({
      success: false,
      message: 'Webtoken is not exist',
    });
  }
};

module.exports = { decodeClientToken };
