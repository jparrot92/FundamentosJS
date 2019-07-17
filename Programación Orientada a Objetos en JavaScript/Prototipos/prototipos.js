function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

const soyAlto = ({ altura }) => {
  if (altura >= 1.80) {
    return 'alto';
  } else {
    return 'bajo';
  }
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy ${soyAlto(this)}`)
}

var jaume = new Persona('Jaume', 'Parrot', 1.75)
var erika = new Persona('Erika', 'Luna', 1.66)
var arturo = new Persona('Arturo', 'Martinez', 1.86)