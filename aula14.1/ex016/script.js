


function contar() {
    int = document.getElementById("int")
    end = document.getElementById("end")
    foot = document.getElementById("foot")
    cont = document.getElementById("cont")
    contNew = '<p>Contando:</p>'
    x = 0

    if (int.value == '') {
        alert("ERRO Digite um valor para o Início")
        x = 1
    }
    if (end.value == '') {
        alert("ERRO Digite um valor para o Fim")
        x = 1
    }
    if (foot.value == '' || foot.value == '0') {
        alert("ERRO Digite um valor valido para o Passo")
        x = 1
    }

    if (x == 0) {
        for (c = Number(int.value); c <= Number(end.value); c += Number(foot.value)) {
            contNew += ` ${c} &#x1F449;`
        }

        cont.innerHTML = contNew + '&#x1F3C1'

    }
}