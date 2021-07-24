
#  Introducción al proyecto test global66 (Pokémons favoritos)

  
Antes de iniciar el proyecto se revisó los requerimientos enviados al correo para saber que se debía implementar.

Se debe usar el framework vue.js así que la decisión que se tomó es usar el CLI de vue desarrollado por el mismo equipo de vue.js esto nos ayuda a llevar una estructura estándar y mejor la transición para los desarrolladores nuevos.

Se instaló la versión 2 de vue.js, sass como pre-procesador, vue-router para manejar las rutas, vuex para centralizar las propiedades que se comporten entre componentes, vuex-persistedstate para poder persistir los favoritos del usuario, axios para las solicitudes a la api.

Se creó una carpeta llamada widgets para los componentes que son átomos como (botones, campos de búsqueda, iconos, etc...).

Los iconos se crearon como componentes para poder aprovechar la modificación de tamaño y color con css.

Las imágenes que se van a utilizar se optimizaron para que tengan un menor peso y pueda cargar mucho más rápido.

Se crearon variables globales de sass para la reutilización de colores, fuentes, sombras, tamaños y  bordes en todos los componentes.

Se agregó reset css para formatear los estilos predefinidos de los navegadores y queden estándar para todos.

Se agregó box-sizing global para evitar que los padding y border generen tamaños no deseados en las cajas.

Los componentes se dividieron en archivos vue, scss y js. 

Los estilos de cada componente están con scoped.

Se creo una instancia de axios con la url base del api rest.


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

  

###  Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).