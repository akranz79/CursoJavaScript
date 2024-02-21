function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        //genero = 'homem'
        if (idade >=0 && idade < 4){
                //baby
                genero = 'bebezinho'
                img.setAttribute('src', '1-removebg-preview.png')
            }else if (idade < 10 ) {
                //criança
                genero = 'menino criança'
                img.setAttribute('src', '3-removebg-preview.png')
            }else if (idade < 24) {
                //jovem
                genero = 'homem jovem'
                img.setAttribute('src', '5-removebg-preview.png')
            }else if (idade < 50){
                //adulto
                genero = 'homem adulto'
                img.setAttribute('src', '7-removebg-preview.png')
            }else{
                //idoso
                genero = 'Senhorzinho'
                img.setAttribute('src', '9-removebg-preview.png')
            }
        } else if (fsex[1].checked){
            //genero = 'mulher'
            if (idade >=0 && idade < 4){
                //baby
                genero = 'bebezinha'
                img.setAttribute('src', '2-removebg-preview.png')
            }else if (idade < 10 ) {
                //criança
                genero = 'menina criança'
                img.setAttribute('src', '4-removebg-preview.png')
            }else if (idade < 24) {
                //jovem
                genero = 'jovem mulher'
                img.setAttribute('src', '6-removebg-preview.png')
            }else if (idade < 50){
                //adulto
                genero = 'mulher adulta'
                img.setAttribute('src', '8-removebg-preview.png')
            }else {
                //idoso
                genero = 'Senhorinha'
                img.setAttribute('src', '10-removebg-preview.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
