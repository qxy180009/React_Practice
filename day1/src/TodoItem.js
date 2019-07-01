import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        if (nextProps.content !== this.props.content) {
            return true;
        }else{
            return false;
        }
    }

    render(){
        console.log("Child render");
        
        const {content} = this.props;
        // JSX -> createElement -> 虚拟DOM(JS对象) -> 真实的DOM对象
        // return <div><span>item</span></div>
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    componentDidMount(){
        
    }

    // 传入的props改变时。。。
    // 父组件的render函数被重新执行时, 子组件的这个生命周期函数就会被执行
    // 组件第一次存在时, 不会被执行
    // componentWillReceiveProps(){
    //     console.log("child-componentWillReceiveProps");
        
    // }

    handleClick(){
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

// 对传入参数的校验s
TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}


export default TodoItem;