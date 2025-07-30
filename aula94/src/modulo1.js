export const nome = 'Joãozinho';
export const sobrenome = 'Larroide';
export const idade = 21;

export function soma(x, y) {
  return x + y;
}

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
