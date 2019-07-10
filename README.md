# FundamentosJS<!-- omit in toc -->

## Tabla de Contenido<!-- omit in toc -->
- [Primeros pasos en JavaScript](#primeros-pasos-en-javascript)
  - [Variables](#variables)
  - [Strings](#strings)
  - [Números](#números)
  - [Funciones](#funciones)
  - [El alcance de las funciones](#el-alcance-de-las-funciones)
  - [Objetos](#objetos)
  - [Desestructurar objetos](#desestructurar-objetos)
  - [Parámetros como referencia o como valor](#parámetros-como-referencia-o-como-valor)
  - [Comparaciones en JavaScript](#comparaciones-en-javascript)
- [Estructuras de Control y Funciones](#estructuras-de-control-y-funciones)
  - [Condicionales](#condicionales)
  
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

### Funciones
Las funciones son fracciones de código reutilizable. En esta clase aprenderemos a definir e invocar nuestras funciones. Para definir una función utilizaremos la palabra reservada ““function””.

Delimitamos el cuerpo de la función usando llaves { }. Los parámetros de la función son variables que se pasan a la función escribíendolos entre paréntesis ()

Definir funciones nos sirve para reutilizar código. JavaScript es un lenguaje interpretado, esto quiere decir que intentará ejecutar el código sin importar si los parámetros que le pasemos a la función estén invertidos o incluso incompletos.

### El alcance de las funciones
Si una variable no está definida dentro del cuerpo de una función hablamos de una variable global. Por el contrario, una variable definida dentro de una función es una variable local.

Para que la ejecución de una función no modifique una variable global usamos parámetros en lugar de pasar directamente la variable.

Es posible utilizar el mismo nombre para una variable global y para el parámetro de una función con un alcance local.

### Objetos
Los objetos se definen delimitados mediante llaves {}

Un atributo se compone de una clave (key) y un valor (value), que se separan entre sí por dos puntos “”:"". Los valores pueden ser de tipo string, número, booleano, etc. Cada atributo está separado del siguiente por una coma. Un objeto puede tener todos los atributos que sean necesarios.

Escribir el nombre de un objeto separado por un punto del nombre de un atributo, nos permite acceder al valor de dicho atributo para ese objeto. Un objeto también se puede pasar como atributo en una función.

Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. Esto se consigue encerrando el nombre del atributo entre llaves { }.

### Desestructurar objetos
Otra forma de acceder a los atributos de los objetos es la desestructurización de los mismos.

Para no duplicar las variables introducir el nombre de la variable como parámetro de la segunda variable. Ej var{nombre} = persona

### Parámetros como referencia o como valor
Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.

Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.

### Comparaciones en JavaScript
Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a X un valor numérico y a Y un string. Para poder compararlos debemos agregar dos signos de igual (==). Esto los convierte al mismo tipo de valor y permite que se puedan comparar.

Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando variables.

Existen cinco tipos de datos que son primitivos:

1. Boolean
2. Null
3. Undefined
4. Number
5. String

## Estructuras de Control y Funciones

### Condicionales
En esta clase empezaremos a trabajar con estructuras de control, éstas nos permiten decidir el flujo de nuestro código.

Empezaremos con los condiconales. Los condicionales nos permiten decidir si un código se ejecuta o no. También introducimos un nuevo tipo de datos primitivos: el booleano, que determina si un valor es falso o verdadero. Mediante un condicional (if) decidiremos si se ejecuta una parte de nuestro código cuando se cumpla o no cierta condición.
