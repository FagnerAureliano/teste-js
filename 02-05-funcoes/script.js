function greet(param = 'Teste') {
    return 'Boa tarde, ' + param
}

var greeting = greet('José')
greet()
console.log(greet())
console.log(greet('Fagner'))
console.log(greeting)


function teste() {
    var test = 12
}
if(true){
    var test = 12
}
console.log(test)