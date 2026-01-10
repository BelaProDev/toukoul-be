let moreLess = document.querySelectorAll('.moreLess')
let bm = document.createElement('button')
let bl = document.createElement('button')
bm.textContent = "Voir plus"
bl.textContent = "Voir moins"
bm.addEventListener('click', function (e) {
    this.previousElementSibling().style.overflow = ''
    this.previousElementSibling().style.height = ''
    this.after(bl)
    this.remove()
})
bl.addEventListener('click', function (e) {
    this.previousElementSibling().style.overflow = 'hidden'
    this.previousElementSibling().style.height = '8.5em'
    this.after(bm)
    this.remove()
})
moreLess.map((e) => {
    if (e.innerText.count() > 100) {
        e.style.overflow = 'hidden'
        e.style.height = '8.5em'
        e.after(bm)
    }
})