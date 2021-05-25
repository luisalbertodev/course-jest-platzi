describe('Comparadores comunes', () => {
	const user = {
		name: 'oscar',
		lastname: 'varajas',
	};

	const user2 = {
		name: 'oscar',
		lastname: 'varajas',
	};

	test('Igualdad de elementos', () => {
		expect(user).toEqual(user2);
	});

	// test('No son exactamente iguales', () => {
	// 	expect(user).not.toEqual(user2);
	// });
});
