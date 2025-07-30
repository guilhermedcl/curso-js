
const produto = { nome: 'Produto', preco: 13.5, material: 'porcelana' };

for(let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}
