import React from 'react';
import 'antd/dist/antd.css'
import {Button,List, Input} from 'antd'

// 无状态组件(只有一个render, 没有生命周期函数, 就是一个纯函数)
const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft:'10px'}}>
      <div>
        <Input 
          value={props.inputValue} 
          placeholder="todo info" 
          style={{width: '300px', marginRight:"10px"}}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{width: '350px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>
        )}
      />
    </div>
  )
}


// class TodoListUI extends Component {
  // render(){
  //   return (
  //     <div style={{marginTop: '10px', marginLeft:'10px'}}>
  //       <div>
  //         <Input 
  //           value={this.props.inputValue} 
  //           placeholder="todo info" 
  //           style={{width: '300px', marginRight:"10px"}}
  //           onChange={this.props.handleInputChange}
  //         />
  //         <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
  //       </div>
  //       <List
  //         style={{width: '350px'}}
  //         bordered
  //         dataSource={this.props.list}
  //         renderItem={(item, index) => (
  //           <List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>
  //         )}
  //       />
  //     </div>
  //   )
  // }
// }

export default TodoListUI;