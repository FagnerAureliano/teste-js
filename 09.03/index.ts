 type Sex = 'male'|'female'

const sex: Sex = "male"

///// aula 9.6
type Cpf = string|number

function ncpf(params:Cpf) {
    if(typeof params === 'string'){
        params.toLowerCase()
    }
}

///// aula 9.7
interface Animal{
    sex?: 'male'|'female'
}
interface Human extends Animal{
    name?:string
    age?:number
}

///// aula 9.8
const pessoa: Person.Default ={
    name: 'aaa',
    age: 0
}



/// 9.9

