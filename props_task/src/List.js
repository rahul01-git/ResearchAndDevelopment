import { Component } from 'react'

class List extends Component{
    render() {
        return (
            <ul>
                {this.props.btnClicked && this.props.todos.map((todo,index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        )
    }
}

export default List;