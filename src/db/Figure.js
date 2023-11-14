module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'FigureBean',
    {
      figureId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: 'figureId',
        allowNull: false,
      },
      userId: {
        type: DataTypes.BIGINT,
        field: 'userId',
      },
      name: {
        type: DataTypes.STRING,
        field: 'name',
      },
      sentiment: {
        type: DataTypes.STRING,
        field: 'sentiment',
      },
      description: {
        type: DataTypes.STRING,
        field: 'description',
      },
    },
    {
      tableName: 'Figure',
      timestamps: false,
    }
  );

  return model;
};
