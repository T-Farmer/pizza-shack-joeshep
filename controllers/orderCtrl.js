'use strict';

const Order = require('../models/order');
const {knex} = require('../db/database');
const Size = () => knex('sizes');
const Topping = () => knex('toppings');

const getToppings = () =>
  Topping().select()
  .then((rows) => rows)
  .catch((error) => {
    throw error
  });
const getSizes = () =>
  Topping().select()
  .then((rows) => rows)
  .catch((error) => {
    throw error
  });

module.exports.show = (req, res, err) =>
  Promise.all([getToppings(), getSizes()])
  .then(([toppings, sizes]) =>
    res.render('order', {page: 'Order', sizes, toppings})
  ).catch(err)

modules.exports.create = ({body}, res, err) => {
  Order.forge(body)
    .save()
    .then((orderObj) => {
      res.render('index', {orderMsg: 'Thanks for your order!'});
    });
    .catch(({errors}) =>
      Promise.all([
        Promise.resolve(errors),
        getSizes(),
        getToppings()
      ])
  )
  .then(([errors, sizes, toppings]) =>
    res.render('order', {page: 'Order', sizes, toppings, errors, body})
  )
  .catch(err)
};
