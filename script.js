// 1) функція яка буде шось робити при натисканні на кнопку 
//а) отримати кнопку зі сторінки
const button = document.querySelector('button')
//б) привязати до кнопки функцію 
button.addEventListener('click', some)
function some () {
  const participants = document.getElementById("participants").value
  const winners = document.getElementById("winners").value
 fetch(
   `https://www.random.org/integers/?num=${winners}&min=1&max=${participants}&col=1&base=10&format=plain&rnd=yes&quot`
 )
   .then((res) => res.text())
   .then((res) => {
     const result = document.querySelector("#result")
     result.textContent = res
   })
   .catch((error) => {
     console.error("Error:", error)
   })
  
}
// 2) отримати з інпута кількість участників - 10
const participants = document.getElementById("participants").value
// 3)отримати з інпута кількість переможців - 3
const winners = document.getElementById("winners").value
//4) зробити запит на сайт
// https://www.random.org/integers/?num=3&min=1&max=10&col=1&base=10&format=plain&rnd=yes&quot
// fetch(
//   "https://www.random.org/integers/?num=3&min=1&max=10&col=1&base=10&format=plain&rnd=yes&quot"
// )
//5) вивести на екран результати 
const result = document.querySelector('#result')
// result.textContent = ''