const { FigureService } = require('../service');

class FigureController {
  static async fetchFigures(req, res) {
    try {
      const result = await FigureService.fetchFigures();
      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async FetchFiguresByUserId(req, res) {
    try {
      const result = await FigureService.fetchFiguresByUserId(
        req.params.userId
      );
      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async handleCreateFigure(req, res) {
    try {
      await FigureService.createNewFigure(req.body);
      res.status(200).json({
        success: true,
        message: 'Tokoh politik berhasil ditambahkan',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async handleDeleteFigure(req, res) {
    try {
      await FigureService.deleteFigure(req.params.figureId);
      res.status(200).json({
        success: true,
        message: 'Tokoh politik berhasil dihapus',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = FigureController;
