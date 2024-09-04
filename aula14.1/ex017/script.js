function cont() {
    number = (document.getElementById('number'))
    list = document.getElementById('list')
    txt = ''
    if (number.value == '') {
        alert('Digite um número valido')
    } else {
        for (c = 0; c <= 10; c++) {
            r = Number(number.value) * c
            txt += `<option>${number.value} x ${c} = ${r}</option>`
        }
        list.innerHTML = txt

    }
}