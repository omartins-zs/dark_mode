
const html = document.documentElement
const checkbox = document.querySelector('#switch')

checkbox.addEventListener('change', function () {
    html.classList.toggle('dark-mode')
})