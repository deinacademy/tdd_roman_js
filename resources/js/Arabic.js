class Arabic {
  static ConvertToRoman(number) {
    let result = '';
    for (let i = 0; i < number; i++) {
      result += 'I';
    }

    if (!result) {
      throw new Error('Not implemented exception');
    }

    return result;
  }
}

export { Arabic };
