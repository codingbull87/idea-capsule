import React, { useState, useEffect } from 'react';
import * as api from './api';
import CapsuleForm from './components/CapsuleForm';
import CapsuleList from './components/CapsuleList';
import './App.css';

function App() {
  const [capsules, setCapsules] = useState([]);
  const [error, setError] = useState(null);

  // 使用useEffect在组件首次加载时获取数据
  useEffect(() => {
    fetchCapsules();
  }, []);

  const fetchCapsules = async () => {
    try {
      const response = await api.getCapsules();
      setCapsules(response.data);
      setError(null); // 成功后清除旧的错误信息
    } catch (err) {
      setError('获取想法列表失败，请检查后端服务是否正常运行，以及API端口是否正确。');
      console.error(err);
    }
  };

  const handleAddCapsule = async (content) => {
    try {
      await api.createCapsule(content);
      // 创建成功后，重新获取整个列表以保证数据最新
      fetchCapsules();
    } catch (err) {
      setError('封存想法失败，请稍后重试。');
      console.error(err);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>想法胶囊</h1>
        <p className="subtitle">一个捕捉和保存灵感的极简空间</p>
      </header>
      <main>
        <CapsuleForm onAddCapsule={handleAddCapsule} />
        {error && <p className="error-message">{error}</p>}
        <CapsuleList capsules={capsules} />
      </main>
    </div>
  );
}

export default App;