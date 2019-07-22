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
  - [Funciones que retornan valores](#funciones-que-retornan-valores)
  - [Arrow functions](#arrow-functions)
  - [El contexto de las funciones: quién es this](#el-contexto-de-las-funciones-quién-es-this)
  - [Estructuras repetitivas: for](#estructuras-repetitivas-for)
  - [Estructuras repetitivas: while](#estructuras-repetitivas-while)
  - [Estructuras repetitivas: do-while](#estructuras-repetitivas-do-while)
- [Arrays](#arrays)
  - [Introducción a arrays](#introducción-a-arrays)
  - [Filtrar un array](#filtrar-un-array)
  - [Transformar un array](#transformar-un-array)
  - [Reducir un array a un valor](#reducir-un-array-a-un-valor)
- [Programación Orientada a Objetos en JavaScript](#programación-orientada-a-objetos-en-javascript)
  - [Cómo funcionan las clases en JavaScript](#cómo-funcionan-las-clases-en-javascript)
  - [Modificando un prototipo](#modificando-un-prototipo)
  - [La verdad oculta sobre las clases en JavaScript](#la-verdad-oculta-sobre-las-clases-en-javascript)
  
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
Las funciones son fracciones de código reutilizable. Aprenderemos a definir e invocar nuestras funciones. Para definir una función utilizaremos la palabra reservada ““function””.

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
Empezaremos a trabajar con estructuras de control, éstas nos permiten decidir el flujo de nuestro código.

Empezaremos con los condiconales. Los condicionales nos permiten decidir si un código se ejecuta o no. También introducimos un nuevo tipo de datos primitivos: el booleano, que determina si un valor es falso o verdadero. Mediante un condicional (if) decidiremos si se ejecuta una parte de nuestro código cuando se cumpla o no cierta condición.

### Funciones que retornan valores
Seguiremos trabajando con condicionales para desglosar las funciones en funciones más pequeñas que retornen un valor.

Debemos de tener en cuenta que el número 18 esta incluido dentro del rango de edad. Para ello utilizamos los símbolos >=.

Return detiene la ejecución de una función y devuelve el valor de esa función.

Las variables definidas con const se comportan como las variables, excepto que no pueden ser reasignadas. Las constantes pueden ser declaradas en mayúsculas o minúsculas. Pero por convención, para distinguirlas del resto de variables, se escribe todo en mayusculas.

### Arrow functions
Las Arrow Functions permiten una nomenclatura más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves.

### El contexto de las funciones: quién es this
El error del contexto de this en javascript es uno de los errores más comunes.

Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.

### Estructuras repetitivas: for
El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para ejecutar el bucle, y dentro las llaves irán las instrucciones que se deben repetir.

### Estructuras repetitivas: while
While se ejecuta únicamente mientras la condición que se está evaluando es verdadera.

En ocasiones nuestro código puede fallar por errores de syntaxis o errores lógicos. En caso de que quieras verificar tu código, debes utilizar un debugger. El código se detiene cada vez que lee esta palabra.

### Estructuras repetitivas: do-while
Otra estructura repetitiva es el do-while. A diferencia de la instrucción while, un bucle do…while se ejecuta una vez antes de que se evalúe la expresión condicional.

## Arrays

### Introducción a arrays
Los arrays son estructuras que nos permiten organizar elementos dentro de una collección. Estos elementos pueden ser números, strings, booleanos, objetos, etc.

### Filtrar un array
Para filtrar siempre necesitamos establecer una condición. 

El método filter ( ) crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función proporcionada.

Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío.

### Transformar un array
El método map() itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.

### Reducir un array a un valor
El método reduce() nos permite reducir, mediante una función que se aplica a cada uno de los elemento del array, todos los elementos de dicho array, a un valor único.

## Programación Orientada a Objetos en JavaScript

### Cómo funcionan las clases en JavaScript
Las clases son funciones cuya sintaxis tiene dos componentes:
* expresiones
* declaraciones

Dentro de una función, el valor de this depende de cómo es llamada ésta.

### Modificando un prototipo
JavaScript funciona con una estructura orientada a objetos y cada objeto tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.

### La verdad oculta sobre las clases en JavaScript
Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.