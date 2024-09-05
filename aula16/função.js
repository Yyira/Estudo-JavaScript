/*
function parImpar(n){
    if (n%2 == 0){
        return('par')
    }else{
        return('impar')
    }
}
function soma(n1=0,n2=0){
    
    return n1+n2
}
console.log(soma(6))
console.log(parImpar(7))
*/
function fatorial(n){
    if (n == 1 ){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))