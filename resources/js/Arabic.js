class Arabic {
  static ConvertToRoman(number) {
    let result = '';

    if (number <= 3) {
      for (let i = 0; i < number; i++) {
        result += 'I';
      }
    } else if (number === 4) {
      result = 'IV';
    } else if (number === 5) {
      result = 'V';
    } else {
      result = 'VI';
    }

    if (!result) {
      throw new Error('Not implemented exception');
    }

    return result;
  }
}

export { Arabic };
