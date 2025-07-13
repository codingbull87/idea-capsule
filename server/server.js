require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const capsuleRoutes = require('./routes/capsuleRoutes');

const app = express();

// --- 中间件 (Middleware) ---
// 在开发环境中，我们可以暂时允许所有来源的请求来简化调试
app.use(cors()); 
app.use(express.json()); // 解析JSON格式的请求体

// --- 数据库连接 ---
connectDB();

// --- 路由 (Routes) ---
app.use('/api/capsules', capsuleRoutes);

// --- 启动服务器 ---
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});