var jaume = {
  nombre: 'Jaume',
  apellido: 'Parrot',
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}