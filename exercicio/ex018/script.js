let number = document.querySelector('input#number')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')

let meuVetor = [] 

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true
    } else {
        return false
    }
}

function adicionar() {

    if(isNumber(number.value) && !inLista(number.value, meuVetor)){
        meuVetor.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado.`
        lista.appendChild(item)

    }else{
        alert('valor invalido ou ja existente!')
    }
  
    number.value = ''
    number.focus()
    res.innerHTML = ''
}


function finalizar() {

    if(meuVetor.length != 0) {

        let maiorValor = Math.max(...meuVetor)
        let menorValor = Math.min(...meuVetor)
        let soma = 0
        for (let i = 0; i < meuVetor.length; i++) {
            soma += meuVetor[i]
        }
        let media = soma / meuVetor.length
        res.innerHTML = ''
        res.innerHTML = `<p>Meu vetor: [${meuVetor}]</p>`
        res.innerHTML += `<p>Ao todo temos ${meuVetor.length} elementos no vetor.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiorValor}</p>`
        res.innerHTML += `<p>O maior valor informado foi ${menorValor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A médias dos valores digitados é ${media.toFixed(2)}</p>`
    } else {
        alert('Vetor vazio.')
    }
    }