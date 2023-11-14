const { NewsDataService } = require('../service');

class NewsDataController {
  static async fetchNewsDataByFigureId(req, res) {
    try {
      const result = await NewsDataService.fetchNewsDataByFigureId(
        req.params.figureId,
        req.query.year
      );
      res.status(200).json({
        success: true,
        data: {
          ...result,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = NewsDataController;
