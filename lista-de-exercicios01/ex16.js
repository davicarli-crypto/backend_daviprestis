const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 7.2 },
  { nome: "Daniela", nota: 5.5 },
  { nome: "Eduardo", nota: 9.0 }
]
const boletim = alunos.map(aluno => {
  let situacaoAluno = "Reprovado"
  if (aluno.nota >= 7) {
    situacaoAluno = "Aprovado"
  }
  return {
    nome: aluno.nome,
    nota: aluno.nota,
    situacao: situacaoAluno
  }
})
console.log("Boletim da Turma:")
console.log(boletim);
console.log("---");
const aprovados = boletim.filter(aluno => aluno.situacao === "Aprovado")
console.log(`Quantidade de alunos aprovados: ${aprovados.length}`)
console.log("---")
let somaNotas = 0
alunos.forEach(aluno => {
  somaNotas = somaNotas + aluno.nota
})
const mediaGeral = somaNotas / alunos.length
console.log(`Média geral da turma: ${mediaGeral}`)
