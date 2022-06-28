const circles=document.querySelectorAll('.circle')
const progress=document.getElementById('progress')
const prev=document.getElementById('prev')
const next=document.getElementById('next')

let currentState = 1 

next.addEventListener('click', ()=> {
    currentState ++
        if (currentState > circles.length) {
            currentState = circles.length
        }
    Update(currentState)
    })

prev.addEventListener('click', ()=> {
    currentState --
        if (currentState < 1) {
            currentState = 1 
        }

    Update(currentState)
    })

function Update(x) {
    circles.forEach((circle,i)=> {
       
        if (currentState < i+1) {
            console.log(i,currentState)
            circle.classList.remove('active')
        } else {
            console.log(i,currentState)
            circle.classList.add('active')

        }})

   const  actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length-1) *( 130 / circles.length)+'%'
    if (x == 1 ) {
        prev.disabled = true
    } else if ( x=== 4) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

