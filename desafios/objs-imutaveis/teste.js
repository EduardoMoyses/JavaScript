const obj1 = {}
obj1.a = 5678
Object.preventExtensions(obj1) // posso modificar e deletar um obj já existente mas não posso adicionar um novo
obj1.b = 51035395
// obj1.a = 1
// delete obj1.a
console.log(obj1)

const obj2 = {}
obj2.a = 91011
Object.freeze(obj2) // torno 100% imutavel mas apenas na primeira camada de obj
obj2.a = 12343542
obj1.b = 953012341
delete obj1.a
console.log(obj2)

const obj3 = {}
obj3.a = 12332
Object.seal(obj3) // posso modificar mas nao posso adicionar nem deletar
obj3.a = 12343542
obj3.b = 4995
delete obj3.a
console.log(obj3)

const obj4 = {
    abc:{
        d: {

    }
} 
}
obj4.a = 1234
Object.freeze(obj4)
obj4.abc.d = 1234
console.log(obj4) // Shallow Freeze também tem o deep freeze

//? verificação de obj imutaveis

/*const Extensions = {
    prop: 'some string'
}

const seal = {
    prop: 'some string'
}

const freeze = {
    prop: 'some string'
}

console.log(Object.isExtensible(Extensions))
console.log(Object.isSealed(seal))
console.log(Object.isFrozen(freeze))*/

const objhibrido = {
    prop: 'some string'
}

Object.preventExtensions(objhibrido)
Object.seal(objhibrido)
Object.freeze(objhibrido)

console.log(Object.isExtensible(objhibrido)) // Verifica se o objeto pode ter novas propriedades adicionadas
console.log(Object.isSealed(objhibrido)) // Verifica se o objeto está selado
console.log(Object.isFrozen(objhibrido)) // Verifica se o objeto está completamente congelado