const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const router = new Router();


router.get('/', ctx => {
  return ctx.body = {
      status: 200,
      message: 'Success',
  }});
  app.use(router.routes());

  module.exports = app;