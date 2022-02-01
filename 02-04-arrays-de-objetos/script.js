var person1 = {
    name: 'Caio',
    age: 25
}
var person2 = {
    name: 'Rafa',
    age: 31
}
var person3 = {
    name: 'Tereza',
    age: 22
}

var list = [person1, person2, person3]


for (const person of list) {
    
    console.log(person.name)
}
