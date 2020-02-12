const Roman = require('./Roman')

class Arabic {
  static convertToRoman(value) {
    if (value < 1 || !Number.isInteger(value)) {
      throw new Error('Value is not a positive integer number')
    }

    let result = ''
    let length = value.toString().length
    ;[...('' + value)].forEach((number, index) => {
      result += this.placeValues(parseInt(number), length - index)
    })

    if (!result || value > 1000) {
      throw new Error("Value can't be converted")
    }

    return result
  }

  static placeValues(number, place) {
    console.log(number + ' - ' + typeof number + ' - ' + JSON.stringify(place))

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
