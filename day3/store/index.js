import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

// 利用redux-saga创建一个中间件
const sagaMiddleware = createSagaMiddleware();
// dev-tools是用来调试store的中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// 传入创建的中间件
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// redux-thunk的引入使得action的返回可以不是一个对象而是一个函数
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas);

export default store;