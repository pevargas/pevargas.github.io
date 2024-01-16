document.addEventListener('DOMContentLoaded', () => {
    let myBtns = document.querySelectorAll('.btn-group button');
    myBtns.forEach(function(btn) {
        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('clicked'))
          btn.classList.add('clicked')
        })
    })

    myBtns[0].classList.add('clicked')
})

function colorize(colorCode) {
  Array.from(document.getElementsByClassName('accent-border-left'))
    .forEach(e => e.style.borderLeftColor = colorCode)
  Array.from(document.querySelectorAll("h1, h3, .contact"))
    .forEach(e => e.style.color = colorCode)
  Array.from(document.querySelectorAll(".languages li, .fa"))
    .forEach(e => e.style.backgroundColor = colorCode )
}

function hideRoles(role) {
  showAll()
  Array.from(document.getElementsByClassName(role))
    .forEach(e => e.classList.add('hide'))
  let h1 = document.querySelector("h1")

  if (role != 'backend') {
    colorize('#00A5C9')
    h1.classList.remove('green-logo')
  }
  else {
    colorize('#00c924')
    h1.classList.add('green-logo')
  }
}

function showAll() {
  Array.from(document.getElementsByClassName('hide'))
    .forEach(e => e.classList.remove('hide'))

  Array.from(document.getElementsByClassName('clicked'))
    .forEach(e => e.classList.remove('clicked'))
}