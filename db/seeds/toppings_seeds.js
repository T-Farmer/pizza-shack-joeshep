'use strict';

cosnt toppings = require('./toppings');

exports.seeds = function(knex, Promise){
  let toppingsPromises = toppings.map(({name}) => {
    return knex('toppings').insert({name});
  });
  //deletes all existing entries
  return knex('toppings').del()
    .then(() => {
      //inserts seed entries
      return Promise.all(toppingsPromises);
    });
};
