# FundamentosJS<!-- omit in toc -->

## Tabla de Contenido<!-- omit in toc -->
- [Primeros pasos en JavaScript](#primeros-pasos-en-javascript)
  - [Variables](#variables)
  - [var, let y const](#var-let-y-const)
  - [Strings](#strings)
  - [Números](#números)
  - [Fechas](#fechas)
  - [Funciones](#funciones)
  - [El alcance de las funciones](#el-alcance-de-las-funciones)
  - [Objetos](#objetos)
  - [Desestructurar objetos](#desestructurar-objetos)
  - [Parámetros como referencia o como valor](#parámetros-como-referencia-o-como-valor)
  - [Comparaciones en JavaScript](#comparaciones-en-javascript)
- [Estructuras de Control y Funciones](#estructuras-de-control-y-funciones)
  - [Condicionales](#condicionales)
  - [Estructuras repetitivas: for](#estructuras-repetitivas-for)
  - [Estructuras repetitivas: while](#estructuras-repetitivas-while)
  - [Estructuras repetitivas: do-while](#estructuras-repetitivas-do-while)
  - [Funciones que retornan valores](#funciones-que-retornan-valores)
  - [Arrow functions](#arrow-functions)
  - [El contexto de las funciones: quién es this](#el-contexto-de-las-funciones-quién-es-this)
  - [Funciones como parámetros](#funciones-como-parámetros)
  - [Funciones recursivas](#funciones-recursivas)
  - [Memoización](#memoización)
  - [Closures](#closures)
- [Arrays](#arrays)
  - [Introducción a arrays](#introducción-a-arrays)
  - [Filtrar un array](#filtrar-un-array)
  - [Transformar un array](#transformar-un-array)
  - [Reducir un array a un valor](#reducir-un-array-a-un-valor)
- [Programación Orientada a Objetos en JavaScript](#programación-orientada-a-objetos-en-javascript)
  - [Cómo funcionan las clases en JavaScript](#cómo-funcionan-las-clases-en-javascript)
  - [Modificando un prototipo](#modificando-un-prototipo)
  - [La verdad oculta sobre las clases en JavaScript](#la-verdad-oculta-sobre-las-clases-en-javascript)
  - [Clases en JavaScript](#clases-en-javascript)
- [Asincronismo](#asincronismo)
  - [Cómo funciona el asincronismo en JavaScript](#cómo-funciona-el-asincronismo-en-javascript)
  - [Cómo funciona el tiempo en JavaScript](#cómo-funciona-el-tiempo-en-javascript)
  - [Callbacks](#callbacks)
  - [Manejando el Orden y el Asincronismo en JavaScript](#manejando-el-orden-y-el-asincronismo-en-javascript)
  - [Manejo de errores con callbacks](#manejo-de-errores-con-callbacks)
  - [Promesas](#promesas)
  - [Promesas Encadenadas](#promesas-encadenadas)
  - [Múltiples promesas en paralelo](#múltiples-promesas-en-paralelo)
  - [Async-await](#async-await)
  
## Primeros pasos en JavaScript

### Variables
**Variables:** Una variable está formada por un espacio en el sistema de almacenaje ( memoria principal de un ordenador) y un nombre simbólico (un identificador ) que está asociado a dicho espacio. Ese espacio contiene una cantidad de información conocida o desconocida, es decir un valor. El nombre de la variable es la forma usual de referirse al valor almacenado: esta separación entre nombre y contenido permite que el nombre sea usado independientemente de la información exacta que representa.

**var:** Con este comando podemos declarar variables, hay que tener cuidado porque JS es un lenguaje débilmente tipado, esto quiere decir que cuando declaramos una variable, no exige la asociación con un tipo de dato. Por ejemplo, para escribir un String la palabra tiene que ir en comillas.

### var, let y const
* **var** es la manera más antigua de declarar variables. No es muy estricta en cuanto al alcance, ya que al declarar variables de esta forma, dichas variables podrán ser accedidas, e incluso modificaddas, tanto dentro como fuera de los bloques internos en una función.

* Con **let** por otra parte, el alcance se reduce al bloque (las llaves) en el cual la variable fue declarada. Fuera de este bloque la variable no existe. Una vez declarada la variable con let, no se puede volver a declarar con en ninguna otra parte de la función.

* **const** al igual que ““let”” se define en el contexto o alcance de un bloque, a diferencia de let y var, las varibles definidas como constantes (const), ya no podrán ser modificadas ni declaradas nuevamente, en ninguna otra parte de la función o el contexto en el que ya existen.

La recomendación es reducir siempre al mínimo el alcance de nuestras variables, por lo que se debe usar let en lugar de var mientras sea posible.


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

### Fechas
Con variables de tipo **Date**, se pueden realizar operaciones de suma y resta similares a las que se realizan con números. El resultado que se obtiene está en milisegundos, por lo que luego hay que hacer algunas operaciones adicionales para llevarlos a días, meses o años según queramos. También aplica para Horas, Minutos, Segundos y Milisegundos.

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

### Estructuras repetitivas: for
El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para ejecutar el bucle, y dentro las llaves irán las instrucciones que se deben repetir.

### Estructuras repetitivas: while
While se ejecuta únicamente mientras la condición que se está evaluando es verdadera.

En ocasiones nuestro código puede fallar por errores de syntaxis o errores lógicos. En caso de que quieras verificar tu código, debes utilizar un debugger. El código se detiene cada vez que lee esta palabra.

### Estructuras repetitivas: do-while
Otra estructura repetitiva es el do-while. A diferencia de la instrucción while, un bucle do…while se ejecuta una vez antes de que se evalúe la expresión condicional.

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

### Funciones como parámetros
En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.

### Funciones recursivas
La recursividad es un concepto muy importante en cualquier lenguaje de programación. Una función recursiva es básicamente aquella que se llama (o se ejecuta) a sí misma de forma controlada, hasta que sucede una condición base.

### Memoización
La memoización es una técnica de programación que nos permite ahorrar cómputo o procesamiento en JavaScript, al ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones de nuevo, cuando se vuelva a llamar con los mismos parámetros. Es similar a usar memoria cache.

### Closures
Un closure, básicamente, es una función que recuerda el estado de las variables al momento de ser invocada, y conserva este estado a través de reiteradas ejecuciones. Un aspecto fundamental de los closures es que son funciones que retornan otras funciones.

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

### Clases en JavaScript
Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.

La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.

El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.

## Asincronismo

### Cómo funciona el asincronismo en JavaScript
JavaScript sólo puede hacer una cosa a la vez, sin embargo; es capaz de delegar la ejecución de ciertas funciones a otros procesos. Este modelo de concurrencia se llama EventLoop.

JavaScript delega en el navegador ciertas tareas y les asocia funciones que deberán ser ejecutadas al ser completadas. Estas funciones se llaman callbacks, y una vez que el navegador ha regresado con la respuesta, el callback asociado pasa a la cola de tareas para ser ejecutado una vez que JavaScript haya terminado todas las instrucciones que están en la pila de ejecución.

Si se acumulan funciones en la cola de tareas y JavaScript se encuentra ejecutando procesos muy pesados, el EventLoop quedará bloqueado y esas funciones pudieran tardar demasiado en ejecutarse.

### Cómo funciona el tiempo en JavaScript
En principio, cualquier tarea que se haya delegado al navegador a través de un callback, deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. Por esta razón el tiempo de espera definido en funciones como setTimeout, no garantizan que el callback se ejcute en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas se haya vaciado.

### Callbacks
Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después, dentro de la función externa para completar alguna acción.

### Manejando el Orden y el Asincronismo en JavaScript
Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callback se haga a través de una función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell.

### Manejo de errores con callbacks
Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().

### Promesas
Las promesas tienen tre estados:
* pending
* fullfilled
* rejected

Las promesas se invocan de la siguiente forma:
```js
new Promise( ( resolve, reject ) => {
  // --- llamado asíncrono
  if( todoOK ) {
     // -- se ejecutó el llamado exitosamente
     resolve()
  } else {
     // -- hubo un error en el llamado
     reject()
  }
} )
```

### Promesas Encadenadas
A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho más legible y mantenible.

### Múltiples promesas en paralelo
Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas, que pasaremos como parámetro a ``` Promise.all( arregloDePromesas )```, con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.

### Async-await
Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, y encerrar el llamado a Promises.all() dentro de un bloque try … catch.