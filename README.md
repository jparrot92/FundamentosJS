# FundamentosJS<!-- omit in toc -->

## Tabla de Contenido<!-- omit in toc -->
- [Primeros pasos en JavaScript](#primeros-pasos-en-javascript)
  - [Variables](#variables)
  - [Strings](#strings)
  - [Números](#números)
  
## Primeros pasos en JavaScript

### Variables
**Variables:** Una variable está formada por un espacio en el sistema de almacenaje ( memoria principal de un ordenador) y un nombre simbólico (un identificador ) que está asociado a dicho espacio. Ese espacio contiene una cantidad de información conocida o desconocida, es decir un valor. El nombre de la variable es la forma usual de referirse al valor almacenado: esta separación entre nombre y contenido permite que el nombre sea usado independientemente de la información exacta que representa.

**var:** Con este comando podemos declarar variables, hay que tener cuidado porque JS es un lenguaje débilmente tipado, esto quiere decir que cuando declaramos una variable, no exige la asociación con un tipo de dato. Por ejemplo, para escribir un String la palabra tiene que ir en comillas.

### Strings
Los strings son cadenas de texto. Para indicar que estamos usando una cadena de texto debemos de colocar las comillas simples.
En este curso utilizaremos los métodos:
* **toUpperCase**, que sirve para transformar un String a mayúsculas.
* **toLowerCase**, que sirve para transformar el string a minúsculas.
* **length**, que nos indica la cantidad de caractéres que tiene un string.

Para concatenar dos strings se utiliza el símbolo (+)
```js
var nombreCompleto = nombre + ’ ’ + apellido
```

### Números
Operadores matemáticos:

* suma ( + )
* resta ( - )
* multiplicación
* división

En operaciones con decimales debemos realizar operaciones adicionales para conseguir un resultado preciso.
```js
var total = ( precioDeVino * 100 * 3) / 100
```
Para redondear una operación se utiliza la función: Math.round