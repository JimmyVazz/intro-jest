describe('Matchers', () => {
    it('Commons', () => {
         expect(5+5).toBe(10)
    });
    
    it('Commons 2', () => {
        let obj = { a: '1' }
        expect(obj).toEqual({ a: '1' })
    });

    it('Truttiness', () => {
        const variable = null
         expect(variable).toBeNull()

         const name = "Jimmy"
         expect(name).toMatch(/Jimmy/i)
    });
    
    it('Mock', () => {
        const addNumber = jest.fn()
        addNumber()
        addNumber()
         expect(addNumber).toHaveBeenCalledTimes(2)
    });
    
    
    
});
