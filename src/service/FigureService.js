const { FigureDao, NewsDataDao } = require('../dao');

class FigureService {
  static fetchFigures() {
    return FigureDao.fetchFigures();
  }

  static fetchFiguresByUserId(userId) {
    return FigureDao.fetchFiguresByUserId(userId);
  }

  static createNewFigure(data) {
    return FigureDao.insertFigure(data);
  }

  static async deleteFigure(figureId) {
    await NewsDataDao.deleteNewsByFigureId(figureId);

    return FigureDao.deleteFigure(figureId);
  }
}

module.exports = FigureService;
