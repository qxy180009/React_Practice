import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes';
import {initListAction} from './actionCreators';
import axios from 'axios'

function* getInitList() {
  try{
    const res = yield axios.get('/list.json');
    const action = initListAction(res.data);
    // yield表示等action执行结束之后再再执行下面代码
    // 将action发送给store
    yield put(action);
  } catch(e) {
    console.log("网络请求失败");
    
  }
}

// generator函数
function* mySaga() {
  // takeEvery作用: 接收到GET_INIT_LIST action之后执行getInitList方法
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;