const { NewsDataDao } = require('../dao');

class NewsDataService {
  static async fetchNewsDataByFigureId(figureId, year) {
    const newsData = await NewsDataDao.fetchNewsDataByFigureId(figureId);
    const totalNews = await NewsDataDao.fetchCountNewsDataByFigureId(figureId);
    const totalPositive = await NewsDataDao.fetchCountNewsDataSentiment(
      figureId,
      'Positive'
    );
    const totalNeutral = await NewsDataDao.fetchCountNewsDataSentiment(
      figureId,
      'Neutral'
    );
    const totalNegative = await NewsDataDao.fetchCountNewsDataSentiment(
      figureId,
      'Negative'
    );
    let dataMonthPositive = [];
    let dataMonthNeutral = [];
    let dataMonthNegative = [];
    if (year) {
      dataMonthPositive = await NewsDataDao.fetchDataPerMonth(
        figureId,
        'Positive',
        year
      );
      dataMonthNeutral = await NewsDataDao.fetchDataPerMonth(
        figureId,
        'Neutral',
        year
      );
      dataMonthNegative = await NewsDataDao.fetchDataPerMonth(
        figureId,
        'Negative',
        year
      );
    }
    return {
      newsData,
      totalNews: totalNews.dataValues.totalNews,
      totalPositive: totalPositive.dataValues.totalPositive,
      totalNeutral: totalNeutral.dataValues.totalNeutral,
      totalNegative: totalNegative.dataValues.totalNegative,
      dataMonthPositive,
      dataMonthNegative,
      dataMonthNeutral,
    };
  }
}

module.exports = NewsDataService;
