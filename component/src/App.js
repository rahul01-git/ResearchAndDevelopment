import React from "react";
class App extends React.Component{

    constructor(){
        super()

       this.state = {count:0,color:'red'}

        this.changeColor = this.changeColor.bind(this)
        this.increaseCount = this.increaseCount.bind(this)
    }

    increaseCount(){
        this.setState({count:this.state.count+1})
    }

    changeColor(){
        this.setState({color:"yellow"})
    }

    render(){
        return(
            <>
            <h2>{this.state.count}</h2>
            <h2>{this.state.color}</h2>
            <button onClick={this.increaseCount}>increase count</button>
            <button onClick={this.changeColor}>change color</button>
            </>
        )
    }
}

export default App;