# Electronic Advisor

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
  </ol>
</details>

# Objetivo

Electronic-Advisor es una página en la que podras estar a la ultima en lo referente a fiestas y festivales de musica electrónica de toda Europa.

## Stack

Tecnologías utilizadas:

![MYSQL](./img/mysql-logo.svg){width=80} ![EXPRESS](./img/express-109.svg){width=80} ![TYPESCRIPT](./img/typescript.svg){width=40} ![NODEJS](./img/nodejs.svg){width=80}

## Diagrama BD

!['imagen-db'](./img/Captura%20BD.JPG)

## Instalación en local

1. Clonar el repositorio
   `git clonehttps://github.com/FernandoCatalaMunyoz/Electronic-Advisor-Backend`
2. Conectar repositorio con la base de datos usando el archivo `.env.sample` como plantilla
   ```
   PORT=
   #conexion a DB
   DB_USER=
   DB_PASSWORD=
   DB_PORT=
   DB_HOST=
   DB_DATABASE=
   ```
3. Añadimos los scripts al package.json de las migraciones y los seeders:

- `"migrations": "typeorm-ts-node-commonjs migration:run -d ./src/database/db.ts"`

- `"revert-migrations": "typeorm-ts-node-commonjs migration:revert -d ./src/database/db.ts"`

- `"seeder": "ts-node ./src/database/seeders/seeders.ts"`

- `"dev": "nodemon ./src/server.ts"`

5. Ejecutamos las migraciones:
   `npm run-migrations`
6. Ejecutamos los seeders:
   `npm run seeder`
7. Arrancamos el servidor:
   `npm run dev`

## Usuarios y contraseñas:

Email y password de lso 3 usuarios básicos:

    - User (Role user):
        email: user@user.com
        password: Aa123456

    - Super_admin (Role super_admin):
        email: super_admin@super_admin.com
        password: 123456

## ENDPOINTS

### AUTH

#### Register:

    url: POST localhost:4000/api/auth/register
    Body:
    {
      "firstName":"Nombre del usuario",
        "lastName" : "Apellido del usuario",
        "country" : "Pais"
        "email" : "email del usuario",
        "password" : "Contraseña"
    }

### Login:

     url: POST localhost:4000/api/auth/login
     Body:
    {
        "email" : "email del usuario",
        "password" : "Contraseña"
    }

### USER

### Ver todos los usuarios(super_admin):

     url: GET localhost:4000/api/users
     Auth/Bearer:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM1LCJyb2xlTmFtZSI6InN1cGVyX2FkbWluIiwiaWF0IjoxNzA5NTgwMTYyLCJleHAiOjE3MTE0NTIxNjJ9.mk2x9ZUd-Q3gSK--X2oEf5TkuO2ajnLBplAiKHNlrig"

### Ver perfil de usuario:

     url: GET localhost:4000/api/profile
     Auth/Bearer:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MDk1ODAyNjAsImV4cCI6MTcxMTQ1MjI2MH0.iAIxUOAKcjSmJmZ0hOg4QTMVwjYGjZA8_IyycJTq76g"

### Modificar perfil usuario:

     url: PUT localhost:4000/api/profile
     Auth:
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MDk1Nzg4OTMsImV4cCI6MTcxMTQ1MDg5M30.1YEEHjp5J3GgaVLliRBEJOCy4dyYKTNJ8WTI0o4xfjA"
     Body:
    {
        "dato a cambiar"(first_name,last_name,email): "dato a introducir"
    }

### Eliminar perfil usuario(super_admin):

     url: DELETE localhost:4000/api/users/:id
     Auth:
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM1LCJyb2xlTmFtZSI6InN1cGVyX2FkbWluIiwiaWF0IjoxNzA5NTgwMTYyLCJleHAiOjE3MTE0NTIxNjJ9.mk2x9ZUd-Q3gSK--X2oEf5TkuO2ajnLBplAiKHNlrig"

### Ver todos los servicios:

    url: GET localhost:4000/api/services

### Crear servicio(super_admin):

    url: POST localhost:4000/api/services
     Auth:
       Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM1LCJyb2xlTmFtZSI6InN1cGVyX2FkbWluIiwiaWF0IjoxNzA5NTgwMTYyLCJleHAiOjE3MTE0NTIxNjJ9.mk2x9ZUd-Q3gSK--X2oEf5TkuO2ajnLBplAiKHNlrig"
     Body:
    {
        "services_name": "Nombre del servicio a crear"
    }

### Generar cita:

    url: POST localhost:4000/api/appointments
    Auth:(del usuario que quiere pedir una cita)
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVOYW1lIjoidXNlciIsImlhdCI6MTcwOTU4MjY2OCwiZXhwIjoxNzExNDU0NjY4fQ.q0lqTiG7mNRSGTLBeclydT5pylVsnldk-6VcqDYg8Vk"
    Body:
    {
        "appointment_date": "MM/DD/YY hh:mm",
        "service_id: "id del servicio (1-5)"
    }

### Actualizar cita:

    url: PUT localhost:4000/api/appointments
    Auth:(del usuario que quiere actualizar una cita)
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MDk1NzMyMjksImV4cCI6MTcxMTQ0NTIyOX0.i92n1vEstGOt9K37X8-oJ_GtivBJ0yFjkNw_IIwWKl4"
    Body:
    {
        "appointmentId":"Id de la cita a cambiar",
        "appointmentDate": "Nueva fecha(MM/DD/AA hh:mm)"
    }

### Recuperar cita:

    url: GET localhost:4000/api/appointments/:id
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MDk1NzgzOTgsImV4cCI6MTcxMTQ1MDM5OH0.sA9fkoNp_AdCM5npU7Sv4o6V-DW9Jso9CfennkPFCQs"

### Recuperar citas del usuario loggeado:

    url: GET localhost:4000/api/appointments
    Auth:(del usuario que quiere consultar sus citas)
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MDk1NzgzOTgsImV4cCI6MTcxMTQ1MDM5OH0.sA9fkoNp_AdCM5npU7Sv4o6V-DW9Jso9CfennkPFCQs"
