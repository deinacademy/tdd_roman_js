class Arabic {
  static ConvertToRoman(number) {
    const tens = parseInt((number / 10) % 10);
    const ones = parseInt((number / 1) % 10);

    let result = '';
    result += this.PlaceValues(tens, ['X', 'L', 'C']);
    result += this.PlaceValues(ones, ['I', 'V', 'X']);

    if (!result) {
      throw new Error('Not implemented exception');
    }

    return result;
  }

  static PlaceValues(number, symbols) {
    if (number <= 3) {
      return this.RepeatLiteral(number, symbols[0]);
    }

    if (number === 4) {
      return `${symbols[0]}${symbols[1]}`;
    }

    if (number === 5) {
      return symbols[1];
    }

    if (6 <= number && number <= 8) {
      return `${symbols[1]}${this.RepeatLiteral(number - 5, symbols[0])}`;
    }

    if (number === 9) {
      return `${symbols[0]}${symbols[2]}`;
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
