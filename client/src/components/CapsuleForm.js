import React, { useState } from 'react';

function CapsuleForm({ onAddCapsule }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表单默认的页面刷新行为
    if (!content.trim()) {
      alert('想法内容不能为空！');
      return;
    }
    onAddCapsule(content);
    setContent(''); // 提交后清空输入框
  };

  return (
    <form onSubmit={handleSubmit} className="capsule-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="在此刻，记下所想..."
        rows="4"
      />
      <button type="submit">封存想法</button>
    </form>
  );
}

export default CapsuleForm;
