const { UsersService } = require('../service');

class AuthenticateController {
  static async fetchUsers(req, res) {
    try {
      const result = await UsersService.fetchUsers();
      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async handleRegisterUser(req, res) {
    try {
      const result = await UsersService.registerUser(req.body);
      res.status(200).json({
        success: true,
        message: `${result.username} has been registered`,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async handleLogin(req, res) {
    try {
      const { username, userPassword } = req.body;
      const token = await UsersService.login(username, userPassword);
      res.status(200).json({
        success: true,
        message: `Login is successfully`,
        token,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = AuthenticateController;
