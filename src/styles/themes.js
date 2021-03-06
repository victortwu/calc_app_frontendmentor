// color objects


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
    numBtnBgPurple: '#331b4d',
    numBtnBorderLightPurple: '#84209c',
    numBtnFontYellow: '#fee33b',
    resetDelBgPurple: '#56077c',
    resetDelBorderPurple: '#bf15f4',
    equalsBgNeonBlue: '#00decf',
    equalsBorderNeonBlue: '#00decf',
    resEqFontWhite: '#fff6ff',
    titleFontYellow: '#fee33b',
    displayBgDarkPurple: '#1e0836',
    displayFontYellow: '#fee33b',
    keypadBgDarkPurple: '#1e0836',
    bodyBgDark: '#17062a',
}



export const createThemes = () => {
  return {
    one : [
      {//title
        color: c1.titleFontWhite,
      },
      {//toggle slot
        backgroundColor: c1.keypadBgGray,
      },
      {//main
        backgroundColor: c1.bodyBgGray,
        transition: '.4s'
      },
      {//display
        backgroundColor: c1.displayBgBlack,
        color: c1.displayFontWhite,
        transition: '.4s'
      },
      {//kepad
        backgroundColor: c1.keypadBgGray,
        transition: '.4s'
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
      {//themeSwitch
        backgroundColor: c1.equalsBgRed,
        left: '.2rem'
      },
    ],
    two : [
      {//title
        color: c2.titleFontBlack,
      },
      {//toggle slot
        backgroundColor: c2.keypadBgGray,
      },
      {//main
        backgroundColor: c2.bodyBgGray,
        transition: '.4s'
      },
      {//display
        backgroundColor: c2.displayBgWhite,
        color: c2.displayFontBlack,
        transition: '.4s'
      },
      {//kepad
        backgroundColor: c2.keypadBgGray,
        transition: '.4s'
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
      {//themeSwitch
        backgroundColor: c2.equalsBgOrange,
        left: '1.4rem'
      },
    ],
    three : [
      {//title
        color: c3.titleFontYellow,
      },
      {//toggle slot
        backgroundColor: c3.keypadBgDarkPurple,
      },
      {//main
        backgroundColor: c3.bodyBgDark,
        transition: '.4s'
      },
      {//display
        backgroundColor: c3.displayBgDarkPurple,
        color: c3.titleFontYellow,
        transition: '.4s'
      },
      {//kepad
        backgroundColor: c3.keypadBgDarkPurple,
        transition: '.4s'
      },
      {//numberButtons
        backgroundColor: c3.numBtnBgPurple,
        color: c3.numBtnFontYellow,
        borderBottom: `solid .3rem ${c3.numBtnBorderLightPurple}`
      },
      {//reset, delete
        backgroundColor: c3.resetDelBgPurple,
        color: c3.resEqFontWhite,
        borderBottom: `solid .3rem ${c3.resetDelBorderPurple}`
      },
      {//equals
        backgroundColor: c3.equalsBgNeonBlue,
        color: '#003f40',
        borderBottom: `solid .3rem #7af1ef`
      },
      {//themeSwitch
        backgroundColor: c3.equalsBgNeonBlue,
        left: '2.5rem'
      },
    ],
  }
}
