const environment = process.env.ENVIRONMENT || 'development'
console.log('environment: ', environment);
const config = require('../../knexfile')[environment];
module.exports = require('knex')(config);
