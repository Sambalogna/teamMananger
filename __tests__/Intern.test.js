const Intern = require('../lib/intern')

describe('Intern', () => {
    test('Intern Properties', ()=>{
        const intern = new Intern('Sam', 1234, 'smandel4@gmail.com', 'UCB bootcamp')
        expect(intern.school).toEqual('UCB bootcamp')
    })
    test('Intern methods', () => {
        const intern = new Intern('Sam', 1234, 'smandel4@gmail.com', 'UCB boot camp')
        expect(intern.getSchool()).toEqual('UCB boot camp')
        expect(intern.getRole()).toEqual('Intern')
    })
})