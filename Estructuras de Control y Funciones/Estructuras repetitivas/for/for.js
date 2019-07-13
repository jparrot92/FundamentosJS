var jaume = {
  nombre: 'Jaume',
  apellido: 'Parrot',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${jaume.nombre} pesa ${jaume.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(jaume)
  } else if (random < 0.5) {
    adelgazar(jaume)
  }
}

console.log(`Al final del año ${jaume.nombre} pesa ${jaume.peso.toFixed(1)}kg`)