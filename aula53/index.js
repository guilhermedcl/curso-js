// Global
function retornaFuncao(nome) {
  return function(sobrenome) {
    return nome + ' ' + sobrenome;
  };
}

function falaNome(nome) {
  const sobrenome = 'Larroide';
  console.log(nome, sobrenome);
}

const funcao = retornaFuncao('Guilherme');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao('Larroide'),
  funcao2('Oliveira'));
