function valor1 (a,b,c,d,callback) {
   let primeiro = a + b / c ** d
    callback(primeiro)
}

function valor2 (primeiro,callback) {
    let segundo = primeiro * 2
    callback(primeiro,segundo)
}

function resultado (primeiro,segundo) {
    let res = primeiro * segundo
    console.log(`O resultade de ${primeiro} x ${segundo} é ${res}`)
}

valor1(5,2,4,1,function(primeiro) {
    valor2(primeiro,function(primeiro,segundo) {
        resultado(primeiro,segundo)
    })
})