const express = require('express');

const router = express.Router();
const { NewsDataController } = require('../controller');

router.get('/news-data/:figureId', NewsDataController.fetchNewsDataByFigureId);

module.exports = router;
