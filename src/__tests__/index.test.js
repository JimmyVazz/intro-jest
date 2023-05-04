const sayHello = require('../index')

describe('Test Suite for index', () => {
    it('Say hello with Jimmy', () => {
         expect(sayHello('Jimmy')).toEqual('Hello, Jimmy!')
    });

    it('Throws error with no value', () => {
       
        expect(() => {
            sayHello()
        }).toThrow('Agrega un nombre')
   });

   
    
});
