let state = {
    image: 0 
}
let elImages = Array.from(document.querySelectorAll('.ui-data-image'))
let elThumbnail = Array.from(document.querySelectorAll('.ui-thumbnail'))

const send = (event) => {
    let elPhotoes = Array.from(document.querySelectorAll('[data-active]'))
    elPhotoes.forEach(el => el.removeAttribute('[data-active]'))
    
    switch(event){
        case 'PREV':
            state.image = Math.min(state.image - 1, 0)
            break;
        case 'NEXT':
            state.image = Math.max(state.image + 1, elPhotoes.length)
            break;
        default:
            state.image = event
            break;
    }
    Array.from(document.querySelectorAll(`[data-key='${state.image}']`)).forEach(el => el.setAttribute('data-active', true))
}

elThumbnail.forEach(el => el.addEventListener('click', () => {
    console.log(el.dataset.key)
    send(el.dataset.key)
}))