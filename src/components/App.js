import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// React.Componentを継承する
class App extends React.Component {
  render() {
    return (
      // 以下はJSX
      // returnで複数の要素を返せない
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

// React.Componentを継承したclassをexportする(大事)
export default App;
