describe('Arabic', () => {
  const Arabic = require('../resources/js/Arabic')

  test('Convert method was defined', () => {
    //Arrange
    //Act
    const result = expect(Arabic.convertToRoman)
    //Assert
    result.toBeDefined()
  })

  const testCases = [
    {
      arabic: 4,
      roman: 'IV',
    },
    {
      arabic: 5,
      roman: 'V',
    },
    {
      arabic: 6,
      roman: 'VI',
    },
    {
      arabic: 7,
      roman: 'VII',
    },
    {
      arabic: 8,
      roman: 'VIII',
    },
    {
      arabic: 9,
      roman: 'IX',
    },
    {
      arabic: 10,
      roman: 'X',
    },
    {
      arabic: 11,
      roman: 'XI',
    },
    {
      arabic: 20,
      roman: 'XX',
    },
    {
      arabic: 58,
      roman: 'LVIII',
    },
    {
      arabic: 100,
      roman: 'C',
    },
    {
      arabic: 500,
      roman: 'D',
    },
    {
      arabic: 998,
      roman: 'CMXCVIII',
    },
    {
      arabic: 1000,
      roman: 'M',
    },
  ]

  testCases.forEach((value) => {
    test(`When Convert "${value.arabic}", should return "${value.roman}"`, () => {
      //Arrange
      const expected = value.roman
      //Act
      const actual = expect(Arabic.convertToRoman(value.arabic))
      //Assert
      actual.toBe(expected)
    })
  })

  const errorCases = ['', 0, -1, 'A', 1001]
  errorCases.forEach((value) => {
    test(`When Convert "${value}", should return an Error`, () => {
      //Arrange
      const expected = Error
      //Act
      let error
      try {
        Arabic.convertToRoman(value)
      } catch (e) {
        error = e
      }
      const actual = expect(error)
      //Assert
      actual.toBeInstanceOf(expected)
    })
  })
})
