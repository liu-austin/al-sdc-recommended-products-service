// jshint esversion:6
const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/products')
  .get(controllers.getAll)
  .post(controllers.postOne);

router
    .route('/products/:id')
    .get(controllers.getOne)
    .put(controllers.updateOne)
    .delete(controllers.deleteOne);

module.exports = router;