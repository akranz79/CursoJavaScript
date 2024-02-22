function gerar() {
    var num = parseInt(document.getElementById('num').value);
    var res = document.getElementById('res');

    // Verifica se o campo num está preenchido
    if (!isNaN(num) && num !== '') {
        res.innerText = ''; // Limpa o conteúdo anterior

        for (var i = 0; i <= 10; i++) {
            res.innerText += `${num} x ${i} = ${num * i}\n`; // Adiciona cada linha
        }
    } else {
        res.innerText = 'Por favor, insira um número válido.';
    }
}
