const Roman = require('./Roman')

class Arabic {
  static convertToRoman(value) {
    if (value < 1 || !Number.isInteger(value)) {
      throw new Error('Value is not a positive integer number')
    }

    let length = value.toString().length
    let result = [...`${value}`].reduce((accumulator, number, index) => {
      return `${accumulator}${this.placeValues(parseInt(number), length - index)}`
    }, '')

    if (!result || value > 3999) {
      throw new Error("Value can't be converted")
    }

    return result
  }

  static placeValues(number, place) {
    if (number <= 3) {
      return this.repeatLiteral(number, Roman[place].unum)
    }

    if (number === 4) {
      return `${Roman[place].unum}${Roman[place].quinque}`
    }

    if (number === 5) {
      return Roman[place].quinque
    }

    if (6 <= number && number <= 8) {
      return `${Roman[place].quinque}${this.repeatLiteral(number - 5, Roman[place].unum)}`
    }

    /* istanbul ignore else*/
    if (number === 9) {
      return `${Roman[place].unum}${Roman[place + 1].unum}`
    }
  }

  static repeatLiteral(times, symbol) {
    let result = ''
    for (let i = 0; i < times; i++) {
      result += symbol
    }
    return result
  }
}

module.exports = Arabic
