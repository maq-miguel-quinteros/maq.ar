# Introducción a Vite, mas Deploy en Github Pages (Por si no lo vite)

Video: [vite+deploy github](https://www.youtube.com/watch?v=UX4gvort2TU)

## Build

Para realizar el build en un proyecto de vite ejecutamos `mpm run build`. Esto crea una nueva carpeta en el proyecto llamada `dist`. Esta carpeta contiene los archivos estáticos del proyecto, archivos HTML, CSS y JS. Si queremos ver como funcionaría el proyecto en producción sin realizar el build podemos utilizar el comando `npm run preview`. Podemos encontrar todos los comandos que ejecutamos dentro de `package.json`.

## Deploy en GitHub

Seguimos la siguiente guía [vite_deploy_github](https://es.vitejs.dev/guide/static-deploy#github-pages). Primero necesitamos subir el código a un repositorio de GiyHub. Configuramos localmente el archivo `vite.config.js`.

Instalamos el módulo gh-pages

```shellscript
npm i gh-pages
```

Una vez instalador el módulo podemos desplegar la carpeta dist mediante el siguiente comando `gh-pages -d build`. 
