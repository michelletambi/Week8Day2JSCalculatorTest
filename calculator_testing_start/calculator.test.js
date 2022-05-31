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
  test('divide decimal numbers', () =>{
    const actual = divide(0.1, 0.5);
    const expected = 0.2;
    expect(actual).toBe(expected);
  });
  test('can divide by large number', () => {
    const actual = divide(5, 10000);
    const expected = 0.0005
    expect(actual).toBe(expected);
  })

});

describe('modulus', () => {
  test('runs when a > b', () =>{
    const actual = modulus(2, 6);
    const expected = 2;
    expect(actual).toBe(expected);
  });
  test('runs when a < b', () =>{
    const actual = modulus(13, 6);
    const expected = 1;
    expect(actual).toBe(expected);

  })

});

describe('even', () => {
  test('works with evevn number', () =>{
    const actual = even(14);
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('works with odd', () =>{
    const actual = even(15);
    const expected = false;
    expect(actual).toBe(expected);
  })

});

describe('odd', () => {
  test('works with odd', () =>{
    const actual = odd(3);
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('works with even', () =>{
    const actual = odd(12);
    const expected = false;
    expect(actual).toBe(expected);
  })

});
