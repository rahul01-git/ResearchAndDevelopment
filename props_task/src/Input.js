import { Component } from "react";
import './input.css'
import List from "./List";

class Input extends Component {
    constructor() {
        super()
        this.state = { todos : [], btnClicked: false }
        this.input= '';
    }
    handleChange = event => {
        this.input = event.target.value;
    }

    handleClick = () =>{
        this.setState({ btnClicked: true ,todos: [...this.state.todos,this.input]})
    }
    render() {
        return (
            <div className="App">
                <input type="text" id="txt" autoFocus onChange={this.handleChange} placeholder="enter todo"/>
                <button onClick={this.handleClick}>Save</button>
                <List todos={this.state.todos} btnClicked={this.state.btnClicked}/>
            </div>
        )
    }
}

export default Input;