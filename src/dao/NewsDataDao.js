const { QueryTypes } = require('sequelize');
const { NewsDataBean, Sequelize, sequelize } = require('../db');

class NewsDataDao {
  static fetchNewsDataByFigureId(figureId) {
    return NewsDataBean.findAll({
      where: { figureId },
      attributes: [
        'id',
        'figureId',
        'judul',
        'penulis',
        'text',
        'summary',
        'date',
        'source',
        'translate',
        'sentiment',
        'svm',
        'image',
      ],
    });
  }

  static fetchCountNewsDataByFigureId(figureId) {
    return NewsDataBean.findOne({
      where: { figureId },
      attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'totalNews']],
    });
  }

  static fetchCountNewsDataSentiment(figureId, svm) {
    return NewsDataBean.findOne({
      where: { figureId, svm },
      attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), `total${svm}`]],
    });
  }

  static fetchDataPerMonth(figureId, svm, year) {
    return sequelize.query(
      `SELECT nd.svm, MONTH(nd.date) MONTH, COUNT(*) COUNT
    FROM news_sentiment.news_data nd
    WHERE YEAR(nd.date)=${year} AND nd.svm = '${svm}' AND nd.figureId = ${figureId}
    GROUP BY nd.svm, MONTH(nd.date)`,
      { type: QueryTypes.SELECT }
    );
  }

  static deleteNewsByFigureId(figureId) {
    return NewsDataBean.destroy({
      where: { figureId },
    });
  }
}

module.exports = NewsDataDao;
