function lod() {
    return txt = new Array()
}
function add(txt) {
    init = 0
    number = (document.getElementById('number'))
    list = document.getElementById('list')

    if (number.value == '') {
        alert('Digite um número')
        init = 1
    }
    if (Number(number.value) > 100 || Number(number.value) < 1) {
        alert('Digite um número entre 1 e 100')
        init = 1
    }

    if (init == 0) {
        if (txt.includes(number.value)) {
            alert('Valor ja listado')
        } else {
            list.innerHTML = list.innerHTML + `<option>Valor ${number.value} foi adicionado</option>`
            txt.push(number.value)

        }


    }
}
function end(txt) {

    if (txt == '') {
        alert('Adicione valores antes de finalizar!')
    } else {
        txt.sort(function (a, b) { return a - b })

        let bigNumber = txt[txt.length - 1]
        let smallNumber = txt[0]
        adNumber = 0
        for (n1 = 0; n1 <= txt.length - 1; n1++) {
            adNumber = Number(txt[n1]) + adNumber
        }
        midNumber = adNumber / txt.length
        let end = document.getElementById('end')
        end.innerHTML =
            `
            <p>Ao todo,temos ${txt.length} números cadastrados.</P>
            <p>O maior valor informado foi ${bigNumber}</P>
            <p>O menor valor informado foi ${smallNumber}</P>
            <p>Somando todos os valores, temos ${adNumber}</P>
            <p>A média dos valores digitados é ${midNumber}</P>
        `
    }

}