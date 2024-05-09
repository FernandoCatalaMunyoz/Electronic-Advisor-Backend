# Electronic Advisor

!['imagen-db'](./img/logo.png)

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

<img src="/img/mysql.svg" alt="GitHub" />

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

#### Ver todos los usuarios(Super_admin):

     url: GET localhost:4000/api/users
     Auth/Bearer:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"

#### Ver perfil de usuario:

     url: GET localhost:4000/api/user/profile
     Auth/Bearer:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4LCJyb2xlTmFtZSI6InVzZXIiLCJmaXJzdE5hbWUiOiJGZXJuYW5kbyIsImxhc3ROYW1lIjoiRmVybmFuZG8iLCJlbWFpbCI6ImZlckBmZXIuY29tIiwiaWF0IjoxNzE0NTYxMDQ2LCJleHAiOjE3MTY0MzMwNDZ9.XTup-szvLC7EOccn9MmYdcwa6U_RQX0FTEKexmNw2XY"

#### Modificar perfil usuario:

     url: PUT localhost:4000/api/user/profile
     Auth:
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4LCJyb2xlTmFtZSI6InVzZXIiLCJmaXJzdE5hbWUiOiJGZXJuYW5kbyIsImxhc3ROYW1lIjoiRmVybmFuZG8iLCJlbWFpbCI6ImZlckBmZXIuY29tIiwiaWF0IjoxNzE0NTYxMDQ2LCJleHAiOjE3MTY0MzMwNDZ9.XTup-szvLC7EOccn9MmYdcwa6U_RQX0FTEKexmNw2XY"
     Body:
    {
        "dato a cambiar"(firstName,lastName,country,email): "dato a introducir"
    }

#### Eliminar perfil usuario(Super_admin):

     url: DELETE localhost:4000/api/user/:id
     Auth:
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"

#### Eliminar perfil propio:

     url: DELETE localhost:4000/api/user/:id
     Auth:
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"

### ARTISTA

#### Crear artista(Super_admin):

    url: POST localhost:4000/api/artist
    Auth:
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"
      -  Body:
    {   "id": id del artista a cambiar
        "dato a cambiar"(name,genre): "dato a introducir"
    }

#### Borrar artista(Super_admin):

    url: DELETE localhost:4000/api/artist/:id
    Auth:
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"

#### Modificar artista(Super_admin):

    url: PUT localhost:4000/api/artist/:id
    Auth:
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"
      -  {
        "id":id del artista a modificar
        "dato a cambiar"(name,genrel): "dato a introducir"
    }

#### Traer todos los artistas:

    url: GET localhost:4000/api/artist

#### Traer artista por ID:

    url: GET localhost:4000/api/artist/:id

#### Traer artistas por genero:

    url: PUT localhost:4000/api/artist
    Body:
      -  {
        "genre": id delgenero del que queremos traer los artistas
    }

### ROLE

#### Crear Role(Super_admin)

     url: POST localhost:4000/api/roles

- Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"

  Body: - {

  "name": nombre de role a crear
  }

#### Borrar Role(Super_admin)

      url: delete localhost:4000/api/role/:id
    - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"

#### Modificar Role(Super_admin)

      url: PUT localhost:4000/api/roles/:id
    - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"
     Body:
      -  {
        "name": nombre de role modificado
    }

### EVENT

#### Crear evento(Super_admin)

      url: POST localhost:4000/api/events
    - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"
     Body:
      -  {
        "name": nombre del evento
        "month":mes del evento
        "day":dia del evento
        "year": año del evento
        "clubId": id del club donde se celebra el evento
    }

#### Modificar evento(Super_admin)

      url: PUT localhost:4000/api/events/:id
    - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"
     Body:
      -  {
        "name": nombre del evento
        "month":mes del evento
        "day":dia del evento
        "year": año del evento
        "clubId": id del club donde se celebra el evento
    }

#### Borrar evento(Super_admin)

      url: DELETE localhost:4000/api/events
    - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"

#### Traer todos los eventos

       url: GET localhost:4000/api/events

#### Traer evento por ID

       url: POST localhost:4000/api/events/:id

### GENRE

#### Crear Genero(Super_admin)

      url: POST localhost:4000/api/genres
    - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"
     Body:
      -  {
        "name": nombre del genero a crear
    }

#### Borrar Genero(Super_admin)

      url: DELETE localhost:4000/api/genres/:id
    - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"

#### Traer Generos

     url: GET localhost:4000/api/genres

### CLUB

#### Crear club(Super_admin)

      url: POST localhost:4000/api/clubs
    - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"
     Body:
      -  {
        "name": nombre del club
        "adress": direccion del club
        "link": link a la web del club
    }

#### Modificar club(Super_admin)

      url: PUT localhost:4000/api/clubs/:id
    - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"
     Body:
      -  {
        "name": nombre del club
        "adress": direccion del club
        "link": link a la web del club
    }

#### Borrar club(Super_admin)

       url: DELETE localhost:4000/api/clubs/:id
    - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVOYW1lIjoic3VwZXJfYWRtaW4iLCJmaXJzdE5hbWUiOiJzdXBlcl9hZG1pbiIsImxhc3ROYW1lIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6InN1cGVyX2FkbWluQHN1cGVyX2FkbWluLmNvbSIsImlhdCI6MTcxNDU1ODA1NiwiZXhwIjoxNzE2NDMwMDU2fQ.OQ-F3kzM1Yti9pILSeAt4U89JVGIuWW95_LyIdl_Sds"

#### Traer todos los clubs

    url: GET localhost:4000/api/clubs

#### Traer club por ID

    url: GET localhost:4000/api/clubs/:id
