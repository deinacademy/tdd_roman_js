const Roman = require('./Roman')

class Arabic {
  static convertToRoman(number) {
    if (!Number.isInteger(number)) {
      throw new Error('Value is not a integer number')
    }

    const hundreds = parseInt((number / 100) % 10)
    const tens = parseInt((number / 10) % 10)
    const ones = parseInt((number / 1) % 10)

    let result = ''
    result += this.placeValues(hundreds, Roman['hundreds'])
    result += this.placeValues(tens, Roman['tens'])
    result += this.placeValues(ones, Roman['ones'])

    if (!result) {
      throw new Error("Value can't be converted")
    }

    return result
  }

  static placeValues(number, symbols) {
    if (number <= 3) {
      return this.repeatLiteral(number, symbols.unum)
    }

    if (number === 4) {
      return `${symbols.unum}${symbols.quinque}`
    }

    if (number === 5) {
      return symbols.quinque
    }

    if (6 <= number && number <= 8) {
      return `${symbols.quinque}${this.repeatLiteral(number - 5, symbols.unum)}`
    }

    /* istanbul ignore else*/
    if (number === 9) {
      return `${symbols.unum}${symbols.decem}`
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
