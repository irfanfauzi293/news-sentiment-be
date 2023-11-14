const { UsersDao } = require('../dao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UsersService {
  static fetchUsers() {
    return UsersDao.fetchUsers();
  }

  static async fetchToken(userId) {
    console.log(userId);
    return UsersDao.fetchUserByUserId(userId, ['token']);
  }

  static async registerUser(data) {
    const existUser = await UsersDao.fetchUserByUsername(data.username);

    if (existUser) {
      throw new Error('Username is already exist.');
    }

    const createdDate = new Date();
    const createdBy = data.username;

    const hashPassword = await bcrypt.hash(data.userPassword, 10);

    return UsersDao.insertUser({
      ...data,
      userPassword: hashPassword,
      createdBy,
      createdDate,
    });
  }

  static async login(username, userPassword) {
    const user = await UsersDao.fetchUserByUsername(username);
    if (!user) {
      throw new Error('User is not found');
    }
    const match = await bcrypt.compare(userPassword, user.userPassword);
    if (!match) {
      throw new Error('Password is false');
    }
    const token = jwt.sign(
      { userId: user.userId, username: user.username },
      'key'
    );

    await UsersDao.updateUser(username, { token });

    return token;
  }
}

module.exports = UsersService;
