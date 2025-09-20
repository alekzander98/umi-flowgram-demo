import React, { useState, useRef, useEffect } from 'react';
import './index.less';

const KnowHow: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 模拟会话历史数据
  const chatHistory = [
    { id: 1, title: '如何使用React Hooks', time: '2024-01-15' },
    { id: 2, title: 'TypeScript最佳实践', time: '2024-01-14' },
    { id: 3, title: 'CSS Grid布局详解', time: '2024-01-13' },
    { id: 4, title: 'JavaScript异步编程', time: '2024-01-12' },
    { id: 5, title: 'Node.js性能优化', time: '2024-01-11' },
  ];

  // 模拟卡片模板数据
  const cardTemplates = [
    { id: 1, title: '快速开始', description: '了解基础概念和快速上手指南' },
    { id: 2, title: '最佳实践', description: '学习行业标准和推荐做法' },
    { id: 3, title: '常见问题', description: '查看常见问题和解决方案' },
    { id: 4, title: '进阶教程', description: '深入学习高级功能和技巧' },
    { id: 5, title: '案例分析', description: '通过实际案例学习应用' },
    { id: 6, title: '工具推荐', description: '推荐实用的开发工具' },
  ];

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  // 自动调整textarea高度
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      const oldHeight = textarea.offsetHeight;
      const rect = textarea.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      textarea.style.height = 'auto';
      const newHeight = Math.max(120, textarea.scrollHeight);
      textarea.style.height = `${newHeight}px`;
      
      // 如果高度增加且输入框顶部可能超出可视区域，则调整滚动位置
      if (newHeight > oldHeight) {
        const heightDiff = newHeight - oldHeight;
        const topPosition = rect.top;
        
        // 如果输入框顶部距离视口顶部小于安全距离（100px），则向下滚动
        if (topPosition < 100) {
          const scrollAmount = Math.min(heightDiff, 100 - topPosition);
          window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
          });
        }
        // 如果输入框底部超出视口，则向上滚动保持底部可见
        else if (rect.bottom + heightDiff > viewportHeight - 50) {
          const scrollAmount = (rect.bottom + heightDiff) - (viewportHeight - 50);
          window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  return (
    <div className="knowhow-container">
      {/* 左侧边栏 */}
      <div className={`sidebar ${sidebarCollapsed ? 'hidden' : ''}`}>
        {/* 顶部功能按钮 */}
        <div className="sidebar-header">
          <button type="button" className="collapse-btn" onClick={toggleSidebar}>
            ←
          </button>
          <button type="button" className="new-chat-btn">
            新建对话
          </button>
        </div>

        {/* 会话历史记录 */}
        <div className="chat-history">
          <h3>会话历史</h3>
          <div className="history-list">
            {chatHistory.map((item) => (
              <div key={item.id} className="history-item">
                <div className="history-title">{item.title}</div>
                <div className="history-time">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 右侧内容区域 */}
      <div className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
        {/* 展开按钮 - 仅在边栏收起时显示 */}
        {sidebarCollapsed && (
          <button type="button" className="expand-btn" onClick={toggleSidebar}>
            →
          </button>
        )}
        <div className="content-wrapper">
          {/* 文本输入域 */}
          <div className="input-section">
            <textarea
              ref={textareaRef}
              className="main-input"
              placeholder="请输入您的问题或需求..."
              value={inputValue}
              onChange={handleInputChange}
              style={{ resize: 'none', overflow: 'hidden' }}
            />
          </div>

          {/* 卡片模板区域 */}
          <div className="templates-section">
            <h3>快速模板</h3>
            <div className="templates-grid">
              {cardTemplates.map((template) => (
                <div key={template.id} className="template-card">
                  <h4>{template.title}</h4>
                  <p>{template.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowHow;