import { numbers } from '../numbers';

describe('vamos a comparar numeros', () => {
	test('Mayor Que', () => {
		expect(numbers(2, 2)).toBeGreaterThan(3);
	});

	test('Mayor que o igual que', () => {
		expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
	});

	test('Menor que', () => {
		expect(numbers(2, 2)).toBeLessThan(5);
	});

	test('Menor que o igual que', () => {
		expect(numbers(2, 2)).toBeLessThanOrEqual(5);
	});

	test('Numeros flotantes', () => {
		expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
	});
});
