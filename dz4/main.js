let counter = 0
var counterDisplay = document.getElementById('counter')
var incrementBtn  = document.getElementById('increment')
var decrementBtn = document.getElementById('decrement')
var updateCounter = () => {
    counterDisplay.textContent = counter
    counterDisplay.className = counter > 0 ? 'green' : 'red'

}
incrementBtn.addEventListener('click', () => {
    counter++
    updateCounter()
})
decrementBtn.addEventListener('click', () => {
    if (counter > 0){
        counter--
        updateCounter()
    }
})
updateCounter()

var trackingBlock = document.getElementById('trackingBlock')
var xCoord = document.getElementById('xCoord')
var yCoord = document.getElementById('yCoord')
trackingBlock.addEventListener('mousemove', (event) => {
    let rect  = trackingBlock.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    xCoord.textContent = x
    yCoord.textContent = y
})



var redLight = document.querySelector('.red-light')
var greenLight = document.querySelector('.green-light')


let changeLight = (color) => {
    redLight.classList.remove('active')
    redLight.classList.remove('active')

    if (color === 'Красный'){
        redLight.classList.add('active')
        alert('STOP')
    }else if(color === 'Зеленый'){
        greenLight.classList.add('active')
        alert('GO')
    }else {
        alert('Введите Красный или Зеленый')
    }

}
let userColor = prompt('Введите цвет (Красный или Зеленый)')
changeLight(userColor)





















