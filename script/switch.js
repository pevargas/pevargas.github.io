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

function hideRoles(role) {
  showAll()
  Array.from(document.getElementsByClassName(role))
    .forEach(e => e.classList.add('hide'))
  this.classList.add('clicked')
}

function showAll() {
  Array.from(document.getElementsByClassName('hide'))
    .forEach(e => e.classList.remove('hide'))

  Array.from(document.getElementsByClassName('clicked'))
    .forEach(e => e.classList.remove('clicked'))
}