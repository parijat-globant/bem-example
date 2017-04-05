import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu/Menu';
import './index.css';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {createStore} from 'redux';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  	<Menu/>
  </Provider>,
  document.getElementById('root')
);
