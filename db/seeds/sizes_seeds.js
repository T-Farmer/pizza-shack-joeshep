'use strict';

const {knex} = require('../database');
const sizes = require('./sizes');

const sizePromises = sizes.map(({name, inches}) => {
  return knex('sizes').insert({name, inches});
});

exports.seeds = function(knex, Promise){
  //deletes all existing entries
  return knex('sizes').del()
    .then(() => {
      //inserts seed entries
      return Promise.all(sizePromises);
    });
};
