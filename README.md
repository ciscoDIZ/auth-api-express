# Heroku

## Introducción

Heroku es una plataforma como servicio (PaaS) de computación en la Nube que soporta distintos lenguajes de programación.

Heroku es propiedad de Salesforce.com Heroku, es una de las primeras plataformas de computación en la nube, que 
fue desarrollada desde junio de 2007, con el objetivo de soportar solamente el lenguaje de programación Ruby, pero 
posteriormente se ha extendido el soporte a Java, Node.js, Scala, Python, PHP, Go y Clojure. La base del sistema 
operativo es Debian o, en la nueva plataforma, el sistema basado en Debian Ubuntu.

[Fuente: Wikipedia](https://es.wikipedia.org/wiki/Heroku)

## Despliegue de aplicación Node.js

Binenvenido a mi guía sobre como desplegar una aplicacion Node.js en heroku. si quieres seguir esta guía al pié
de la letra, dejo un enlace a [mi repositorio en GitHub](https://github.com/ciscoDIZ/auth-api-express) dónde tengo
la app con la que he hecho esta guía, espero que te sea de agrado, sin mas vamos a preparar nuestro entorno para poder 
ejecutar los comandos de heroku. Para esto solo debemos instalar la cli, command line interface de heroku, está disponible 
para las tres principales plataformas: Windows, OSX, y Linux. En Ubuntu se encuentra disponible a través de snap, y el 
comando necesario para completar satisfactoriamente su instalación es el siguiente:

```shell
snap install heroku
```

Una vez instalada la cli, se debe iniciar sesión con las credenciales de tu cuenta en heroku, y para esto se ejecuta el siguiente comando:

```shell
heroku login -i
```

nos hará una serie de preguntas donde debemos introducir nuestras credenciales. Sabremos que todo ha ido bien si obtenemos 
una respuesta en teminal similar a la descrita a continuacuón. De esta manera tan sencilla ya habríamos iniciado sesión y estaríamos
listos para continuar con la guía.

```shell
heroku: Enter your login credentials
Email: me@example.com
Password: ***************
Two-factor code: ********
Logged in as me@heroku.com
```

Continuamos con el despligue de la aplicación. Primero debemos crear la aplicación en heroku, para esto, la cli de heroku provee el comando create
al que pasandole de manera opcional el nombre de la aplicación, haría todo el trabajo sucio por nosotros. Para completar este paso, nos dirigimos a
una shell, y tecleamos el siguiente comando:

```shell
heroku create [nombre-aplicación]
```

con este paso hemos creado nuestra aplicación en heroku con su dominio incluido, cabe destacar, que si no se define el 
nombre del proyecto, heroku nos pondrá uno por defecto, el cual se replicaría al dominio lo que podría llevar a confusiones; 
por eso, recomiendo siempre asignar el nombre de la aplicación para evitar posibles errores.
Ya hemos creado la aplicación, ahora vamos a clonar un repositorio que tengamos en github, para esta gía, usaré la aplicación 
proporcionada en líneas anteriores, pero tu podrías utilizar cualquiera, si es verdad que para poder seguir los pasos al pié de la letra, 
preferiblemete deberia ser al menos una aplicación condificada con node.js, no es estrictamente necesario. En caso de usar otro lenguaje 
que no sea JavaScript, deberás ocuparte de acomodar tu código al entorno de heroku.

Ejecutamos en nuestra shell el siguiente comando git para descargar el código a nuestro repositorio local:

```shell
git clone <https://url/repositorio>
```
cuando se complete la descarga, no estaria de más detenernos a analizar el código del fichero index.js, concretamente en la línea 12, dónde
se establece el puerto por el que express escuchará las peticiones recibibas, a partir del entorno de heroku, en caso de usar tu propia app, 
tan solo deberías añadir la siguiente línea en la definición del entorno en el fichero index.js, por cuestiones semánticas, es preferible definirlo
justo después de los imports, pero estaría bien hacerlo en cualquier punto de nuestro index.js antes de la ejecución de la función listen. 

```javascript
const PORT = process.env.PORT || 3977
```

Con esto tenemos nuestra app lista para ser desplegada en pocos segundos.

Heroku, además de poder ser integrado en GitHub, también dispone de un Git interno, el cual me parece mas adecuado para un primer contacto con esta 
solución de CD/CI ya que es más sencillo de usar y entender. Para desplegar nuestra app, solo deberíamos hacer un push a la rama master del origen definido
por la cli de heroku, que valga la redundancia, esta definido como heroku. Dejando la palabrería a un lado, vamos por fin, a desplegar nuestra app, para lo
que ejecutaremos el siguiente comando en una shell que apunte a la raíz de nuestro repositorio local:

```shell
git push heroku master
```

cuando se termine la subida de ficheros, podemos ejecutar el siguiente comando para abrir directamente nuestra aplicación:
```shell
heroku open
```
Con estos sencillos pasos tendremos nuestra aplicación desplegada en un corto periodo de tiempo, sin dolores de cabeza y de una
manera bastante sencilla, si en algún momento te parece que he obviado algún punto importante, los pasos a seguir están muy bien 
explicados en su [documentación oficial](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

## Despliegue continuo e integración continua CD/CI