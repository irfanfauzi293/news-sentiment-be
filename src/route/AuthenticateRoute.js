const express = require('express');

const router = express.Router();
const { AuthenticateController, Middleware } = require('../controller');

router.get('/authenticate', AuthenticateController.fetchUsers);
router.post(
  '/authenticate/register',
  AuthenticateController.handleRegisterUser
);
router.post('/authenticate', AuthenticateController.handleLogin);
router.post('/authenticate/test', Middleware.decodeClientToken, (req, res) => {
  res.json({
    success: true,
    message: 'Middleware berhasil',
    decodedJwt: req.decodedJwt,
  });
});

module.exports = router;
