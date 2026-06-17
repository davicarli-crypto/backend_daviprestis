function range(inicio, fim) {
  let numeros = []
  for (let i = inicio; i <= fim; i++) {
    numeros.push(i)
  }
  return numeros
}
function soma(array) {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total = total + array[i]
  }
  return total
}
const resultado = soma(range(1, 10));
console.log(resultado)
