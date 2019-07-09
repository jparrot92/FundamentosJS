var jaume = {
  nombre: 'Jaume',
  apellido: 'Parrot',
  edad: 28
}

var pepe = {
  nombre: 'Pepito',
  apellido: 'Vald',
  edad: 27
}

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(jaume)
imprimirNombreEnMayusculas(pepe)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
imprimirNombreEnMayusculas({ nombre: 'Parrot' })