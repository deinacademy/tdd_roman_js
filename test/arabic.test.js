import { Arabic } from '../resources/js/Arabic';

describe('Arabic', () => {
  let convert;

  beforeEach(() => {
    //Arrange
    convert = Arabic.ConvertToRoman;
  });

  test('When Convert 1, should return I', () => {
    //Arrange
    const expected = 'I';
    //Act
    const actual = expect(convert(1));
    //Assert
    actual.toBe(expected);
  });

  test('When Convert 2, should return II', () => {
    //Arrange
    const expected = 'II';
    //Act
    const actual = expect(convert(2));
    //Assert
    actual.toBe(expected);
  });
});
