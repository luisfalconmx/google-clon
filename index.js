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

btn_close.addEventListener('click', () => {
    input.value = '';
    btn_close.classList.remove('main__icon--show')
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        if (input.value !== ''){
            const search_value = input.value.replace(/\s/g, '+')
            window.location.href = `https://www.google.com/search?q=${search_value}`;
        }
    }
})