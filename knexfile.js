// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'pizza_shack'
    },
    pool: {
      min: 2,
      max: 10
  },
  migrations: {
    directory: __dirname + '/db/migrations'
},
  seeds:  {
    directory: __dirname + '/db/seeds'
  },
}
  
};
