---
layout: article
title: "Liberando los libros de Amazon"
categories: blog
date: 2015-09-27 13:30
excerpt: ¿Y si no tengo un Kindle?
tags: [libros, tecnología, estudios]
comments: true 
share: true 
---

No era especialmente un fan de los profesores de "compra mi libro para mi asignatura" por pensar en ello como una maniobra de monetizar, de manera externa, la materia que impartían en la universidad. Pero todo ello cambió al ver que también podía hacer más fácil a los alumnos.

Pero todo tienen un pero, y este es que si eliges una plataforma cerrada para dar salida a tus escritos puedes estar haciéndole la vida imposible a tus alumnos. Al editar tu libro en Amazon estás haciendo que no sea imprimible, ni tampoco portable a otras plataformas que no sea el Kindle, el cual os recomiendo que os compréis si estáis pensando en un e-book.

Así pues, si estáis fuera del ecosistema de Amazon, pero queréis acceder a su tienda y tener tus libros en PDF para poder imprimir, subrayar o tenerlos en ePub para usarlos en otros ebooks existe una solución. *Calibre* es tu amigo.

Esta aplicación junto con uno de sus plugins, *deDRM*, te permiten quitar el DRM, que es un sistema de protección para evitar la copia de material con copyright y después convertirlo al formato que más te convenga. 

## Instalando Calibre y deDRM

1. Antes de nada, para instalar *Calibre* puedes pasar por este [link][calibre] y descargar la versión de tu sistema operativo, Mac, Windows o Linux.
2. Para descargar el plugin *deDRM para Calibre* sigue este [link][dedrm] y descarga el archivo **DeDRM_tools_6.3.4.zip**
3. Descomprime el archivo descargado y ahora abre Calibre.
4. Entra en el menú de Opciones o Preferencias, después pulsa en "Cambiar el comportamiento de calibre" o "Change calibre behavior"
5. Pulsa en Plugins, bajo el menú de "Avanzado", tiene la forma de una pieza de puzzle.
6. Haz clic en el botón de "Cargar Plugin desde archivo".
7. Busca la carpeta donde has descomprimido el archivo, encontrarás una carpeta llamada "DeDRM_calibre_plugin".
8. Dentro selecciona el archivo "DeDRM_calibre_plugin.zip", pulsa en Add o Open o Abrir, dependiendo del idioma y sistema operativo.
9. Aparecerá una ventana, no entres en pánico, Acepta, dale a "Sí" y seguidamente aparecerá una ventana indicando que el plugin ha sido instalado, pulsa en Aceptar.

Ahora puedes importar tus libros de Kindle que automáticamente serán desprotegidos y podrás convertirlos pulsando sobre ellos con el clic derecho y seleccionando "convertir libro".

## ¿Pero donde encuentro los archivos de los libros?

Esta pregunta es común, y puede que la información que te de no sea la de tu caso pues parece que dependiendo de la versión instalada (si es más reciente o tiene ya algo de tiempo) estas carpetas pueden cambiar.

- Mac ⇢ Documentos / My Kindle Content
- Windows 7, XP, Vista ⇢ C: / Usuario / Tu usuario / Documents / My Kindle Content
- Windows 8 y 10 ⇢ C: / Usuario / Tu usuario / AppData / Local / Amazon / Kindle / application / content

## Últimos apuntes acerca del DRM

Retirar el DRM solo es legal en caso de que sea para uso propio y tengas una copia del original, dicho de otra manera, el único caso válido es que quieras llevarte tus libros a otros dispositivos. Dicho esto y con el aviso de rigor espero que esta entrada haya servido de algo y si consideras que es necesaria cualquier corrección o tienes alguna duda [contacta][mail] conmigo.

[calibre]: http://calibre-ebook.com/download
[dedrm]: https://github.com/apprenticeharper/DeDRM_tools/releases/tag/v6.3.4
[mail]: mailto:jmartgod@enoughmind.com