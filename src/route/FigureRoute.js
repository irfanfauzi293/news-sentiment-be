const express = require('express');

const router = express.Router();
const { FigureController, Middleware } = require('../controller');

router.get('/figures', FigureController.fetchFigures);
router.get('/figures/:userId', FigureController.FetchFiguresByUserId);
router.post('/figures', FigureController.handleCreateFigure);
router.delete('/figures/:figureId', FigureController.handleDeleteFigure);

module.exports = router;
