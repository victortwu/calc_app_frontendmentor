import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

const [numberButtons, setNumberButtons] = useState([])
// const [previousNumber, setPreviousNumber] = useState('')
const [currentNumber, setCurrentNumber] = useState('')
// const [operation, setOperation] = useState('')

let tempNumBtnArr = []

const addNumberButtons = () => {
  let btnNode
  for (let i = 0; i < 10; i++) {
    if(i === 9) {
      btnNode = {id: `btn0`, value: `0`}
    } else {
      btnNode = {id: `btn${i + 1}`, value: `${i + 1}`}
    }
    tempNumBtnArr.push(btnNode)
  }
}

const displayChar =(char)=> {
  setCurrentNumber(char)
}

useEffect(() => {
  addNumberButtons()
  setNumberButtons(tempNumBtnArr)
}, [])

console.log(numberButtons)
  return (
    <main>
        <div className='calculatorContainer'>
          <header>
          <span className='title'>calc</span>
          <div className='themeSwitch'>theme switch</div>
          </header>

          <div className='display'>
            {currentNumber}
          </div>

          <div className='keyPad'>
            <div id='del'>DEL</div>
            {
              numberButtons.map(btn=> {
                return <button
                          key={btn.id}
                          id={btn.id}
                          onClick={()=> displayChar(btn.value)}
                        >
                        {btn.value}
                        </button>
              })
            }
            <button id='dot'>.</button>
            <button id='plus'>+</button>
            <button id='minus'>-</button>
            <button id='times'>x</button>
            <button id='divide'>/</button>
            <div id='reset'>RESET</div>
            <div id='equals'>=</div>
          </div>


        </div>
        <footer>
            <div className="attribution">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="none">Frontend Mentor</a>.
              Coded by <a href="#">Victor Twu</a>.
            </div>
        </footer>
    </main>
  );
}

export default App;
