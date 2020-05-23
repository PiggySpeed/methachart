import './styles/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/main/main';

ReactDOM.render(<Main />, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
