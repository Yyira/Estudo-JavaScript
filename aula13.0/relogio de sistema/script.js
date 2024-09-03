
let textHour = document.getElementById('hour')
time = new Date()
hour = time.getHours()
textHour.innerText = `Agora são ${hour} horas`

img = document.getElementById('img')
    if (hour < 12){
        img.src='imagens/amanhecer.jpg'
        document.body.style.background = '#ffc77a'
    } else if (hour < 18){
        img.src='imagens/entardecer.jpg'
        document.body.style.background = '#9d3c19'
    } else{
        img.src='imagens/noite.avif'
        document.body.style.background = '#4a73b3'
    }

