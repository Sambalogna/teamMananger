const Employee = require('../lib/employee')

describe('Employee', () => {
    test('Employee Properties', () => {
        const employee = new Employee('Sam', 12345, 'smandel4@gmail.com')
        expect(employee.name).toEqual('Sam');
        expect(employee.id).toEqual(12345);
        expect(employee.email).toEqual('smandel4@gmail.com')       
    })
    test('Employee Methods', () => {
        const employee =  new Employee('Phil', 123, 'someemail@gmail.com')
        expect(employee.getEmail()).toEqual('someemail@gmail.com')
        expect(employee.getId()).toEqual(123)
        expect(employee.getName()).toEqual('Phil')
        expect(employee.getRole()).toEqual('Employee')

    })
})