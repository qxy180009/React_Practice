import React from 'react'
import {connect} from 'react-redux';

// TodoList是一个UI组件, 无状态组件
const TodoList = (props) => {
  // 结构赋值
  const {changeInputValue, inputValue, handleClick, list}  = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue}/>
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

// class TodoList extends Component {

//   render() {
    
//   }
// }

// TodoList和store连接的规则
// 将store中的inputValue映射到TodoList中的组件中去(props)
const mapStateToProps = (state) => {
  return {
    // input是组件中的内容,state.inputValue是store中的内容
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch, (挂载到) props； 于是可以通过props调用Dispatch方法
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue (e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    },

    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    }
  }
}

// 使TodoList组件和store做连接

// connect将TodoList这个UI组件 和响应的链接规则组合成了一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);