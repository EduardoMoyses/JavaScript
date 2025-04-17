const livros = [
    {titulo: 'as 48 leis do poder', autor: 'Robert Greene', anodepublicacao: 1998, genero: 'AutoAjuda'},
    {titulo: 'a arte da guerra', autor: 'Sun Tzu', anodepublicacao: '500 A.C', genero: 'Estratégia'},
    {titulo: 'a arte da sabedoria', autor: 'baltasar gracian', anodepublicacao: 1647, genero: 'Filosofia'},
]

const [
    {titulo: titulo1, genero: genero1},
    {titulo: titulo2, genero: genero2},
    {titulo: titulo3, genero: genero3}
] = livros

console.log(titulo1)
console.log(titulo2)
console.log(titulo3)