let state = {
    image: 0
}

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let elImages = Array.from(document.querySelectorAll('.ui-data-image'))
let elThumbnail = Array.from(document.querySelectorAll('.ui-thumbnail'))

const displaySlide = (index) => {
    Array.from(document.querySelectorAll(`[data-active]`)).forEach(el => el.removeAttribute('data-active'))
    switch(index){
        case 'PREV':
            console.log(state.image)
            state.image > 0 ? state.image-- : state.image = 0
            break
        case 'NEXT':
            state.image < 5 ? state.image++ : state.image = 5
            break
        default:
            state.image = index
            break
    }
    Array.from(document.querySelectorAll(`[data-key='${state.image}']`)).forEach(el => el.setAttribute('data-active', true))
}

elThumbnail.forEach(el => el.addEventListener('click', () => {
    displaySlide(el.dataset.key)
}))

next.addEventListener('click', () => {
    displaySlide('NEXT')
})
prev.addEventListener('click', () => {
    displaySlide('PREV')
})

displaySlide(0)