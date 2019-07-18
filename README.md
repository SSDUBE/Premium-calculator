This projected was created using express server, graphql, knex, objection, react and apollo client

to compile the project you must have docker installed on your machine.

navigate to server
  - cd server
run:
  - docker compose-up   to spin up the database container
  - Make sure you have a postgres database 
on a different terminal run 
  - yarn or npm install to install the node modules
  - yarn migrate to create all tables
if failing to connect or getting incorrect password modify knexfile and set it to your correct password
  - yarn seed to insert required data for premium calculator to work
  - yarn start or npm start to start the server

Open a new terminal navigate to web:
  - cd web
  - yarn install or npm install
  - yarn start or npm start

ENJOY!!!!
