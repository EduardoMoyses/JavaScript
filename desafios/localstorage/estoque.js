const f_texto = document.querySelector("#f_texto")
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.querySelector("#btn_texto")

 btn_texto.addEventListener('click', (evt)=> {

})

let num = 10
const curso = 'javaScript'
// localStorage.setItem("numero", num)
// localStorage.setItem("numero", 33)
// localStorage.setItem("curso", curso)
// localStorage.setItem("nome", 'bruno')
// localStorage.setItem('teste2', 'oi')
// alert(localStorage.length)
// alert(localStorage.getItem(localStorage.key([0])))
// alert(localStorage.getItem('numero'))
// alert(localStorage.getItem('curso'))
// alert(localStorage.getItem('teste2'))
//localStorage.clear()
localStorage.clear()

sessionStorage.setItem("curso", curso)
sessionStorage.setItem("nome", 'bruno')
sessionStorage.setItem('teste2', 'oi')