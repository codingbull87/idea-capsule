require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const capsuleRoutes = require('./routes/capsuleRoutes');

const app = express();

// --- CORS 配置 ---
// 创建一个白名单，只允许我们的前端应用访问
const whitelist = ['http://localhost:3000']; 
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) { // !origin 允许 postman 等工具的访问
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// --- 中间件 (Middleware) ---
app.use(cors(corsOptions)); // 使用我们配置好的CORS选项
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