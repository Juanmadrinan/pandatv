const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');

router.get('/', mediaController.getAllMedia);
router.post('/', mediaController.addMedia);
router.patch('/', mediaController.updateMedia);
router.delete('/', mediaController.deleteMedia);

module.exports = router;