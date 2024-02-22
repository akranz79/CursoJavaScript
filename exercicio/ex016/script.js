function processar(){

    
    var ini = parseInt(document.getElementById('ini').value)
    var fim = parseInt(document.getElementById('fim').value)
    var pas = parseInt(document.getElementById('pas').value)
    var res = document.getElementById('res')
    var resultado = ''

    if (isNaN(ini) || isNaN(fim) || isNaN(pas)) {
        alert("Por favor, preencha todos os campos.")
        return;
        }
    if (pas === 0){
        res.innerText ="O passo nao pode ser zero."
        return;
    }

   

        for (var i = ini ; i <= fim ; i += pas){
            
            if (i < fim) {
                
                resultado += i + ' 👉 '
            }
        }

    res.innerText = `Contando: ${resultado}`
}

