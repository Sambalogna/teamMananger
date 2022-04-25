const Manager = require('../lib/manager')

describe('Manager', () => {
    test('Manager Properties ', () => {
        const manager = new Manager('Sam', 12345, 'smandel4@gmail.com', 90)
            expect(manager.officeNumber).toEqual(90) 
    })
    test('Manager methods', () => {
        const manager = new Manager('Sam', 12345, 'smandel4@gmail.com', 90)
            expect(manager.getRole()).toEqual('Manager')
    })
})