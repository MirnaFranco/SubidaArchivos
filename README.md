# Proyecto de Subida de Archivos con Multer

Este es un proyecto que permite la subida de archivos (imágenes) a un servidor utilizando Express.js y Multer. Los archivos se almacenan temporalmente en el servidor antes de ser procesados o almacenados de forma permanente.

## Tecnologías

- Node.js: Plataforma de JavaScript del lado del servidor.
- Express.js: Framework web para Node.js.
- Multer: Middleware para la gestión de archivos subidos.
- Tailwind CSS: Framework CSS para estilizar el frontend.

## Decisiones Tomadas

1. Tecnología Backend: Se ha elegido Express.js por ser un framework ligero y flexible para manejar rutas HTTP y middleware, lo que facilita la creación de una API para subir archivos.

2. Middleware para Archivos: Se utiliza Multer, que es un middleware para manejar el upload de archivos en Express. Se configura para aceptar solo imágenes (formatos jpeg, jpg, png), y los archivos se almacenan en una carpeta específica (src/uploads).

3. Estructura del Proyecto:

src: Contiene los archivos del servidor y el código de la API.
controllers: Funciones que manejan la lógica de la aplicación.
middlewares: Configuración de Multer para la subida de archivos.
routes: Definición de las rutas de la API.
uploads: Carpeta donde se almacenan las imágenes subidas.
public: Contiene el archivo HTML y archivos estáticos para el frontend.
4. Validación de Archivos: La validación de los archivos se realiza en el middleware multerConfig.js, donde solo se permiten archivos con las extensiones jpeg, jpg y png.

5. Frontend: Se utiliza un formulario HTML con un campo de archivo que permite al usuario seleccionar una imagen y enviarla al servidor.

## Configuraciones Aplicadas

1. Multer: La configuración de Multer establece un destino de almacenamiento en la carpeta src/uploads y un nombre de archivo único para evitar colisiones.

2. File Filter: El archivo solo se sube si es una imagen en los formatos permitidos. Si no es una imagen, se muestra un mensaje de error.

3. Configuración de Rutas:

Se define una ruta POST /products para agregar productos con su respectiva imagen.
La API responde con el nombre del archivo guardado o un error si la validación falla.

## Instalación

1. Clona este repositorio: git clone https://github.com/MirnaFranco/SubidaArchivos.git
2. Instalar Dependencias

cd SubidaArchivos
npm install
Ejecutar el servidor
npm run dev

## Agregar Productos
Se puede agregar productos mediante una solicitud POST a la ruta /products. Esta ruta permite subir una imagen junto con los datos del producto.

URL: http://localhost:4000/products
Método: POST
Form-data:
Campo: productImage
Valor: [Archivo de imagen]
Campo: productName
Valor: [Nombre del producto]

