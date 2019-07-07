'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.lottery.query);
  router.get('/ssqquery', controller.lottery.ssq_query);
}; 
