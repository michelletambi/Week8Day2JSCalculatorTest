const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    // arrange
    // act
    const actual = sum(250, 550)
    const expected = 800;
    // assert
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    const actual = sum(-2, -2);
    const expected = -4;
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    const actual = sum(0, 5);
    const expected = 5;
    expect(actual).toBe(expected);
    
  });

});

describe('subtract', () => {
  test('can subtract small numbers', () => {
    // arrange
    
    // act
    const actual = subtract(10, 2);
    const expected = 8;
    // assert
    expect(actual).toBe(expected);
  });

  test('can subtract when b > a', () => {
    const actual = subtract(10, 20);
    const expected = -10;
    expect(actual).toBe(expected);
  })

});

describe('multiply', () => {
  test('can multiply small numbers', () =>{
    const actual = multiply(3, 4);
    const expected = 12;
    expect(actual).toBe(expected);
  });

  test('can multiply big numbers', () => {
    const actual = multiply(212, 134);
    const expected = 28408;
    expect(actual).toBe(expected);
  })

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
