const c1 = {
    numBtnBgLightGray: '#eae3db',
    numBtnBorderGray: '#b5a499',
    numBtnFontGray: '#484b58',
    resetDelBgGray: '#647299',
    resetDelBorderGray: '#414d74',
    equalsBgRed: '#d13f30',
    equalsBorderRed: '#942316',
    resEqFontWhite: '#fafbff',
    titleFontWhite: '#feffff',
    displayBgBlack: '#181f32',
    displayFontWhite: '#fdfefe',
    keypadBgGray: '#252d45',
    bodyBgGray: '#3b4664',
}

const c2 = {
    numBtnBgWhite: '#e5e4e0',
    numBtnBorderGray: '#a69e91',
    numBtnFontBlack: '#31302b',
    resetDelBgAqua: '#388187',
    resetDelBorderSeaGreen: '#225d65',
    equalsBgOrange: '#c85401',
    equalsBorderRed: '#8d3700',
    resEqFontWhite: '#eef5f5',
    titleFontBlack: '#36362b',
    displayBgWhite: '#eeeeee',
    displayFontBlack: '#37372e',
    keypadBgGray: '#d3cdcd',
    bodyBgGray: '#e6e6e6',
}

const c3 = {
    numBtnBgLightGray: '#eae3db',
    numBtnBorderGray: '#b5a499',
    numBtnFontGray: '#484b58',
    resetDelBgGray: '#647299',
    resetDelBorderGray: '#414d74',
    equalsBgRed: '#d13f30',
    equalsBorderRed: '#942316',
    resEqFontWhite: '#fafbff',
    titleFontWhite: '#feffff',
    displayBgBlack: '#181f32',
    displayFontWhite: '#fdfefe',
    keypadBgGray: '#252d45',
    bodyBgGray: '#3b4664',
}



export const createThemes = () => {
  return {
    one : [
      {//title
        color: c1.titleFontWhite,
      },
      {//toggleSlider
        backgroundColor: c1.equalsBgRed,
        color: c1.titleFontWhite,
      },
      {//main
        backgroundColor: c1.bodyBgGray,
        transition: '.4s'
      },
      {//display
        backgroundColor: c1.displayBgBlack,
        color: c1.displayFontWhite,
      },
      {//kepad
        backgroundColor: c1.keypadBgGray,
      },
      {//numberButtons
        backgroundColor: c1.numBtnBgLightGray,
        color: c1.numBtnFontGray,
        borderBottom: `solid .3rem ${c1.numBtnBorderGray}`
      },
      {//reset, delete
        backgroundColor: c1.resetDelBgGray,
        color: c1.resEqFontWhite,
        borderBottom: `solid .3rem ${c1.resetDelBorderGray}`
      },
      {//equals
        backgroundColor: c1.equalsBgRed,
        color: c1.resEqFontWhite,
        borderBottom: `solid .3rem ${c1.equalsBorderRed}`
      },
    ],
    two : [
      {//title
        color: c2.titleFontBlack,
      },
      {//toggleSlider
        backgroundColor: c2.equalsBgOrange,
        color: c2.titleFontBlack,
      },
      {//main
        backgroundColor: c2.bodyBgGray,
        transition: '.4s'
      },
      {//display
        backgroundColor: c2.displayBgWhite,
        color: c2.displayFontBlack,
      },
      {//kepad
        backgroundColor: c2.keypadBgGray,
      },
      {//numberButtons
        backgroundColor: c2.numBtnBgWhite,
        color: c2.numBtnFontBlack,
        borderBottom: `solid .3rem ${c2.numBtnBorderGray}`
      },
      {//reset, delete
        backgroundColor: c2.resetDelBgAqua,
        color: c2.resEqFontWhite,
        borderBottom: `solid .3rem ${c2.resetDelBorderSeaGreen}`
      },
      {//equals
        backgroundColor: c2.equalsBgOrange,
        color: c2.resEqFontWhite,
        borderBottom: `solid .3rem ${c2.equalsBorderRed}`
      },
    ],
    three : [
      {//title
        color: '',
      },
      {//toggleSlider
        backgroundColor: '',
        color: '',
      },
      {//main
        backgroundColor: '',
      },
      {//display
        backgroundColor: '',
        color: '',
      },
      {//kepad
        backgroundColor: '',
      },
      {//numberButtons
        backgroundColor: '',
        color: '',
        borderBottom: 'solid .3rem '
      },
      {//reset, delete
        backgroundColor: '',
        color: '',
        borderBottom: 'solid .3rem '
      },
      {//equals
        backgroundColor: '',
        color: '',
        borderBottom: 'solid .3rem '
      },
    ],
  }
}
