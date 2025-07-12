const Capsule = require('../models/capsuleModel');

/**
 * @desc    获取所有想法胶囊
 * @route   GET /api/capsules
 * @access  Public
 */
const getCapsules = async (req, res) => {
  try {
    const capsules = await Capsule.find({}).sort({ createdAt: -1 });
    res.status(200).json(capsules);
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

/**
 * @desc    创建一个新的想法胶囊
 * @route   POST /api/capsules
 * @access  Public
 */
const createCapsule = async (req, res) => {
  try {
    const { content } = req.body;

    // 简单验证
    if (!content || content.trim() === '') {
      return res.status(400).json({ message: '内容不能为空' });
    }

    const newCapsule = new Capsule({
      content,
    });

    const savedCapsule = await newCapsule.save();
    res.status(201).json(savedCapsule);
  } catch (error) {
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
};

module.exports = {
  getCapsules,
  createCapsule,
}; 