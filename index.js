const input = document.getElementById('main__input')
const btn_close = document.getElementById('main__icon--cross')

input.addEventListener('input', () => {

    if (input.value == '') {
        btn_close.classList.remove('main__icon--show')
    }

    else {
        btn_close.classList.add('main__icon--show')
    }

})