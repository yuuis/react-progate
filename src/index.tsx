import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './components/App';

const rootElement = document.getElementById('root');
rootElement && ReactDOM.render(<App />, rootElement);

// id:rootは、index.html内のid:rootのところに入れてね、ということ


// 表示の流れ
// - App.tsx → index.js → index.html というふうに変換されていく
