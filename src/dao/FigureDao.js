const { FigureBean } = require('../db');

class FigureDao {
  static fetchFigures() {
    return FigureBean.findAll();
  }

  static insertFigure(data) {
    return FigureBean.create(data);
  }

  static deleteFigure(figureId) {
    return FigureBean.destroy({
      where: { figureId },
    });
  }

  static fetchFiguresByUserId(userId) {
    return FigureBean.findAll({
      where: { userId },
    });
  }
}

module.exports = FigureDao;
