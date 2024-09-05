let num = [1, 19, 3]
num[3] = 16
num.push(2.5)

function sortord(a,b){
    return(a - b)

}


console.log(`Nosso vetor é ${num} seu tamanho é ${num.length}`)
num.sort(sortord)
console.log(`Nosso vertor organizado ${num}`)
console.log('escrevendo de cima para baixo')
for(pos in num){
    console.log(num[pos])
}
console.log(`Qual a possição do valor 19? ${num.indexOf(19)}`)