const openBtn = document.querySelector('.sidebar-toggle-btn')
const closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', () => {
    const aside = document.querySelector('.sidebar')
    aside.classList.add('show-sidebar')
    openBtn.classList.add('open-btn-none')
})

closeBtn.addEventListener('click', () => {
    const aside = document.querySelector('.sidebar')
    aside.classList.remove('show-sidebar')
    openBtn.classList.remove('open-btn-none') 
})