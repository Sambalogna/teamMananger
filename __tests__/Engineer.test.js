const Engineer = require('../lib/engineer')

describe('Engineer', () => {
    test('Engineer properties', () => {
        const engineer = new Engineer('sam', 12345, 'smandel4@gmail.com', 'Sambalogna')
        expect(engineer.github).toEqual('Sambalogna')
    })
    test('Engineer methods', () => {
        const engineer = new Engineer('sam', 12345, 'smandel4@gmail.com', 'Sambalogna')
        expect(engineer.getGithub()).toEqual('Sambalogna')
        expect(engineer.getRole()).toEqual('Engineer')
    })
})