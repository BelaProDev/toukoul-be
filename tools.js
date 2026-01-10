let moreLess = Array.from(document.querySelectorAll('.moreLess'))
let bm = document.createElement('button')
let bl = document.createElement('button')
bm.textContent = "Voir plus"
bl.textContent = "Voir moins"
bm.addEventListener('click', function (e) {
    e.target.previousElementSibling.style.overflow = ''
    e.target.previousElementSibling.style.height = ''
    e.target.after(bl)
    e.target.remove()
})
bl.addEventListener('click', function (e) {
    e.target.previousElementSibling.style.overflow = 'hidden'
    e.target.previousElementSibling.style.height = '8.5em'
    e.target.after(bm)
    e.target.remove()
})
moreLess.forEach((e) => {
    if (e.innerText.length > 100) {
        e.style.overflow = 'hidden'
        e.style.height = '8.5em'
        e.after(bm)
        console.log(e.innerText.length)
        console.log(bm)
    }
})