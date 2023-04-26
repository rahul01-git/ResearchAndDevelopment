import '../assets/button.css'
import React, { useState } from 'react'

export default function Button({ screen, setScreen }) {
    const [preValue, setPreValue] = useState(0)
    const [haveDot, setHaveDot] = useState(false)
    const [operatorVal, setOperatorVal] = useState('')


    const handleNumber = (e) => {
        if (e.target.innerText === '.' && haveDot) {
            return;
        } else if (e.target.innerText === '.') {
            setHaveDot(true)
        }
        setScreen(screen + e.target.innerText);
    };

    const handleOperator = (e) => {
        if(screen == '') return
        setPreValue(parseFloat(screen));
        setScreen('');
        setOperatorVal(e.target.innerText);
    }
    const handleEqual = () => {
        calculateResult()
        setOperatorVal('')
    }

    const handleToggle = () => {
        (screen == '') || setScreen(parseFloat(screen) * -1)
    }

    const calculateResult = () => {
        (screen && preValue)
        switch (operatorVal) {
            case '+':
                setPreValue(preValue + parseFloat(screen))
                setScreen(preValue + parseFloat(screen))
                break
            case '-':
                setPreValue(preValue - parseFloat(screen))
                setScreen(preValue - parseFloat(screen))
                break
            case 'x':
                setPreValue(preValue * parseFloat(screen))
                setScreen(preValue * parseFloat(screen))
                break
            case '/':
                setPreValue(preValue / parseFloat(screen))
                setScreen(preValue / parseFloat(screen))
                break
            default:
                console.log('default')
                break
        }
    }

    const handlePercentage = () => {
        (screen == '') ||  setScreen((parseFloat(screen)/100))
    }

    const handleClear = () => {
        setScreen('')
        setPreValue(0)
        setOperatorVal('')
        setHaveDot(false)
    }
    return (
        <div className="buttons">

            <button className="btn" onClick={handleClear}>AC</button>
            <button className="btn" onClick={handleToggle}>+/-</button>
            <button className="btn" onClick={handlePercentage}>%</button>
            <button className="btn operator" onClick={handleOperator}>/</button>
            <button className="btn number" onClick={handleNumber}>7</button>
            <button className="btn number" onClick={handleNumber}>8</button>
            <button className="btn number" onClick={handleNumber}>9</button>
            <button className="btn operator" onClick={handleOperator}>x</button>
            <button className="btn number" onClick={handleNumber}>4</button>
            <button className="btn number" onClick={handleNumber}>5</button>
            <button className="btn number" onClick={handleNumber}>6</button>
            <button className="btn operator" onClick={handleOperator}>-</button>
            <button className="btn number" onClick={handleNumber}>1</button>
            <button className="btn number" onClick={handleNumber}>2</button>
            <button className="btn number" onClick={handleNumber}>3</button>
            <button className="btn operator" onClick={handleOperator}>+</button>
            <button className="btn number lrf" onClick={handleNumber}>0</button>
            <button className="btn number dot" onClick={handleNumber}>.</button>
            <button className="btn equal" onClick={handleEqual}>=</button>
        </div>
    )
}
