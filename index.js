const input = document.getElementById('main__input')
const btn_close = document.getElementById('main__icon--cross')
const btn_search = document.getElementById('main__button--search')
const btn_lucky = document.getElementById('main__button--lucky')

// Show / Hide x button
input.addEventListener('input', () => {
    if (input.value == '') {
        btn_close.classList.remove('main__icon--show')
    }
    else {
        btn_close.classList.add('main__icon--show')
    }
})

// Delete input values ​​by clicking on the x button
btn_close.addEventListener('click', () => {
    input.value = '';
    btn_close.classList.remove('main__icon--show')
})

// Do the search when the enter key is pressed and the input has values
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        if (input.value !== ''){
            const search_value = input.value.replace(/\s/g, '+')
            window.location.href = `https://www.google.com/search?q=${search_value}`;
        }
    }
})

// Do the search when the search button is pressed and the input has values
btn_search.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value !== ''){
        const search_value = input.value.replace(/\s/g, '+')
        window.location.href = `https://www.google.com/search?q=${search_value}`;
    }
})

// Do the search when the "I'm going to be lucky" button is pressed and the input has values
btn_lucky.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value !== ''){
        const search_value = input.value.replace(/\s/g, '+')
        window.location.href = `https://www.google.com/search?q=${search_value}&btnI`;
    }
})