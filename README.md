# Full Stack JS Alkemy Challenge

_Esta es mi solución del challenge para la acelerarión Full Stack JS de [Alkemy](https://www.alkemy.org/)_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

```
node >= 16.0.0
yarn >= 1.0.0
postgresql >= 14.2
```

### Instalación 🔧

_El proyecto está compuesto de dos carpetas **client** y **server**_

#### Para ejecutar el **servidor**:

- Crea una base de datos en PostgreSQL
- Entra a la carpeta **server** y renombra el archivo **.env-example** a **.env**

```
DATABASE_URL=postgres://{YOUR_POSTGRES_USER}:{YOUR_PASSWORD}@localhost:{YOUR_PORT}/{YOUR_DATABASE_NAME}
JWT_SECRET=ULTRA_SECURE_AND_ULTRA_LONG_SECRET_TOKEN_HERE
FRONTEND_URL=http://localhost:3000
```

- Reemplaza la variable `DATABASE_URL` con tus credenciales
- Reemplaza la variable `JWT_SECRET` con el valor que creas necesario
- Ejecuta el comando `yarn` para instalar las dependencias
- Ejecuta el comando `yarn dev` para levantar el servidor

#### Para ejecutar el **cliente**:

- Entra a la carpeta **client** y renombra el archivo **.env-example** a **.env**
- Ejecuta el comando `yarn` para instalar las dependencias
- Ejecuta el comando `yarn dev` para levantar el servidor de desarrollo
- Abrir el navegador e ir a la dirección `http://localhost:3000` para visualizar la interfaz

## Construido con 🛠️

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://es.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Yarn](https://yarnpkg.com/)
- [Express.js](https://expressjs.com/es/)
- [Sequelize](https://sequelize.org/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)

⌨️ con ❤️ por [brayanobisto](https://github.com/brayanobisto)
