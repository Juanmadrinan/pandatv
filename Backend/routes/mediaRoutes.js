const express = require('express');
const router = express.Router();
const mediaRoutes = require('../controllers/mediaController');

router.get('/', mediaRoutes.getAllMedia);
router.post('/', mediaRoutes.addMedia);
router.patch('/', mediaRoutes.updateMedia);
router.delete('/', mediaRoutes.deleteMedia);

module.exports = router;