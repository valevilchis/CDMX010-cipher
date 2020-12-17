# Cipher-Cifrado Cesar
## Introducción Cesar
El **Cifrado Cesar** es uno de los primeros metodos de cifrado conocidos historicamente. Julio César lo usó para enviar órdenes a sus generales en los campos de batalla. Consistía en escribir el mensaje con un alfabeto que estaba formado por las letras del alfabeto latino normal desplazadas tres posiciones a la derecha. 
En este proyecto el **Desplazamiento/Offset** sera a elección del usuario.  
##### Ejemplo de desplazamiento  
  _Primer linea muestra el alabafeto natural._
    _Segunda linea muestra el alfabeto con desplazamiento de 3._
```
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
```
## Resumen del Proyecto
El proyecto consta de crear una aplicación web para crear contraseñas de ocho caracteres, en primer instancia el usuario ingresara el nombre de usuario, creara una contraseña con caracteres del alfabeto sin la letra **ñ**, seleccionando el desplazamiento que desea obtener para el cambio de caracter  
EL usuario no podra visualizar la contraseña real al momento de la creación,sin embargo, se tendra la opcion de ingresar el texto cifrado a un **input** para descifrar el texto y observar la contraseña real ingresada.

## Pre-requisitos
Los requisitos para poder desarrollar la aplicaciones son:
* Adobe XD _(Prototipado)_
* Visual Studio Code
* nodeJS
* npm
* git
* GitHub
* Javascript
* HTML
* CSS

## Instalación

La herramienta de **Adobe XD**, se puede descargar mediante Cloud Creative de Adobe.  

**Visual Studio Code**, sera nuestro entorno de desarrollo el cual tendras oportunidad de obtenerlo con base en el Sistema Operativo que se esta utilizando, ya se Windows 10 o alguna distribucion de Linux.  

De igual manera **nodejs** en conjunto con **npm**, lo descargaremos con base al SO que estamos utilizando, en WIndows 10 la descarga e instalacion se basa en una serie de pasos por interfaz para realizar la instalacion, mientras que en Linux, la instalación se basa en una serie de comandos con los privilegios de usuario, para ejecutar la instalación.

**Git** se descargara de igual manera para los SO utilizados, y en GitHub crearemos una cuenta de usuario para poder hacer  **fork** al repositorio de Laboratoria, clonar el repositorio con los siguientes comandos:

```
$ git clone https:\\...
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

Y posteriormente impactar los cambios desde nuestro local, hacia el repositorio remoto con el cual estamos colaborando.

Comandos para agregar cambios y subir cambios:

```
$ git status
$ git add . ó $ git add archivo.ext
$ git commit -m "Mensaje de cambio ó actualización"
$ git push 
$ git pull 
```





