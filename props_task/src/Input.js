import { Component } from "react";
import './input.css'
import List from "./List";

class Input extends Component {
    constructor() {
        super()
        this.state = { input: "", btnClicked: false }
        this.todos = []
    }
    handleChange = event => {
        this.setState({ input: event.target.value });
    }

    handleClick = () =>{
        this.todos.push(this.state.input)
        this.setState({ btnClicked: true })
    }
    render() {
        return (
            <div className="App">
                <input type="text" id="txt" autoFocus onChange={this.handleChange} placeholder="enter todo"/>
                <button onClick={this.handleClick}>Save</button>
                <List todos={this.todos} btnClicked={this.state.btnClicked}/>
            </div>
        )
    }
}

export default Input;