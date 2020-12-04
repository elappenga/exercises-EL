describe('random functions test', () => {
    it('when getHello is called it returns the string hello', () => {
        const expected = 'hello';
        const actual = getHello();
        expect(actual).toEqual(expected);
    })
})