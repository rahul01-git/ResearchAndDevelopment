import { Component } from 'react'

class List extends Component{
    render() {
        return (
            <ul>
                {this.props.btnClicked && this.props.todos.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        )
    }
}

export default List;