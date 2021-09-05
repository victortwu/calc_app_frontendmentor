import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

const dotRef = React.useRef()
const displayRef = React.useRef()

const [numberButtons, setNumberButtons] = useState([])
const [previousNumber, setPreviousNumber] = useState('')
const [currentNumber, setCurrentNumber] = useState('')
const [operation, setOperation] = useState('')
const [dotOK, setDotOK] = useState(true)

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


      const calculate = (nextOperator) => {
        let calculation

        const numOne = parseFloat(previousNumber)
        const numTwo = parseFloat(currentNumber)

        if (isNaN(numOne) || isNaN(numTwo)) return

        switch(operation) {

          case '+':
            calculation = numOne + numTwo
          break

          case '-':
            calculation = numOne - numTwo
          break

          case 'x':
            calculation = numOne * numTwo
          break

          case '/':
            calculation = numOne / numTwo
          break

          default:
            return
        }
        setCurrentNumber('')
        setPreviousNumber(calculation.toString() + nextOperator)
        setOperation(nextOperator)
        setDotOK(true)
        if(nextOperator === '') {
          setCurrentNumber(calculation.toString())
          setPreviousNumber('')
        }
      }


      const displayChar =(char)=> {
        if(char === ' . ') return
        setCurrentNumber(currentNumber + char)
      }


      const selectOperation = (operator) => {
        setOperation(operator)
        if (currentNumber === '') return
        if (previousNumber !== '') {
          calculate(operator)
        }
        setPreviousNumber(currentNumber + operator)
        setDotOK(true)
        setCurrentNumber('')
        if(currentNumber && previousNumber) {
          calculate(operator)
        }
      }

      const equals = () => {
        calculate('')
        
      }


      const backSpace = () => {
        const content = displayRef.current.innerHTML

        setCurrentNumber(currentNumber.slice(0, -1))
        if(!currentNumber) {
          const deletingPrevNum = previousNumber.slice(0, -1)
          setCurrentNumber(deletingPrevNum)
          setPreviousNumber('')
        }
        if (!content.includes('.')) {
          setDotOK(true)
        }
      }


      const reset = () => {
        setPreviousNumber('')
        setCurrentNumber('')
        setOperation('')
        setDotOK(true)
      }


useEffect(() => {
  addNumberButtons()
  setNumberButtons(tempNumBtnArr)
}, [])


  return (
    <main>
        <div className='calculatorContainer'>
          <header>
          <span className='title'>calc</span>
          <div className='themeSwitch'>theme switch</div>
          </header>

          <div ref={displayRef} className='display'>
            {previousNumber}{currentNumber}
          </div>

          <div className='keyPad'>
            <div id='del' onClick={()=> backSpace()}>DEL</div>
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
            <button
              id='dot'
              ref={dotRef}
              onClick={() => {
                displayChar(dotRef.current.innerHTML)
                setDotOK(false)
              }}
              >
            {
              dotOK ? '.' : ' . '
            }
            </button>
            <button id='plus' onClick={()=> selectOperation('+')}>+</button>
            <button id='minus' onClick={()=> selectOperation('-')}>-</button>
            <button id='times' onClick={()=> selectOperation('x')}>x</button>
            <button id='divide' onClick={()=> selectOperation('/')}>/</button>
            <div id='reset' onClick={()=> reset()}>RESET</div>
            <div id='equals' onClick={()=> equals()}>=</div>
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
