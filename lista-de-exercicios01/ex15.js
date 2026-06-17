const catalogo = [
  { id: 1, nome: "Teclado", preco: 150 },
  { id: 2, nome: "Mouse", preco: 80 },
  { id: 3, nome: "Monitor", preco: 900 },
  { id: 4, nome: "Fone de Ouvido", preco: 50 },
  { id: 5, nome: "Mousepad", preco: 120 }
]
// O .find() busca o primeiro item que atenda à condição e o devolve inteiro
const produtoId3 = catalogo.find(produto => produto.id === 3)
console.log("A) Produto com ID 3:")
console.log(produtoId3)
console.log("---")
// O .filter() filtra a lista e devolve um NOVO array apenas com os itens que passaram no teste
const produtosCaros = catalogo.filter(produto => produto.preco > 100)
console.log("B) Produtos acima de 100:")
console.log(produtosCaros)
console.log("---")
// O .map() passa por todo mundo e transforma cada objeto em apenas uma informação (o nome)
const nomesDosProdutos = catalogo.map(produto => produto.nome)
console.log("C) Lista apenas com os nomes:")
console.log(nomesDosProdutos)
console.log("---")
// O .forEach() é apenas um leitor (como o laço for), ele não devolve nada, só executa uma ação para cada item
console.log("D) Catálogo formatado:");
catalogo.forEach(produto => {
  console.log(`Produto: ${produto.nome} | Preço: R$ ${produto.preco}`);
})
