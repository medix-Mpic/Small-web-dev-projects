const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()
function checkBoxes() {
    const triggerbottom = window.innerHeight / 5 * 4
    console.log (triggerbottom)

    boxes.forEach( box =>{
        const boxtop = box.getBoundingClientRect().top
        if (boxtop < triggerbottom) {
            box.classList.add('show')
        }   else {
            box.classList.remove('show')
        }
    })

}