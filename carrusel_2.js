const galeria = document.querySelector('.galeria-tarjeta');
const imagenes = document.querySelectorAll('.foto-con-marco-tarjeta');

let indiceImagen = 0;
const velocidad = 1500; /* Velocidad del carrusel en milisegundos */
const anchoImagen = 300; /* Ancho de cada imagen */

// Clonar fotos y agregarlas al final del carrusel
imagenes.forEach((imagen) => {
  const clon = imagen.cloneNode(true);
  galeria.appendChild(clon);
});

function siguienteImagen() {
  indiceImagen++;
  if (indiceImagen >= imagenes.length * 2) {
    indiceImagen = 0;
  }
  actualizarPosicionImagenes();
}

function actualizarPosicionImagenes() {
  const imagenesTotales = document.querySelectorAll('.foto-con-marco-tarjeta');
  imagenesTotales.forEach((imagen, indice) => {
    imagen.style.transform = `translateX(${(indice - indiceImagen) * anchoImagen}px)`;
  });
  // Girar la foto que esté en la mitad
  const fotoMitad = imagenesTotales[indiceImagen];
  fotoMitad.classList.add('giro-automatico');
  setTimeout(() => {
    fotoMitad.classList.remove('giro-automatico');
  }, 1000);
}

function deslizarIzquierdatarjeta() {
  indiceImagen--;
  if (indiceImagen < 0) {
    indiceImagen = imagenes.length * 2 - 1;
  }
  actualizarPosicionImagenes();
}

function deslizarDerechatarjeta() {
  siguienteImagen();
}

setInterval(siguienteImagen, velocidad);

actualizarPosicionImagenes();
