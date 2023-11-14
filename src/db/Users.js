module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'UsersBean',
    {
      userId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: 'userId',
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        field: 'username',
      },
      userPassword: {
        type: DataTypes.STRING,
        field: 'userPassword',
      },
      email: {
        type: DataTypes.STRING,
        field: 'email',
      },
      token: {
        type: DataTypes.STRING,
        field: 'token',
      },
      createdDate: {
        type: DataTypes.DATE,
        field: 'createdDate',
      },
      createdBy: {
        type: DataTypes.STRING,
        field: 'createdBy',
      },
      modifiedDate: {
        type: DataTypes.DATE,
        field: 'modifiedDate',
      },
      modifiedBy: {
        type: DataTypes.STRING,
        field: 'modifiedBy',
      },
    },
    {
      tableName: 'Users',
      timestamps: false,
    }
  );

  return model;
};
