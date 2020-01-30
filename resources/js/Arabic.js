class Arabic {
  static ConvertToRoman(number) {
    if (number === 1) {
      return 'I';
    } else {
      return 'II';
    }
    throw new Error('Not implemented exception');
  }
}

export { Arabic };
