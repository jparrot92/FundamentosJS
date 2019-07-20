function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  debugger
  return this.altura > 1.8
}

var jaume = new Persona('Jaume', 'Parrot', 1.75)
var erika = new Persona('Erika', 'Luna', 1.66)
var arturo = new Persona('Arturo', 'Martinez', 1.86)

jaume.soyAlto()
erika.soyAlto()
arturo.soyAlto()