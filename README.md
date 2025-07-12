# 想法胶囊 (Idea Capsule)

这是一个使用 MERN (MongoDB, Express, React, Node.js) 技术栈构建的简单全栈 Web 应用。用户可以在这里记录一闪而过的想法，并将它们像胶囊一样封存起来。

---

## ✨ 线上应用

你可以通过以下链接访问已经部署的版本：

**[https://idea-capsule-kzmp.vercel.app](https://idea-capsule-kzmp.vercel.app)**

---

## 🚀 如何在本地运行

### 环境要求

- [Node.js](https://nodejs.org/) (推荐使用 LTS 版本)
- [MongoDB](https://www.mongodb.com/try/download/community) 或已注册 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) 账号

### 1. 克隆仓库

```bash
git clone https://github.com/codingbull87/idea-capsule.git
cd idea-capsule
```

### 2. 配置后端

```bash
# 进入后端目录
cd server

# 安装依赖
npm install

# 创建 .env 文件
cp .env.example .env 
# 或者手动创建 .env 文件，并填入以下内容
```

在 `server/.env` 文件中，配置你的数据库连接字符串：
```
MONGODB_URI=你的本地或Atlas的MongoDB连接字符串
PORT=5001
```

### 3. 配置前端

```bash
# (返回根目录) cd ..

# 进入前端目录
cd client

# 安装依赖
npm install
```

### 4. 启动应用

你需要打开两个终端窗口：

1.  **启动后端服务:**
    ```bash
    # 在 server 目录下
    npm run dev
    ```
    服务将运行在 `http://localhost:5001`。

2.  **启动前端应用:**
    ```bash
    # 在 client 目录下
    npm start
    ```
    应用将在 `http://localhost:3000` 自动打开。 