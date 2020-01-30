import { Arabic } from '../resources/js/Arabic';

describe('Arabic', () => {
  let convert;

  beforeEach(() => {
    //Arrange
    convert = Arabic.ConvertToRoman;
  });

  const testCases = [
    {
      number: 1,
      result: 'I',
    },
    {
      number: 2,
      result: 'II',
    },
  ];

  testCases.forEach((value) => {
    test(`When Convert ${value.number}, should return ${value.result}`, () => {
      //Arrange
      const expected = value.result;
      //Act
      const actual = expect(convert(value.number));
      //Assert
      actual.toBe(expected);
    });
  });
});
