const home = document.querySelector('.home')
const about = document.querySelector('.about')
const messager = document.querySelector('.messager')
const photo = document.querySelector('.photo')
const settings = document.querySelector('.settings')

const naybar = document.querySelector('.naybar')

const abrir = document.getElementById('abrir')
const cerrar = document.getElementById('cerrar')

const enlaces = document.querySelectorAll('a')

/**Iconos de colores */

home.addEventListener('click', ()=> {
  home.classList.add('blue')
  if (home.classList = 'blue') {
    about.classList.remove('rose')
    messager.classList.remove('yello')
    photo.classList.remove('red')
    settings.classList.remove('morado')
  }
} )

about.addEventListener('click', ()=> {
  about.classList.add('rose')
  if (about.classList = 'rose') {
    home.classList.remove('blue')
    messager.classList.remove('yello')
    photo.classList.remove('red')
    settings.classList.remove('morado')
  }
} )

messager.addEventListener('click', ()=> {
  messager.classList.add('yello')
  if (messager.classList = 'yello') {
    home.classList.remove('blue')
    about.classList.remove('rose')
    photo.classList.remove('red')
    settings.classList.remove('morado')
  }
} )

photo.addEventListener('click', ()=> {
  photo.classList.add('red')
  if (photo.classList = 'red') {
    home.classList.remove('blue')
    about.classList.remove('rose')
    messager.classList.remove('yello')
    settings.classList.remove('morado')
  }
} )

/**Menu desplegable */

enlaces.forEach(enlaces2 => {

  settings.addEventListener('click', ()=> {
    settings.classList.add('morado')
    if (settings.classList = 'morado') {
      home.classList.remove('blue')
      about.classList.remove('rose')
      messager.classList.remove('yello')
      photo.classList.remove('red')
      return
    }
  } )

  abrir.addEventListener('click', () =>{
    naybar.classList.add('abierto')

    cerrar.addEventListener('click', () =>{
      abrir.classList.remove('ocultar')
      cerrar.classList.remove('mostrar-boton')
      naybar.classList.remove('abierto')
      naybar.classList.add('naybar')
    })

    if(naybar.classList = 'abierto'){
      enlaces2.classList.add('ver')
      abrir.classList.add('ocultar')
      cerrar.classList.add('mostrar-boton')
      return
    }
  })

})



