function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 10
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas`

    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#F2BA65'
        img.src = 'img/1-removebg-preview.png'
    }
    else if (hora < 18) {
        document.body.style.background = '#F8C99D'
        img.src = 'img/2-removebg-preview.png'
    }
    else {
        document.body.style.background = '#405664'
        img.src = 'img/3-removebg-preview.png'
    }

}