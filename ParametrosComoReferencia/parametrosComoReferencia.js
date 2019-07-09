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

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(jaume)
imprimirNombreEnMayusculas(pepe)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function imprimirNombreYEdad(persona) {
  console.log(`Hola me llamo ${persona.nombre} y tengo ${persona.edad}`);
}

imprimirNombreYEdad(jaume)

function cumpleanos(persona) {
  return {
    // Desgloza a la persona, dentro de un nuevo objeto.
    ...persona,
    edad: persona.edad + 1
  }
}