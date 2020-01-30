const Roman = require('./Roman');

class Arabic {
  static ConvertToRoman(number) {
    const hundreds = parseInt((number / 100) % 10);
    const tens = parseInt((number / 10) % 10);
    const ones = parseInt((number / 1) % 10);

    let result = '';
    result += this.PlaceValues(hundreds, Roman['hundreds']);
    result += this.PlaceValues(tens, Roman['tens']);
    result += this.PlaceValues(ones, Roman['ones']);

    if (!result) {
      throw new Error('Not implemented exception');
    }

    return result;
  }

  static PlaceValues(number, symbols) {
    if (number <= 3) {
      return this.RepeatLiteral(number, symbols.unum);
    }

    if (number === 4) {
      return `${symbols.unum}${symbols.quinque}`;
    }

    if (number === 5) {
      return symbols.quinque;
    }

    if (6 <= number && number <= 8) {
      return `${symbols.quinque}${this.RepeatLiteral(number - 5, symbols.unum)}`;
    }

    /* istanbul ignore else*/
    if (number === 9) {
      return `${symbols.unum}${symbols.decem}`;
    }
  }

  static RepeatLiteral(times, symbol) {
    let result = '';
    for (let i = 0; i < times; i++) {
      result += symbol;
    }
    return result;
  }
}

module.exports = Arabic;
