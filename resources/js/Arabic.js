class Arabic {
  static ConvertToRoman(number) {
    let result = '';

    if (number <= 3) {
      result = this.RepeatLiteral(number);
    } else if (number === 4) {
      result = 'IV';
    } else if (number === 5) {
      result = 'V';
    } else if (6 <= number && number <= 8) {
      result = 'V';
      result += this.RepeatLiteral(number - 5);
    } else if (number === 9) {
      result = 'IX';
    } else if (number === 10) {
      result = 'X';
    } else {
      result = 'XI';
    }

    if (!result) {
      throw new Error('Not implemented exception');
    }

    return result;
  }

  static RepeatLiteral(times) {
    let result = '';
    for (let i = 0; i < times; i++) {
      result += 'I';
    }
    return result;
  }
}

module.exports = Arabic;
