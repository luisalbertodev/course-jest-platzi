import { isNull, isUndefined, isTrue, isFalse } from '../true';

describe('Pruebas resultados nullos', () => {
	test('null', () => {
		expect(isNull()).toBeNull();
	});
});

describe('Probar resultados verdaderos', () => {
	test('true', () => {
		expect(isTrue()).toBeTruthy();
	});

	test('false', () => {
		expect(isFalse()).toBeFalsy();
	});
});

describe('Pruebas resultados indefinidos', () => {
	test('undefined', () => {
		expect(isUndefined()).toBeUndefined();
	});
});

describe('Probar resultados falso o verdadero', () => {
	test('Falso o verdadero', () => {
		expect(isFalse()).not.toBeTruthy();
	});
});
