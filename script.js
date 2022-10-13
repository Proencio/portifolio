

function redirectPage(url) {
    window.open(url, '_blank')
}


function enviar() {

    var nome = document.getElementById("nome");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso!');
    }

}
