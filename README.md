# Documentación de la Aplicación - Ejercicio Técnico
Este proyecto es una respuesta a una prueba técnica solicitada para la posición de Desarrollador Frontend con React.js. La aplicación implementa una simple pantalla de login y una ruta protegida para mostrar un formulario. También incluye funcionalidades como manejo de autenticación, un límite de intentos fallidos de login, y la capacidad de cerrar sesión mediante un botón de logout.

## Estructura del Proyecto
El proyecto contiene los siguientes archivos clave:

#### /src/components/

#### Login.js: Pantalla de login con límite de intentos

#### Form.js: Ruta protegida con formulario de búsqueda

#### /src/api/
api.js: Simulación de API

#### /src/

#### App.js: Controlador principal de rutas y autenticación

#### index.js: Punto de entrada de la aplicación

## Autenticación

El usuario solo puede acceder a la pantalla del formulario si se autentica correctamente con las credenciales proporcionadas. Los intentos de login fallidos están limitados a 3, tras los cuales el formulario de login se desactiva.

## Ruta Protegida
Se utiliza react-router-dom para proteger la ruta /form. Si un usuario no autenticado intenta acceder directamente a /form, es redirigido al login.

## Logout
El usuario puede cerrar sesión haciendo clic en el botón "Cerrar sesión", lo que borra el estado de autenticación y lo redirige al login.

## Instrucciones para Ejecutar la Aplicación
### Clonar el repositorio:
    git clone https://github.com/edgjoa-dev/login-prueba-tecnica.git

### Dependencias
    "react": "^16.0.0",
    "react-dom": "16.12.0",
    "react-scripts": "^5.0.1",
    "react-router-dom": "5.1.2"

### Instalar dependencias:
    npm install

### Ejecutar la aplicación:
    npm start

### La aplicación se ejecutará en http://localhost:3000.



## Posibles Mejoras Futuras
Implementar validación de formularios más robusta (e.g., manejo de contraseñas más seguras).
Agregar tests unitarios con Jest para verificar la lógica del login y la protección de rutas.
Mejorar la UI utilizando CSS o una librería como Tailwind CSS para una mejor experiencia de usuario.

## Conclusión
Este ejercicio implementa un sistema de login simple y efectivo, con protección de rutas y logout, alineado con los requisitos solicitados para la prueba técnica. La solución es extensible y puede mejorarse para incluir funcionalidades adicionales como gestión avanzada de sesiones o integración con un backend real.