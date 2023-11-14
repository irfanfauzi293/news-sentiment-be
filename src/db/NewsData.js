module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'NewsDataBean',
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
        allowNull: false,
      },
      figureId: {
        type: DataTypes.BIGINT,
        field: 'figureId',
      },
      judul: {
        type: DataTypes.STRING,
        field: 'judul',
      },
      penulis: {
        type: DataTypes.STRING,
        field: 'penulis',
      },
      text: {
        type: DataTypes.STRING,
        field: 'text',
      },
      summary: {
        type: DataTypes.STRING,
        field: 'summary',
      },
      date: {
        type: DataTypes.DATE,
        field: 'date',
      },
      source: {
        type: DataTypes.STRING,
        field: 'source',
      },
      translate: {
        type: DataTypes.STRING,
        field: 'translate',
      },
      sentiment: {
        type: DataTypes.STRING,
        field: 'sentiment',
      },
      svm: {
        type: DataTypes.STRING,
        field: 'svm',
      },
      image: {
        type: DataTypes.STRING,
        field: 'image',
      },
    },
    {
      tableName: 'news_data',
      timestamps: false,
    }
  );

  return model;
};
