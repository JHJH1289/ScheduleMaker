import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // 🔥 App 컴포넌트 불러오기

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);     // 🔥 App 컴포넌트를 root에 렌더링

export default App;