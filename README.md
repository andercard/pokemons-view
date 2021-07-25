
#  Introducción al proyecto test global66 (Pokémons favoritos)

Antes de iniciar el proyecto se revisó los requerimientos enviados al correo para saber que se debía implementar.

Se debe usar el framework vue.js así que la decisión que se tomó es usar el CLI de vue desarrollado por el mismo equipo de vue.js esto nos ayuda a llevar una estructura estándar y mejorar la transición de nuevos desarrolladores qeu entren al equipo.

Se instaló la versión 2 de vue.js, sass como pre-procesador, vue-router para manejar las rutas, vuex para centralizar las propiedades que se comparten entre componentes, vuex-persistedstate para poder persistir los favoritos del usuario, axios para las solicitudes a la api.

Se creó una carpeta llamada widgets para los componentes que son átomos como (botones, campos de búsqueda, iconos, etc...).

Los iconos se crearon como componentes para poder aprovechar la modificación de tamaño y color con css.
  

Las imágenes que se van a utilizar se optimizaron para que tengan un menor peso y pueda cargar mucho más rápido.

Se crearon variables globales de sass para la reutilización de colores, fuentes, sombras, tamaños y bordes en todos los componentes.

Se agregó reset css para formatear los estilos predefinidos de los navegadores y queden estándar para todos.

Se agregó box-sizing global para evitar que los padding y border generen tamaños no deseados en las cajas.

Los componentes se dividieron en archivos vue, scss y js.

Los estilos de cada componente están con scoped.

Se creó una instancia de axios con la url base del api rest.

##  Implementación

Para agregar la vista de bienvenida se usó el alias @ para la imagen de pikachu se trabaja de esta forma porques es una buena práctica si se copia el mismo código en otra parte del proyecto no va a llorar por rutas, la altura mínima de la vista de bienvenida es 100vh combinada con flex para centrar la información esto se hace para tener presente las pantallas independientemente la altura y el ancho.

Se creó un componente llamado Loading con una pequeña animación se importó en el archivo App.vue para que quede global y se pueda usar en toda la aplicación se combinó con vuex para poder activarlo y desactivarlo de una manera más sencilla.

Para la reutilización de componentes se dividió los iconos en svg, el campo de búsqueda,  lista vacía, item de la lista, barra de menu, botón de favoritos.

Para simular los favoritos se usó el vuex y la persistencia del store esto quiere decir que si se recarga la página los favoritos se mantienen. A la información que nos devuelve la api  se le añadió un flag custom que indica si está en favorito o no. 

Se creó una lista para poder agregar todos los pokemon que están en favoritos.

##  Project setup

```

yarn install

```
  

###  Compiles and hot-reloads for development


```


yarn serve


```

###  Compiles and minifies for production


```

yarn build


```


###  Run your unit tests


```

yarn test:unit

```


###  Lints and fixes files

```

yarn lint

```