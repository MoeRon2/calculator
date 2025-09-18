const calculator = require('./calculator.js');



describe("Addition", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });
})


describe("Subtraction", () => {
    test('removes 3 from 5 to equal 2', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });
})


describe("Multiplication", () => {
    test('multiplies 5 and 5 to equal 25', () => {
        expect(calculator.multiply(5, 5)).toBe(25);
    });
})

describe("Division", () => {
    test('Divides 10 by 2 to equal 5', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });
})