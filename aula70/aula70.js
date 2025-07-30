// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

const p1 = new Pessoa('Guilherme', 'Larroide');
const p2 = new Pessoa('Maria', 'Larroide');

console.log(p1);
console.log(p2);
