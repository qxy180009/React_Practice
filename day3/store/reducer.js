import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

// state: store中存储的数据
// reducer可以接受state, 但是不能修改state

// reducer必须是纯函数, 即给定固定的输入就会有固定的输出, 不会有任何副作用
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    // 对state做一个深拷贝
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === INIT_LIST_ACTION) {
    // 将从ajax中获取的数据渲染到页面上去
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  if(action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    // the inputValue has been changed from the above action;
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}