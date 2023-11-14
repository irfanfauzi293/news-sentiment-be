const { UsersBean } = require('../db');

class UsersDao {
  static fetchUsers() {
    return UsersBean.findAll();
  }

  static fetchUserByUsername(username) {
    return UsersBean.findOne({ where: { username } });
  }

  static fetchUserByUserId(userId, attributes = ['userId']) {
    return UsersBean.findOne({ where: { userId }, attributes });
  }

  static insertUser(data) {
    return UsersBean.create(data);
  }

  static updateUser(username, updatedData) {
    return UsersBean.update(updatedData, {
      where: { username },
    });
  }
}

module.exports = UsersDao;
