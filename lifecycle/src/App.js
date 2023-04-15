import { Component } from 'react'

class App extends Component {
    constructor() {
        super();
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
            <h1>hy</h1>
        )
    }
}

export default App;