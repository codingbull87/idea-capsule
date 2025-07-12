const express = require('express');
const router = express.Router();
const {
  getCapsules,
  createCapsule,
} = require('../controllers/capsuleController');

// 定义路由
// GET /api/capsules
router.route('/').get(getCapsules).post(createCapsule);

module.exports = router; 