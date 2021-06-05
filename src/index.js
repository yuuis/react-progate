import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
// <App /> はコンポーネント名(App.jsのこと)
// id:rootは、index.html内のid:rootのところに入れてね、ということ


// 表示の流れ
// - App.js → index.js → index.html というふうに変換されていく
