const pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Larroide',
  idade: 21,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);
