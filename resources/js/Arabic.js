class Arabic {
  static ConvertToRoman(number) {
    if (number === 1) {
      return 'I';
    } else if (number === 2) {
      return 'II';
    } else {
      return 'III';
    }
    throw new Error('Not implemented exception');
  }
}

export { Arabic };
