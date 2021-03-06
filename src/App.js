import React, { useState, useEffect } from 'react'
import { createThemes } from './styles/themes.js'
import './App.css';

function App() {

const theme = createThemes()
const dotRef = React.useRef()
const displayRef = React.useRef('')

const [numberButtons, setNumberButtons] = useState([])
const [previousNumber, setPreviousNumber] = useState('')
const [currentNumber, setCurrentNumber] = useState('')
const [operation, setOperation] = useState('')
const [dotOK, setDotOK] = useState(true)
const [style, setStyle] = useState([])

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
  setStyle(theme.one)
}, [])

const htmlLength = !displayRef.current.innerHTML
                  ? false
                  : displayRef.current.innerHTML.length

const dynamicFontSize = (htmlLength && htmlLength > 12)
                        ? 'shrinkFontDisplay'
                        : 'displayP'

return (
    <main style={style[2]} className='parent'>
        <div className='calculatorContainer'>

        <header style={style[0]}>
            <span className='title'>calc</span>
            <div className='switchLabel'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <div className='themeSwitch'>
                  THEME
              <div style={style[1]} className='slider'>
                <div style={style[8]} className='sliderSwitch'/>
                <button style={style[9]} onClick={()=>setStyle(theme.one)}>{''}</button>
                <button style={style[9]} onClick={()=>setStyle(theme.two)}>{''}</button>
                <button style={style[9]} onClick={()=>setStyle(theme.three)}>{''}</button>
              </div>
            </div>
        </header>

          <div style={style[3]} className='display'>
            <p ref={displayRef} className={dynamicFontSize}>{previousNumber}{currentNumber}</p>
          </div>

          <div style={style[4]} className='keyPad'>
            <div style={style[6]} id='del' onClick={()=> backSpace()}>DEL</div>
            {
              numberButtons.map(btn=> {
                return <button style={style[5]}
                          key={btn.id}
                          id={btn.id}
                          onClick={()=> displayChar(btn.value)}
                        >
                        {btn.value}
                        </button>
              })
            }
            <button
              style={style[5]}
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
            <button style={style[5]} id='plus' onClick={()=> selectOperation('+')}>+</button>
            <button style={style[5]} id='minus' onClick={()=> selectOperation('-')}>-</button>
            <button style={style[5]} id='times' onClick={()=> selectOperation('x')}>x</button>
            <button style={style[5]} id='divide' onClick={()=> selectOperation('/')}>/</button>
            <div style={style[6]} id='reset' onClick={()=> reset()}>RESET</div>
            <div style={style[7]} id='equals' onClick={()=> equals()}>=</div>
          </div>


        </div>
        <footer>
            <div className="attribution">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="none">Frontend Mentor</a>.
              Coded by <a href="https://victor-twu-portfolio.herokuapp.com/" target="none">Victor Twu</a>.
            </div>
        </footer>
    </main>
  );
}

export default App;
