import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios'
import './style.css'

class TodoList extends Component{  
  constructor(props){
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}

	// 当组件的state或者props发生改变时, render函数就会从新执行
	render(){
		console.log("render");
		
		return(
			<Fragment>
				<div>
					<label htmlFor="insertArea">输入内容</label>
					<input 
						id="insertArea"
						className='input'
						value={this.state.inputValue}
						onChange={this.handleInputChange}
						/>
						<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>
			  {this.getTodoItem()}
				</ul>
			</Fragment>
		)
	}

	componentDidMount(){
		axios.get('/api/todolist')
		.then(() => {alert('succ')})
		.catch(()=>{alert('err')})
	}

	getTodoItem(){
		return this.state.list.map((item, index) => {
			return (
				<TodoItem 
					key={item}
					content={item}
					index={index}
					deleteItem={this.handleItemDelete}></TodoItem>
			)
		})
	}
	
	handleInputChange(e){
		const value = e.target.value;
		this.setState(() => ({
			inputValue: value
		}));
	}
	
	handleBtnClick(){
		// preState 函数执行前的状态
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}));
	}
	
	handleItemDelete(index){
		// immutable
		// state 不允许我们做任何的改变
		this.setState((prevState) => {
			const list = [...prevState.list]
			list.splice(index, 1)
			return {list}
		})
	}
}

export default TodoList;