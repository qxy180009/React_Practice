import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './store';

// const App = (
//   // Provider 时react-redux中的第一个API
//   // Provider 连接了store, provider中的所有组件都可以使用store
  
// )

ReactDOM.render(
  <Provider store = {store}>
    <TodoList/>
  </Provider>, document.getElementById('root')
);