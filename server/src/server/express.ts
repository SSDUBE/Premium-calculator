import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from '../schema';
import cors from 'cors';

// import knex from './knex/knex';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.get("/", (_req, res) => {
  res.send("Hello World")
})

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
