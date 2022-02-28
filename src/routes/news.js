
const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
// Cấu hình news
// PATH sẽ được viết ở file news.js

router.use('/:slug', newsController.show);



router.use('/', newsController.index);
// newsController.index();

module.exports = router;