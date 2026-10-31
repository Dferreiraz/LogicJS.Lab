// Desenvolvimento em JS - Senai Suiço-brasileiro
// Sintaxe de variáveis: primeiro vem o tipo (var, const, let)
// depois vem o nome da variável
// depois o operador de atribuição (=)
// e por fim o valor

// var é uma variável mutável, ela pode mudar
var idade = 50
// atribuindo um novo valor à variável
idade = 25
console.log(idade)

//----------------------------------------------------------------------//

// let também pode ser uma variável mutável e segue a mesma sintaxe
// let não pode ser declarada com o mesmo nome mais de uma vez
let cidade = "Xique-Xique, Bahia"
// atribuindo outro valor para variável let
cidade = "Tão tão distante"
console.log(cidade)

//-----------------------------------------------------------------------//

// const é uma variável que não pode ser mudada (variável imutável)
// ela também segue a mesma sintaxe
const cpf = 1324343653465375237
// tentando redefinir o valor da variável const (isso vai gerar erro)
// cpf = 2142134
console.log(cpf)