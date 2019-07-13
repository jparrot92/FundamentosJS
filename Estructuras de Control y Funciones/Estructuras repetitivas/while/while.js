var jaume = {
  nombre: 'Jaume',
  apellido: 'Parrot',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${jaume.nombre} pesa ${jaume.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = jaume.peso - 3
var dias = 0

while (jaume.peso > META) {
  debugger
  if (comeMucho()) {
    aumentarDePeso(jaume)
  }
  if (realizaDeporte()) {
    adelgazar(jaume)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${jaume.nombre} adelgazó 3kg`)
