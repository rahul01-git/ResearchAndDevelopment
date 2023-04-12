import { Component } from "react";

class Button extends Component {

    constructor(){
        super()
        this.state= {color1:"red",color2:"green",color3:"blue",color4:"yellow",color5:"black"}
        this.changeBgColor = this.changeBgColor.bind(this)
    }

    changeBgColor(color){
       document.querySelector('body').style.backgroundColor = color;
    }
    render() {
        return (
            <>
                <button onClick={()=>this.changeBgColor(this.state.color1)}>{this.state.color1}</button>
                <button onClick={()=>this.changeBgColor(this.state.color2)}>{this.state.color2}</button>
                <button onClick={()=>this.changeBgColor(this.state.color3)}>{this.state.color3}</button>
                <button onClick={()=>this.changeBgColor(this.state.color4)}>{this.state.color4}</button>
                <button onClick={()=>this.changeBgColor(this.state.color5)}>{this.state.color5}</button>
            </>
        )
    }
}

export default Button;