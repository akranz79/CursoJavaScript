
let vetor = [1,3,6,8,9,12,5,14]
/*
for (let i=0; i < vetor.length; i++) {
    console.log(`chave: ${i} valor: ${vetor[i]}`)
}
*/

for (let i in vetor) {
    console.log(`valor: ${vetor[i]}`)
}

let ind = vetor.indexOf(1)
if(ind == -1) {
    console.log(`Valor não encontrado!`)
}
console.log(`Valor ${ind}`)