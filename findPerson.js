const listaPerson = [
    "Davi Rossi",
    "Estevão Rossi",
    "Elis Rossi"
]
const somaPerson = (n1, n2) => n1 + n2

const encontraPerson = nome => {    
    try {
        validacao(nome)
        const personEncontrado = listaPerson.find(person => person === nome)
        return personEncontrado ? personEncontrado : 'Pessoa não encontrada'
    }catch(erro){
        return erro
    }
}
const validacao = nome => {
    if(!nome) throw 'Campo nome está vazio'
    if(typeof nome !== 'string') throw 'tipo inválido'
}
module.exports = {
    somaPerson,
    encontraPerson,
    validacao
}