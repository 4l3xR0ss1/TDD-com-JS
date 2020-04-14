
const should = require('../node_modules/should')
const findPerson = require('../findPerson')

describe('soma person', () => {
    it('soma person', () => {
        findPerson.somaPerson(2, 3).should.be.equal(5)
    })
    it('deve somar dois númetos e retotnar 30', () => {
        findPerson.somaPerson(10, 20).should.be.equal(30)
    })
    it('Passar um nome e deve retornar não encontrado', () => {
        findPerson.encontraPerson('Alex Rossi').should.be.equal('Pessoa não encontrada')
    })
    it('Nome é obrigatório', () => {
        findPerson.encontraPerson().should.be.equal('Campo está vazio')
    })
    it('Retornar mensagem de tipo inválido', () => {
        findPerson.encontraPerson(123).should.be.equal('Tipo inválido')
    })
    it('Deve retornar um nome válido', () => {
        findPerson.encontraPerson('Elis Rossi').should.be.equal('Elis Rossi')
    })

})
