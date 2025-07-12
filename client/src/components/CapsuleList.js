import React from 'react';

/**
 * 格式化日期，使其更友好
 * @param {string} dateString - ISO 格式的日期字符串
 * @returns {string} 格式化后的日期
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

function CapsuleList({ capsules }) {
  if (!capsules || !capsules.length) { // 增加一个对capsules是否存在的检查
    return <p className="empty-message">还没有任何想法，快去封存你的第一个想法吧！</p>;
  }

  return (
    <div className="capsule-list">
      {capsules.map((capsule) => (
        <div key={capsule._id} className="capsule-item">
          <p className="capsule-content">{capsule.content}</p>
          <p className="capsule-date">{formatDate(capsule.createdAt)}</p>
        </div>
      ))}
    </div>
  );
}

export default CapsuleList;