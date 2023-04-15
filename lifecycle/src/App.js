import { Component } from 'react'

class App extends Component {
    constructor() {
        super();
        this.state ={count:0}
        console.log("constructor")
    }

    componentDidMount() {
        console.log("component did mount")
    }

    componentDidUpdate() {
        console.log("component did update")
    }

    render() {
        console.log("render")
        return (
            <button onClick={() => this.setState({count:this.state.count+1})}>{this.props.title} - {this.state.count}</button>
        )
    }
}

export default App;