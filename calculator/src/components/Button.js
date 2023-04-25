import '../assets/button.css'
export default function Button({screen,setScreen}) {
    const handleClick = (e) =>{
        setScreen(e.target.name)
    }
  return (
    <div className='btns'>
        <button onClick={handleClick} className="btn">AC</button>
        <button onClick={handleClick} className="btn">+/-</button>
        <button onClick={handleClick} className="btn">%</button>
        <button name='/' onClick={handleClick} className="btn op">&divide;</button>
        <button name='7' onClick={handleClick} className="btn">7</button>
        <button name='8' onClick={handleClick} className="btn">8</button>
        <button name='9' onClick={handleClick} className="btn">9</button>
        <button name='x' onClick={handleClick} className="btn op">x</button>
        <button name='4' onClick={handleClick} className="btn">4</button>
        <button name='5' onClick={handleClick} className="btn">5</button>
        <button name='6' onClick={handleClick} className="btn">6</button>
        <button name='-' onClick={handleClick} className="btn op">-</button>
        <button name='1' onClick={handleClick} className="btn">1</button>
        <button name='2' onClick={handleClick} className="btn">2</button>
        <button name='3' onClick={handleClick} className="btn">3</button>
        <button name='+' onClick={handleClick} className="btn op">+</button>
        <button name='0' onClick={handleClick} className="btn lrf">0</button>
        <button name='.' onClick={handleClick} className="btn">.</button>
        <button name='=' onClick={handleClick} className="btn op">=</button>
    </div>
  )
}
