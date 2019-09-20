import {cards} from "../utilities/utility.js"
let cardsCopy = cards
let app = document.querySelector('#app')
app.innerHTML = `<img src='${cardsCopy[0].src}' />
    <div class='displayText'><h1>${cardsCopy[0].name}</h1></div>`

setInterval(() => {
    let first = cardsCopy[0]
    app.innerHTML = `<img src='${cardsCopy[0].src}' />
    <div class='displayText'><h1>${cardsCopy[0].name}</h1></div>`
    cardsCopy.shift()
    cardsCopy.push(first)
}, 2000)
setInterval()